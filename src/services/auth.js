import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../config/firebase';
import * as firestoreService from './firestore';

// Admin email
const ADMIN_EMAIL = 'gruthwik44@gmail.com';

// Google provider
const googleProvider = new GoogleAuthProvider();

/**
 * Sign up a new user (student or mentor)
 */
export const signUp = async (email, password, userData) => {
  try {
    // Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('Auth user created:', user.uid);
    
    // Create minimal user document immediately (before onboarding)
    const minimalUserData = {
      email,
      authId: user.uid,
      role: userData.role,
      name: userData.name || email.split('@')[0],
      onboarded: false, // Will be set to true after completing onboarding
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // Try to create user document in Firestore (single attempt, no retries to save quota)
    const result = await firestoreService.createUser(user.uid, minimalUserData);
    
    if (result.success) {
      console.log('User document created successfully');
    } else {
      console.warn('Firestore creation failed, user can still login');
    }
    
    // Always return success - user can complete profile later
    return { 
      success: true, 
      user: { 
        id: user.uid, 
        email: user.email,
        ...minimalUserData
      } 
    };
  } catch (error) {
    console.error('Sign up error:', error);
    let errorMessage = 'Failed to create account';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered. Please try logging in instead.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
        break;
      default:
        errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

/**
 * Sign in existing user
 */
export const signIn = async (email, password) => {
  try {
    console.log('Attempting sign in for:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Sign in successful, user:', user.email);
    
    // Check if admin
    if (email === ADMIN_EMAIL) {
      console.log('Admin login detected');
      return {
        success: true,
        user: {
          id: 'admin',
          email: user.email,
          name: 'Admin User',
          role: 'admin',
          onboarded: true
        },
        role: 'admin'
      };
    }
    
    // Get user data from Firestore
    console.log('Fetching user data from Firestore...');
    const result = await firestoreService.getUser(user.uid);
    
    if (result.success) {
      const userData = result.data;
      console.log('User data retrieved:', userData.role, 'onboarded:', userData.onboarded);
      return {
        success: true,
        user: {
          id: user.uid,
          email: user.email,
          ...userData
        },
        role: userData.role
      };
    } else {
      // User document doesn't exist - create a minimal one
      console.log('User document not found, creating minimal document');
      
      // Try to create a minimal user document
      const minimalUserData = {
        email: user.email,
        authId: user.uid,
        role: 'student', // Default to student
        name: user.displayName || user.email.split('@')[0],
        onboarded: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const createResult = await firestoreService.createUser(user.uid, minimalUserData);
      
      if (createResult.success) {
        console.log('Minimal user document created');
        return {
          success: true,
          user: {
            id: user.uid,
            email: user.email,
            ...minimalUserData
          },
          role: minimalUserData.role
        };
      } else {
        // If creation fails, still allow login with minimal data
        console.warn('Could not create user document, using minimal data');
        return {
          success: true,
          user: {
            id: user.uid,
            email: user.email,
            ...minimalUserData
          },
          role: minimalUserData.role,
          warning: 'Please complete your profile'
        };
      }
    }
  } catch (error) {
    console.error('Sign in error:', error);
    let errorMessage = 'Failed to sign in';
    
    switch (error.code) {
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/Password sign-in is not enabled. Please enable it in Firebase Console: Authentication > Sign-in method > Email/Password';
        break;
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        errorMessage = 'Invalid email or password. Please check your credentials and try again.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed attempts. Please try again later';
        break;
      default:
        errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

/**
 * Sign out current user
 */
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Listen to auth state changes
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Check if admin
      if (user.email === ADMIN_EMAIL) {
        callback({
          id: 'admin',
          email: user.email,
          name: 'Admin User',
          role: 'admin',
          onboarded: true
        });
        return;
      }
      
      // Get user data from Firestore
      const result = await firestoreService.getUser(user.uid);
      if (result.success) {
        callback({
          id: user.uid,
          email: user.email,
          ...result.data
        });
      } else {
        // User document doesn't exist - create minimal one
        console.log('User document not found in onAuthChange, creating minimal document');
        
        const minimalUserData = {
          email: user.email,
          authId: user.uid,
          role: 'student',
          name: user.displayName || user.email.split('@')[0],
          onboarded: false,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        // Try to create the document
        await firestoreService.createUser(user.uid, minimalUserData);
        
        // Return the minimal data
        callback({
          id: user.uid,
          email: user.email,
          ...minimalUserData
        });
      }
    } else {
      callback(null);
    }
  });
};

/**
 * Send password reset email
 */
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent' };
  } catch (error) {
    console.error('Password reset error:', error);
    let errorMessage = 'Failed to send reset email';
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      default:
        errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Check if user is admin
 */
export const isAdmin = (email) => {
  return email === ADMIN_EMAIL;
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async (role = 'student') => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    console.log('Google sign in successful:', user.email);
    
    // Check if admin
    if (user.email === ADMIN_EMAIL) {
      return {
        success: true,
        user: {
          id: 'admin',
          email: user.email,
          name: user.displayName || 'Admin User',
          role: 'admin',
          onboarded: true
        },
        role: 'admin'
      };
    }
    
    // Check if user exists in Firestore (single attempt, no retries)
    const existingUser = await firestoreService.getUser(user.uid);
    
    if (existingUser.success) {
      // User exists, return their data
      return {
        success: true,
        user: {
          id: user.uid,
          email: user.email,
          ...existingUser.data
        },
        role: existingUser.data.role
      };
    } else {
      // New user, create account (single attempt)
      const userData = {
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        role: role,
        onboarded: false,
        authId: user.uid
      };
      
      const createResult = await firestoreService.createUser(user.uid, userData);
      
      if (createResult.success) {
        console.log('User document created successfully');
      } else {
        console.warn('Firestore creation failed, user can still continue');
      }
      
      return {
        success: true,
        user: {
          id: user.uid,
          email: user.email,
          ...userData
        },
        role: role,
        isNewUser: true
      };
    }
  } catch (error) {
    console.error('Google sign in error:', error);
    let errorMessage = 'Failed to sign in with Google';
    
    switch (error.code) {
      case 'auth/popup-closed-by-user':
        errorMessage = 'Sign in cancelled';
        break;
      case 'auth/popup-blocked':
        errorMessage = 'Popup blocked. Please allow popups for this site';
        break;
      case 'auth/cancelled-popup-request':
        errorMessage = 'Sign in cancelled';
        break;
      default:
        errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};
