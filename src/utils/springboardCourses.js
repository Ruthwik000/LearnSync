// Infosys Springboard - Professional Courses with detailed structure

export const springboardCourses = {
  // Spring Boot Fundamentals Course
  springBoot: {
    id: 'spring-boot-101',
    name: 'Infosys Springboard - Spring Boot Fundamentals',
    description: 'Master Spring Boot framework from basics to advanced concepts',
    level: 'mastery',
    duration: '40 hours',
    instructor: 'Infosys',
    thumbnail: '🍃',
    
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to Spring Framework',
        duration: '8 hours',
        order: 1,
        topics: [
          {
            id: 'topic-1-1',
            title: 'What is Spring Framework?',
            duration: '45 min',
            content: `Spring Framework is a powerful, lightweight framework for building Java applications. It provides comprehensive infrastructure support for developing Java applications, making it easier to create enterprise-level applications.

Key Features:
• Dependency Injection (DI) - Manages object creation and dependencies
• Aspect-Oriented Programming (AOP) - Separates cross-cutting concerns
• Transaction Management - Simplifies database transactions
• MVC Framework - Web application development
• Integration - Works with various technologies`,
            
            keyPoints: [
              'Spring is an open-source Java framework',
              'Provides dependency injection and inversion of control',
              'Simplifies enterprise Java development',
              'Modular architecture with various modules',
              'Widely used in industry for building scalable applications'
            ],
            
            examples: [
              'E-commerce websites use Spring for backend services',
              'Banking applications rely on Spring for transaction management',
              'Microservices architecture commonly built with Spring Boot'
            ],
            
            subtopics: [
              {
                id: 'subtopic-1-1-1',
                title: 'History of Spring',
                content: 'Spring Framework was created by Rod Johnson in 2003 as an alternative to complex Enterprise JavaBeans (EJB). It has evolved into a comprehensive ecosystem.'
              },
              {
                id: 'subtopic-1-1-2',
                title: 'Spring Modules',
                content: 'Spring consists of modules like Core Container, Data Access, Web, AOP, and Test. Each module serves specific purposes in application development.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'What is the primary purpose of Spring Framework?',
                options: [
                  'To create mobile applications',
                  'To simplify Java enterprise development',
                  'To replace Java programming language',
                  'To design databases'
                ],
                correct: 1,
                explanation: 'Spring Framework simplifies Java enterprise development by providing infrastructure support and reducing boilerplate code.'
              },
              {
                id: 'q2',
                question: 'Which design pattern is central to Spring Framework?',
                options: [
                  'Singleton Pattern',
                  'Factory Pattern',
                  'Dependency Injection',
                  'Observer Pattern'
                ],
                correct: 2,
                explanation: 'Dependency Injection (DI) is the core design pattern in Spring, allowing loose coupling between components.'
              },
              {
                id: 'q3',
                question: 'What does IoC stand for in Spring?',
                options: [
                  'Internet of Code',
                  'Inversion of Control',
                  'Integration of Components',
                  'Instance of Class'
                ],
                correct: 1,
                explanation: 'IoC (Inversion of Control) means the framework controls object creation and lifecycle, not the developer.'
              }
            ],
            
            xpReward: 100
          },
          
          {
            id: 'topic-1-2',
            title: 'Dependency Injection Explained',
            duration: '60 min',
            content: `Dependency Injection (DI) is a design pattern where objects receive their dependencies from external sources rather than creating them internally. This promotes loose coupling and easier testing.

Types of Dependency Injection:
1. Constructor Injection - Dependencies passed through constructor
2. Setter Injection - Dependencies set through setter methods
3. Field Injection - Dependencies injected directly into fields

Benefits:
• Loose coupling between classes
• Easier unit testing with mock objects
• Better code maintainability
• Flexibility to change implementations`,
            
            keyPoints: [
              'DI removes hard-coded dependencies',
              'Objects don\'t create their dependencies',
              'Spring container manages object lifecycle',
              'Promotes testable and maintainable code',
              'Constructor injection is recommended approach'
            ],
            
            examples: [
              'Instead of "new UserService()", Spring injects it automatically',
              'Testing becomes easy - inject mock objects instead of real ones',
              'Change database implementation without modifying business logic'
            ],
            
            subtopics: [
              {
                id: 'subtopic-1-2-1',
                title: 'Constructor vs Setter Injection',
                content: 'Constructor injection ensures required dependencies are provided at object creation. Setter injection allows optional dependencies and circular references.'
              },
              {
                id: 'subtopic-1-2-2',
                title: '@Autowired Annotation',
                content: '@Autowired tells Spring to automatically inject dependencies. It can be used on constructors, setters, or fields.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'What is Dependency Injection?',
                options: [
                  'Creating objects inside a class',
                  'Providing dependencies from external source',
                  'Deleting unused dependencies',
                  'Injecting SQL queries'
                ],
                correct: 1,
                explanation: 'DI provides dependencies from outside rather than creating them internally, promoting loose coupling.'
              },
              {
                id: 'q2',
                question: 'Which injection type is recommended by Spring?',
                options: [
                  'Field Injection',
                  'Setter Injection',
                  'Constructor Injection',
                  'Method Injection'
                ],
                correct: 2,
                explanation: 'Constructor injection is recommended as it ensures required dependencies are provided and supports immutability.'
              }
            ],
            
            xpReward: 120
          },
          
          {
            id: 'topic-1-3',
            title: 'Spring Beans and ApplicationContext',
            duration: '50 min',
            content: `A Spring Bean is an object managed by the Spring IoC container. The ApplicationContext is the central interface for providing configuration to Spring applications.

Bean Lifecycle:
1. Instantiation - Object created
2. Dependency Injection - Dependencies injected
3. Initialization - Custom init methods called
4. Ready to Use - Bean available for use
5. Destruction - Cleanup before shutdown

Bean Scopes:
• Singleton (default) - One instance per container
• Prototype - New instance each time
• Request - One per HTTP request (web apps)
• Session - One per HTTP session (web apps)`,
            
            keyPoints: [
              'Beans are objects managed by Spring container',
              'ApplicationContext loads and manages beans',
              'Singleton scope creates one shared instance',
              'Prototype scope creates new instance each time',
              'Bean lifecycle can be customized with callbacks'
            ],
            
            examples: [
              'UserService bean injected into UserController',
              'Database connection pool as singleton bean',
              'Shopping cart as session-scoped bean'
            ],
            
            subtopics: [
              {
                id: 'subtopic-1-3-1',
                title: 'Bean Configuration',
                content: 'Beans can be configured using XML, Java annotations (@Component, @Service, @Repository), or Java configuration classes (@Configuration, @Bean).'
              },
              {
                id: 'subtopic-1-3-2',
                title: 'Component Scanning',
                content: '@ComponentScan tells Spring where to look for annotated classes. Spring automatically detects and registers them as beans.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'What is a Spring Bean?',
                options: [
                  'A Java class',
                  'An object managed by Spring container',
                  'A database table',
                  'A configuration file'
                ],
                correct: 1,
                explanation: 'A Spring Bean is an object that is instantiated, assembled, and managed by the Spring IoC container.'
              },
              {
                id: 'q2',
                question: 'What is the default bean scope?',
                options: [
                  'Prototype',
                  'Request',
                  'Singleton',
                  'Session'
                ],
                correct: 2,
                explanation: 'Singleton is the default scope, meaning one instance is created and shared across the application.'
              }
            ],
            
            xpReward: 110
          }
        ]
      },
      
      {
        id: 'lesson-2',
        title: 'Spring Boot Basics',
        duration: '10 hours',
        order: 2,
        topics: [
          {
            id: 'topic-2-1',
            title: 'Introduction to Spring Boot',
            duration: '45 min',
            content: `Spring Boot is an extension of Spring Framework that simplifies the setup and development of Spring applications. It provides auto-configuration, embedded servers, and production-ready features out of the box.

Key Features:
• Auto-Configuration - Automatically configures Spring application based on dependencies
• Embedded Servers - Tomcat, Jetty, or Undertow included
• Starter Dependencies - Pre-configured dependency sets
• Production-Ready - Health checks, metrics, monitoring built-in
• No XML Configuration - Convention over configuration

Why Spring Boot?
• Rapid application development
• Minimal configuration required
• Microservices-friendly
• Easy deployment (standalone JAR)
• Large community and ecosystem`,
            
            keyPoints: [
              'Spring Boot simplifies Spring application development',
              'Auto-configuration reduces boilerplate code',
              'Embedded server eliminates need for external server',
              'Starter POMs provide curated dependencies',
              'Production-ready features included by default'
            ],
            
            examples: [
              'Create REST API in minutes with spring-boot-starter-web',
              'Add database with spring-boot-starter-data-jpa',
              'Deploy as standalone JAR - no server installation needed'
            ],
            
            subtopics: [
              {
                id: 'subtopic-2-1-1',
                title: 'Spring Boot vs Spring Framework',
                content: 'Spring Boot builds on Spring Framework, adding auto-configuration and embedded servers. Spring Framework requires manual configuration and external server deployment.'
              },
              {
                id: 'subtopic-2-1-2',
                title: 'Spring Initializr',
                content: 'Spring Initializr (start.spring.io) is a web tool to quickly generate Spring Boot project structure with selected dependencies.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'What is the main advantage of Spring Boot?',
                options: [
                  'It replaces Java',
                  'It simplifies Spring application development',
                  'It only works with databases',
                  'It requires more configuration'
                ],
                correct: 1,
                explanation: 'Spring Boot simplifies development by providing auto-configuration and reducing boilerplate code.'
              },
              {
                id: 'q2',
                question: 'What does Spring Boot embed by default?',
                options: [
                  'Database',
                  'Web Server (Tomcat)',
                  'IDE',
                  'Operating System'
                ],
                correct: 1,
                explanation: 'Spring Boot embeds Tomcat server by default, allowing applications to run standalone without external server.'
              }
            ],
            
            xpReward: 100
          },
          
          {
            id: 'topic-2-2',
            title: 'Creating Your First Spring Boot Application',
            duration: '90 min',
            content: `Let's create a simple Spring Boot application step by step.

Step 1: Project Setup
• Use Spring Initializr or IDE
• Select dependencies: Spring Web
• Choose Java version and build tool (Maven/Gradle)

Step 2: Main Application Class
@SpringBootApplication annotation combines:
• @Configuration - Marks class as configuration source
• @EnableAutoConfiguration - Enables auto-configuration
• @ComponentScan - Scans for components

Step 3: Create REST Controller
Use @RestController and @GetMapping to create endpoints

Step 4: Run Application
Execute main method - embedded server starts automatically

Project Structure:
src/main/java - Java source code
src/main/resources - Configuration files
src/test/java - Test code
pom.xml or build.gradle - Build configuration`,
            
            keyPoints: [
              '@SpringBootApplication is the entry point',
              'Main method starts the application',
              '@RestController creates REST endpoints',
              'application.properties for configuration',
              'Maven/Gradle manages dependencies'
            ],
            
            examples: [
              '@GetMapping("/hello") returns "Hello World"',
              'Run on port 8080 by default',
              'Access http://localhost:8080/hello in browser'
            ],
            
            subtopics: [
              {
                id: 'subtopic-2-2-1',
                title: 'Project Structure',
                content: 'Standard Maven/Gradle structure with src/main/java for code, src/main/resources for configs, and src/test for tests.'
              },
              {
                id: 'subtopic-2-2-2',
                title: 'Application Properties',
                content: 'application.properties or application.yml file configures server port, database connection, logging, and other settings.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'Which annotation marks the main class?',
                options: [
                  '@MainClass',
                  '@SpringBootApplication',
                  '@Application',
                  '@Start'
                ],
                correct: 1,
                explanation: '@SpringBootApplication marks the main class and enables auto-configuration and component scanning.'
              },
              {
                id: 'q2',
                question: 'What is the default port for Spring Boot?',
                options: [
                  '80',
                  '3000',
                  '8080',
                  '9090'
                ],
                correct: 2,
                explanation: 'Spring Boot runs on port 8080 by default, configurable in application.properties.'
              }
            ],
            
            xpReward: 150
          }
        ]
      },
      
      {
        id: 'lesson-3',
        title: 'Building REST APIs',
        duration: '12 hours',
        order: 3,
        topics: [
          {
            id: 'topic-3-1',
            title: 'REST API Fundamentals',
            duration: '60 min',
            content: `REST (Representational State Transfer) is an architectural style for building web services. RESTful APIs use HTTP methods to perform CRUD operations.

HTTP Methods:
• GET - Retrieve data
• POST - Create new resource
• PUT - Update existing resource
• DELETE - Remove resource
• PATCH - Partial update

REST Principles:
1. Stateless - Each request contains all needed information
2. Client-Server - Separation of concerns
3. Cacheable - Responses can be cached
4. Uniform Interface - Consistent API design
5. Layered System - Architecture can have multiple layers

Status Codes:
• 200 OK - Success
• 201 Created - Resource created
• 400 Bad Request - Invalid input
• 404 Not Found - Resource doesn't exist
• 500 Internal Server Error - Server error`,
            
            keyPoints: [
              'REST uses HTTP methods for operations',
              'Resources identified by URLs',
              'Stateless communication',
              'JSON is common data format',
              'Status codes indicate operation result'
            ],
            
            examples: [
              'GET /api/users - Get all users',
              'POST /api/users - Create new user',
              'PUT /api/users/1 - Update user with ID 1',
              'DELETE /api/users/1 - Delete user with ID 1'
            ],
            
            subtopics: [
              {
                id: 'subtopic-3-1-1',
                title: 'RESTful URL Design',
                content: 'Use nouns for resources (/users, /products), not verbs. Use HTTP methods to indicate action. Keep URLs simple and hierarchical.'
              },
              {
                id: 'subtopic-3-1-2',
                title: 'JSON Format',
                content: 'JSON (JavaScript Object Notation) is lightweight data format. Spring Boot automatically converts Java objects to JSON and vice versa.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'Which HTTP method retrieves data?',
                options: [
                  'POST',
                  'GET',
                  'DELETE',
                  'PUT'
                ],
                correct: 1,
                explanation: 'GET method is used to retrieve data from the server without modifying it.'
              },
              {
                id: 'q2',
                question: 'What does REST stand for?',
                options: [
                  'Remote Execution Service Technology',
                  'Representational State Transfer',
                  'Rapid Enterprise System Tool',
                  'Resource Execution State Transfer'
                ],
                correct: 1,
                explanation: 'REST stands for Representational State Transfer, an architectural style for web services.'
              },
              {
                id: 'q3',
                question: 'Which status code indicates success?',
                options: [
                  '404',
                  '500',
                  '200',
                  '400'
                ],
                correct: 2,
                explanation: '200 OK indicates successful HTTP request.'
              }
            ],
            
            xpReward: 130
          },
          
          {
            id: 'topic-3-2',
            title: 'Creating REST Controllers',
            duration: '75 min',
            content: `Spring Boot makes it easy to create REST APIs using annotations.

Key Annotations:
• @RestController - Marks class as REST controller
• @RequestMapping - Maps URL to controller/method
• @GetMapping - Handles GET requests
• @PostMapping - Handles POST requests
• @PutMapping - Handles PUT requests
• @DeleteMapping - Handles DELETE requests
• @PathVariable - Extracts value from URL
• @RequestBody - Binds request body to object
• @RequestParam - Extracts query parameters

Example Controller:
@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping
    public List<User> getAllUsers() { }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) { }
    
    @PostMapping
    public User createUser(@RequestBody User user) { }
}`,
            
            keyPoints: [
              '@RestController combines @Controller and @ResponseBody',
              'Mapping annotations define endpoints',
              '@PathVariable extracts URL parameters',
              '@RequestBody converts JSON to Java object',
              'Return objects automatically converted to JSON'
            ],
            
            examples: [
              '@GetMapping("/users") - GET http://localhost:8080/users',
              '@PathVariable Long id - /users/123 extracts 123',
              '@RequestBody User user - Converts JSON to User object'
            ],
            
            subtopics: [
              {
                id: 'subtopic-3-2-1',
                title: 'Request Mapping',
                content: '@RequestMapping can be used at class level for base path and method level for specific endpoints. Supports multiple HTTP methods.'
              },
              {
                id: 'subtopic-3-2-2',
                title: 'Response Entity',
                content: 'ResponseEntity allows full control over HTTP response including status code, headers, and body.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'Which annotation creates REST controller?',
                options: [
                  '@Controller',
                  '@RestController',
                  '@Service',
                  '@Component'
                ],
                correct: 1,
                explanation: '@RestController marks a class as REST controller, combining @Controller and @ResponseBody.'
              },
              {
                id: 'q2',
                question: 'How to extract URL parameter?',
                options: [
                  '@RequestParam',
                  '@PathVariable',
                  '@URLParam',
                  '@Extract'
                ],
                correct: 1,
                explanation: '@PathVariable extracts values from URL path, like /users/{id}.'
              }
            ],
            
            xpReward: 140
          }
        ]
      },
      
      {
        id: 'lesson-4',
        title: 'Database Integration with JPA',
        duration: '10 hours',
        order: 4,
        topics: [
          {
            id: 'topic-4-1',
            title: 'Introduction to JPA and Hibernate',
            duration: '60 min',
            content: `JPA (Java Persistence API) is a specification for object-relational mapping (ORM) in Java. Hibernate is the most popular JPA implementation.

What is ORM?
ORM maps Java objects to database tables automatically, eliminating need for SQL queries.

Key Concepts:
• Entity - Java class mapped to database table
• Repository - Interface for database operations
• CRUD Operations - Create, Read, Update, Delete
• Relationships - One-to-One, One-to-Many, Many-to-Many

JPA Annotations:
• @Entity - Marks class as database entity
• @Table - Specifies table name
• @Id - Marks primary key field
• @GeneratedValue - Auto-generates ID
• @Column - Maps field to column

Benefits:
• No SQL queries needed
• Database-independent code
• Automatic table creation
• Type-safe queries`,
            
            keyPoints: [
              'JPA provides ORM for Java',
              'Hibernate is popular JPA implementation',
              'Entities map to database tables',
              'Repositories handle database operations',
              'Spring Data JPA simplifies data access'
            ],
            
            examples: [
              '@Entity class User maps to users table',
              'userRepository.findAll() gets all users',
              'userRepository.save(user) inserts/updates user'
            ],
            
            subtopics: [
              {
                id: 'subtopic-4-1-1',
                title: 'Entity Relationships',
                content: '@OneToMany, @ManyToOne, @ManyToMany annotations define relationships between entities. Cascade operations propagate changes.'
              },
              {
                id: 'subtopic-4-1-2',
                title: 'Spring Data JPA',
                content: 'Spring Data JPA provides repository interfaces with built-in methods. Custom queries can be defined using method names or @Query annotation.'
              }
            ],
            
            quiz: [
              {
                id: 'q1',
                question: 'What does ORM stand for?',
                options: [
                  'Object Resource Management',
                  'Object-Relational Mapping',
                  'Online Resource Manager',
                  'Operational Resource Model'
                ],
                correct: 1,
                explanation: 'ORM (Object-Relational Mapping) maps Java objects to database tables automatically.'
              },
              {
                id: 'q2',
                question: 'Which annotation marks a class as entity?',
                options: [
                  '@Table',
                  '@Entity',
                  '@Database',
                  '@Model'
                ],
                correct: 1,
                explanation: '@Entity annotation marks a Java class as a JPA entity that maps to a database table.'
              }
            ],
            
            xpReward: 120
          }
        ]
      }
    ]
  }
};

export default springboardCourses;
