// Physics Course - Springboard Style Structure
export const physicsCourse = {
  id: 'physics-mastery-101',
  name: 'Physics - Complete Course',
  description: 'Master Physics from mechanics to modern physics with interactive lessons and quizzes',
  subject: 'Science (Physics)',
  level: 'mastery',
  duration: '60 hours',
  thumbnail: '⚛️',
  color: '#6366f1',
  totalLessons: 5,

  lessons: [
    {
      id: 'phy-lesson-1',
      title: 'Motion and Laws of Motion',
      duration: '12 hours',
      order: 1,
      description: 'Understand how objects move and the forces that govern motion',
      topics: [
        {
          id: 'phy-1-1',
          title: 'Distance, Displacement & Speed',
          duration: '45 min',
          xpReward: 100,
          content: `Motion is one of the most fundamental concepts in physics. When an object changes its position with respect to time, it is said to be in motion.\n\nDistance is the total length of the path traveled by an object. It is a scalar quantity (has only magnitude). Displacement is the shortest distance between the initial and final positions. It is a vector quantity (has magnitude and direction).\n\nSpeed = Distance / Time\nVelocity = Displacement / Time`,
          keyPoints: [
            'Distance is scalar, displacement is vector',
            'Speed is rate of change of distance',
            'Velocity is rate of change of displacement',
            'SI unit of speed and velocity is m/s',
            'Distance is always ≥ Displacement'
          ],
          examples: [
            'A car traveling around a circular track covers a distance but has zero displacement after one full round',
            'Walking 3m East then 4m North gives distance=7m but displacement=5m',
            'A ball thrown up and caught back has distance>0 but displacement=0'
          ],
          subtopics: [
            { id: 'phy-1-1-s1', title: 'Scalar vs Vector Quantities', content: 'Scalars have only magnitude (mass, temperature, speed). Vectors have both magnitude and direction (force, velocity, displacement). Understanding this difference is crucial for physics.' },
            { id: 'phy-1-1-s2', title: 'Uniform and Non-Uniform Motion', content: 'Uniform motion: equal distances in equal time intervals. Non-uniform motion: unequal distances in equal intervals. Most real-world motion is non-uniform.' }
          ],
          summary: 'Motion involves change in position over time. Distance and displacement differ fundamentally - distance is total path length while displacement is shortest path between start and end.',
          quiz: [
            { id: 'q1', question: 'A body moves 3m East and 4m North. What is the displacement?', options: ['7m', '5m', '1m', '12m'], correct: 1, explanation: 'Using Pythagoras: √(3²+4²) = √25 = 5m' },
            { id: 'q2', question: 'Which is a vector quantity?', options: ['Speed', 'Mass', 'Velocity', 'Temperature'], correct: 2, explanation: 'Velocity has both magnitude and direction, making it a vector.' },
            { id: 'q3', question: 'SI unit of velocity is:', options: ['km/h', 'm/s', 'cm/s', 'mph'], correct: 1, explanation: 'The SI unit of velocity is metres per second (m/s).' }
          ]
        },
        {
          id: 'phy-1-2',
          title: 'Acceleration and Equations of Motion',
          duration: '60 min',
          xpReward: 120,
          content: `Acceleration is the rate of change of velocity with time. a = (v - u) / t where u is initial velocity, v is final velocity, and t is time.\n\nThree equations of motion (for uniform acceleration):\n1. v = u + at\n2. s = ut + ½at²\n3. v² = u² + 2as\n\nThese equations are fundamental tools for solving kinematics problems.`,
          keyPoints: [
            'Acceleration is rate of change of velocity',
            'Positive acceleration = speeding up, Negative = slowing down',
            'Three equations of motion apply for uniform acceleration',
            'SI unit of acceleration is m/s²',
            'Free fall acceleration (g) = 9.8 m/s²'
          ],
          examples: [
            'A car accelerating from 0 to 60 km/h in 10 seconds',
            'A ball dropped from height accelerates at g = 9.8 m/s²',
            'Braking a car is negative acceleration (deceleration)'
          ],
          subtopics: [
            { id: 'phy-1-2-s1', title: 'Deriving Equations of Motion', content: 'The three equations can be derived from velocity-time graphs. The area under v-t graph gives displacement, and the slope gives acceleration.' },
            { id: 'phy-1-2-s2', title: 'Free Fall', content: 'When objects fall freely under gravity (ignoring air resistance), they accelerate at g ≈ 9.8 m/s². All objects fall at the same rate regardless of mass.' }
          ],
          summary: 'Acceleration measures how quickly velocity changes. The three equations of motion are powerful tools for solving problems involving uniform acceleration.',
          quiz: [
            { id: 'q1', question: 'A car starts from rest and reaches 20 m/s in 5s. Acceleration is:', options: ['2 m/s²', '4 m/s²', '100 m/s²', '5 m/s²'], correct: 1, explanation: 'a = (v-u)/t = (20-0)/5 = 4 m/s²' },
            { id: 'q2', question: 'Which equation relates velocity and displacement without time?', options: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 'None'], correct: 2, explanation: 'v² = u² + 2as does not contain time (t).' }
          ]
        },
        {
          id: 'phy-1-3',
          title: "Newton's Laws of Motion",
          duration: '60 min',
          xpReward: 130,
          content: `Newton's three laws of motion form the foundation of classical mechanics.\n\nFirst Law (Inertia): An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an unbalanced force.\n\nSecond Law: Force = Mass × Acceleration (F = ma). The acceleration of an object is directly proportional to the net force and inversely proportional to mass.\n\nThird Law: For every action, there is an equal and opposite reaction.`,
          keyPoints: [
            'First Law: Objects resist changes in motion (inertia)',
            'Second Law: F = ma (Force equals mass times acceleration)',
            'Third Law: Action-reaction pairs act on different bodies',
            'SI unit of force is Newton (N) = kg⋅m/s²',
            'Weight = mass × g'
          ],
          examples: [
            'Seatbelts protect due to inertia (First Law)',
            'Heavier objects need more force to accelerate (Second Law)',
            'Rocket propulsion works by expelling gas backward (Third Law)'
          ],
          subtopics: [
            { id: 'phy-1-3-s1', title: 'Inertia and Mass', content: 'Mass is the measure of inertia. Greater mass means greater resistance to change in motion. This is why it is harder to push a heavy object.' },
            { id: 'phy-1-3-s2', title: 'Momentum and Impulse', content: 'Momentum (p) = mass × velocity. Impulse = Force × time = change in momentum. Conservation of momentum: total momentum before collision = total after.' }
          ],
          summary: "Newton's three laws explain why objects move the way they do. They connect force, mass, and acceleration in a fundamental relationship.",
          quiz: [
            { id: 'q1', question: "Newton's First Law is also called the law of:", options: ['Acceleration', 'Inertia', 'Reaction', 'Gravity'], correct: 1, explanation: 'The First Law describes inertia - the tendency to resist changes in motion.' },
            { id: 'q2', question: 'A 5 kg object accelerates at 3 m/s². The force is:', options: ['8 N', '15 N', '1.67 N', '2 N'], correct: 1, explanation: 'F = ma = 5 × 3 = 15 N' },
            { id: 'q3', question: 'Action and reaction forces act on:', options: ['Same body', 'Different bodies', 'Only one body', 'No body'], correct: 1, explanation: 'Action-reaction pairs always act on two different bodies.' }
          ]
        }
      ]
    },
    {
      id: 'phy-lesson-2',
      title: 'Gravitation',
      duration: '10 hours',
      order: 2,
      description: 'Explore gravitational force, weight, and planetary motion',
      topics: [
        {
          id: 'phy-2-1',
          title: 'Universal Law of Gravitation',
          duration: '50 min',
          xpReward: 110,
          content: `Every object in the universe attracts every other object with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.\n\nF = G × (m₁ × m₂) / r²\n\nWhere G = 6.674 × 10⁻¹¹ N⋅m²/kg² (Universal Gravitational Constant)`,
          keyPoints: ['Gravity is a universal attractive force', 'Force is proportional to product of masses', 'Force is inversely proportional to square of distance', 'G is universal gravitational constant', 'Gravity keeps planets in orbit'],
          examples: ['Earth pulls us down due to gravity', 'Moon orbits Earth due to gravitational attraction', 'Tides are caused by Moon\'s gravitational pull'],
          subtopics: [
            { id: 'phy-2-1-s1', title: 'Gravitational Field', content: 'A gravitational field exists around every mass. Field strength g = GM/r². On Earth\'s surface, g ≈ 9.8 m/s².' },
            { id: 'phy-2-1-s2', title: 'Weight vs Mass', content: 'Mass is amount of matter (constant everywhere). Weight = mg (varies with location). You weigh less on Moon because g is smaller there.' }
          ],
          summary: 'Gravitation is the universal force of attraction between all masses. It governs planetary orbits, tides, and keeps us grounded on Earth.',
          quiz: [
            { id: 'q1', question: 'If distance between two objects doubles, gravitational force becomes:', options: ['Half', 'Double', 'One-fourth', 'Four times'], correct: 2, explanation: 'F ∝ 1/r². If r doubles, F becomes 1/4th.' },
            { id: 'q2', question: 'Weight of a 10 kg object on Earth (g=10 m/s²):', options: ['10 N', '100 N', '1000 N', '1 N'], correct: 1, explanation: 'W = mg = 10 × 10 = 100 N' }
          ]
        },
        {
          id: 'phy-2-2',
          title: 'Pressure and Buoyancy',
          duration: '50 min',
          xpReward: 110,
          content: `Pressure is force per unit area: P = F/A. SI unit is Pascal (Pa).\n\nArchimedes' Principle: When a body is immersed in a fluid, it experiences an upward force called buoyant force, equal to the weight of fluid displaced.\n\nAn object floats if buoyant force ≥ its weight. It sinks if buoyant force < its weight.`,
          keyPoints: ['Pressure = Force / Area', 'SI unit of pressure is Pascal (Pa)', 'Buoyant force = weight of displaced fluid', 'Objects float if density < fluid density', 'Atmospheric pressure decreases with altitude'],
          examples: ['Sharp knives cut easily - same force, less area, more pressure', 'Ships float because they displace water equal to their weight', 'Hot air balloons rise due to buoyancy in air'],
          subtopics: [
            { id: 'phy-2-2-s1', title: 'Fluid Pressure', content: 'Pressure in fluids increases with depth: P = ρgh. This is why dams are thicker at the bottom and deep-sea divers need special equipment.' },
            { id: 'phy-2-2-s2', title: "Archimedes' Principle Applications", content: 'Used in designing ships, submarines, hydrometers, and hot air balloons. Lactometers use this principle to check milk purity.' }
          ],
          summary: 'Pressure and buoyancy are fundamental fluid mechanics concepts. Understanding them explains floating, sinking, and many everyday phenomena.',
          quiz: [
            { id: 'q1', question: 'A block of wood floats because:', options: ['It is light', 'Its density < water density', 'It is hollow', 'Water pushes it'], correct: 1, explanation: 'Objects float when their density is less than the fluid density.' },
            { id: 'q2', question: 'Pressure increases with:', options: ['More area', 'Less force', 'More force on less area', 'Less force on more area'], correct: 2, explanation: 'P = F/A. More force and less area both increase pressure.' }
          ]
        }
      ]
    },
    {
      id: 'phy-lesson-3',
      title: 'Work, Energy and Power',
      duration: '12 hours',
      order: 3,
      description: 'Learn about work done, different forms of energy, and power',
      topics: [
        {
          id: 'phy-3-1',
          title: 'Work and Energy',
          duration: '55 min',
          xpReward: 120,
          content: `Work is done when a force causes displacement. W = F × d × cos(θ). SI unit: Joule (J).\n\nEnergy is the capacity to do work. Types:\n• Kinetic Energy (KE) = ½mv²\n• Potential Energy (PE) = mgh\n\nLaw of Conservation of Energy: Energy can neither be created nor destroyed, only transformed from one form to another.`,
          keyPoints: ['Work = Force × Displacement × cos(θ)', 'KE = ½mv², PE = mgh', 'Total energy is always conserved', 'SI unit of work and energy is Joule', 'No work done if force ⊥ displacement'],
          examples: ['Lifting a book increases its potential energy', 'A moving car has kinetic energy', 'Roller coaster converts PE to KE and back'],
          subtopics: [
            { id: 'phy-3-1-s1', title: 'Work-Energy Theorem', content: 'The net work done on an object equals change in its kinetic energy: W_net = ΔKE = ½mv² - ½mu²' },
            { id: 'phy-3-1-s2', title: 'Conservation of Energy', content: 'In a closed system, total energy remains constant. A pendulum converts PE↔KE continuously. Energy lost to friction becomes heat.' }
          ],
          summary: 'Work and energy are closely related - work transfers energy. The conservation law is one of the most fundamental principles in physics.',
          quiz: [
            { id: 'q1', question: 'KE of a 2kg object moving at 3 m/s:', options: ['6 J', '9 J', '18 J', '3 J'], correct: 1, explanation: 'KE = ½mv² = ½ × 2 × 9 = 9 J' },
            { id: 'q2', question: 'A porter carrying load on head and walking horizontally does:', options: ['Positive work', 'Negative work', 'Zero work', 'Maximum work'], correct: 2, explanation: 'Force (up) is perpendicular to displacement (horizontal), so W = 0.' }
          ]
        },
        {
          id: 'phy-3-2',
          title: 'Power and Efficiency',
          duration: '40 min',
          xpReward: 100,
          content: `Power is the rate of doing work. P = W/t = F × v. SI unit: Watt (W).\n\n1 horsepower (HP) = 746 W\n\nEfficiency = (Useful energy output / Total energy input) × 100%\n\nNo machine is 100% efficient due to friction and heat losses.`,
          keyPoints: ['Power = Work / Time', 'SI unit is Watt (W)', '1 HP = 746 W', 'Efficiency is always < 100%', 'P = Fv for constant velocity'],
          examples: ['A 100W bulb converts 100 joules of electrical energy per second', 'A crane lifting load faster requires more power', 'Car engines rated in HP or kW'],
          subtopics: [
            { id: 'phy-3-2-s1', title: 'Commercial Unit of Energy', content: '1 kWh (kilowatt-hour) = 3.6 × 10⁶ J. This is the "unit" used in electricity bills. A 1000W appliance running for 1 hour consumes 1 kWh.' }
          ],
          summary: 'Power measures how quickly work is done. Efficiency tells us how much useful output we get from input energy.',
          quiz: [
            { id: 'q1', question: 'A machine does 500J of work in 10s. Power is:', options: ['5000 W', '50 W', '5 W', '500 W'], correct: 1, explanation: 'P = W/t = 500/10 = 50 W' },
            { id: 'q2', question: '1 kWh equals:', options: ['3600 J', '3.6 × 10⁶ J', '1000 J', '360 J'], correct: 1, explanation: '1 kWh = 1000W × 3600s = 3.6 × 10⁶ J' }
          ]
        }
      ]
    },
    {
      id: 'phy-lesson-4',
      title: 'Sound',
      duration: '10 hours',
      order: 4,
      description: 'Understand sound waves, their properties and applications',
      topics: [
        {
          id: 'phy-4-1',
          title: 'Nature and Properties of Sound',
          duration: '50 min',
          xpReward: 110,
          content: `Sound is a mechanical longitudinal wave that requires a medium to travel. It is produced by vibrating objects.\n\nProperties:\n• Frequency (f): Number of vibrations per second. Unit: Hz\n• Wavelength (λ): Distance between consecutive compressions\n• Amplitude: Maximum displacement from mean position\n• Speed: v = f × λ\n\nSpeed of sound: Air ≈ 343 m/s, Water ≈ 1500 m/s, Steel ≈ 5000 m/s`,
          keyPoints: ['Sound needs a medium to travel', 'Sound is a longitudinal wave', 'Speed depends on medium (solid > liquid > gas)', 'Frequency determines pitch', 'Amplitude determines loudness'],
          examples: ['Thunder is heard after lightning because sound is slower than light', 'Sound travels faster in water, which is why whales communicate over long distances', 'No sound in space (vacuum)'],
          subtopics: [
            { id: 'phy-4-1-s1', title: 'Characteristics of Sound', content: 'Pitch depends on frequency (high f = high pitch). Loudness depends on amplitude. Quality/timbre distinguishes instruments playing same note.' },
            { id: 'phy-4-1-s2', title: 'Echo and Reverberation', content: 'Echo: reflection of sound heard after original. Minimum distance needed: 17.2m (for 0.1s delay). Reverberation: multiple reflections causing prolonged sound.' }
          ],
          summary: 'Sound is a mechanical wave with properties like frequency, wavelength, and amplitude that determine what we hear.',
          quiz: [
            { id: 'q1', question: 'Sound cannot travel through:', options: ['Air', 'Water', 'Vacuum', 'Steel'], correct: 2, explanation: 'Sound is a mechanical wave and needs a medium. Vacuum has no medium.' },
            { id: 'q2', question: 'Pitch of sound depends on:', options: ['Amplitude', 'Frequency', 'Speed', 'Medium'], correct: 1, explanation: 'Higher frequency = higher pitch.' }
          ]
        }
      ]
    },
    {
      id: 'phy-lesson-5',
      title: 'Light and Optics',
      duration: '12 hours',
      order: 5,
      description: 'Explore reflection, refraction, and optical instruments',
      topics: [
        {
          id: 'phy-5-1',
          title: 'Reflection of Light',
          duration: '50 min',
          xpReward: 110,
          content: `Reflection is the bouncing back of light from a surface. Laws of reflection:\n1. Angle of incidence = Angle of reflection\n2. Incident ray, reflected ray, and normal all lie in the same plane\n\nTypes of mirrors:\n• Plane mirror: Forms virtual, erect, same-size image\n• Concave mirror: Can form real/virtual images (used in torches, headlights)\n• Convex mirror: Always virtual, erect, diminished image (used in rear-view mirrors)`,
          keyPoints: ['Angle of incidence = Angle of reflection', 'Concave mirrors converge light', 'Convex mirrors diverge light', 'Mirror formula: 1/f = 1/v + 1/u', 'Magnification m = -v/u'],
          examples: ['Rear-view mirrors in vehicles use convex mirrors for wider field', 'Dentists use concave mirrors to see magnified teeth', 'Solar furnaces use large concave mirrors'],
          subtopics: [
            { id: 'phy-5-1-s1', title: 'Mirror Formula', content: '1/f = 1/v + 1/u. Sign convention: distances measured from pole, along principal axis. Real is negative for mirrors, virtual is positive.' },
            { id: 'phy-5-1-s2', title: 'Image Formation by Mirrors', content: 'Concave mirrors form different images at different object positions. At C: real, inverted, same size. Beyond C: real, inverted, diminished.' }
          ],
          summary: 'Reflection follows precise laws. Different mirror types create different types of images, each with practical applications.',
          quiz: [
            { id: 'q1', question: 'Rear-view mirrors in cars are:', options: ['Plane', 'Concave', 'Convex', 'Cylindrical'], correct: 2, explanation: 'Convex mirrors give a wider field of view and always form erect, diminished images.' },
            { id: 'q2', question: 'If angle of incidence is 30°, angle of reflection is:', options: ['60°', '30°', '90°', '0°'], correct: 1, explanation: 'By law of reflection, angle of incidence = angle of reflection = 30°.' }
          ]
        },
        {
          id: 'phy-5-2',
          title: 'Refraction of Light',
          duration: '55 min',
          xpReward: 120,
          content: `Refraction is the bending of light when it passes from one medium to another due to change in speed.\n\nSnell's Law: n₁ sin(i) = n₂ sin(r)\nRefractive index n = speed in vacuum / speed in medium\n\nLenses:\n• Convex (converging): Forms real/virtual images\n• Concave (diverging): Always virtual, erect, diminished\n\nLens formula: 1/f = 1/v - 1/u\nPower of lens: P = 1/f (in dioptres)`,
          keyPoints: ['Light bends toward normal when entering denser medium', 'Snell\'s law relates angles and refractive indices', 'Convex lenses converge light, concave diverge', 'Lens power measured in dioptres (D)', 'Human eye uses a convex lens'],
          examples: ['A swimming pool appears shallower due to refraction', 'A pencil in water looks bent', 'Rainbows form due to refraction and dispersion'],
          subtopics: [
            { id: 'phy-5-2-s1', title: 'Total Internal Reflection', content: 'When light goes from denser to rarer medium at angle > critical angle, it reflects completely. Used in optical fibers and diamond brilliance.' },
            { id: 'phy-5-2-s2', title: 'Dispersion of Light', content: 'White light splits into 7 colors (VIBGYOR) when passing through a prism. Each color has different wavelength and bends differently.' }
          ],
          summary: 'Refraction occurs due to change in light speed between media. Lenses use refraction to form images, powering eyeglasses, cameras, and microscopes.',
          quiz: [
            { id: 'q1', question: 'A convex lens is also called:', options: ['Diverging lens', 'Converging lens', 'Plane lens', 'None'], correct: 1, explanation: 'Convex lenses converge parallel light rays to a focus point.' },
            { id: 'q2', question: 'Power of a lens with f = 50 cm is:', options: ['2 D', '0.5 D', '50 D', '5 D'], correct: 0, explanation: 'P = 1/f = 1/0.5m = 2 D' }
          ]
        }
      ]
    }
  ]
};

export default physicsCourse;
