db.post.insertMany([
    {
        title: "Learn mongo with mbrsagor.",
        description: "Hello there, I'm learning Mongo db with mbr-sagor bhai. Mongo is awesome no sql database.",
        is_active: true,
        category: "tech",
        user_id: 1,
        tags: ["mongo", "db", "mongoDB"],
        created_at: new Date(),
        created_by: "mbr-sagor"
    },
    {
        title: "MongoDB is a awesome database.",
        description: "Mongo! is a one of the aweosme database in my development life.",
        is_active: true,
        category: "tech-db",
        user_id: 1,
        tags: ["awesome", "mongo", "database"],
        created_at: new Date(),
        created_by: "mbr-sagor"
    },
    {
        title: "Why you choose Mongo?",
        description: "I like mongo because of mongo learn easy, data readeing easy, no-sql db, light weight database, and many other features.",
        is_active: true,
        category: "tech-db",
        user_id: 1,
        tags: ["why", "mongo", "database"],
        created_at: new Date(),
        created_by: "mbr-sagor"
    },
    {
        title: "Mac os for development.",
        description: "Mac OS is a one of the best OS for every developer and engineer. There have lot of featues and facility and many other thing. That why everybody like to Mac OS.",
        is_active: true,
        category: "os",
        user_id: 2,
        tags: ["mac", "Mac OS", "developer", 'Mac-os'],
        created_at: new Date(),
        created_by: "ohi"
    },
    {
        title: "Which is best mac for development?",
        description: "MacBook Pro is a best for development purpose. It's really awesome for every label perform best. but MacBook Air for light weight work pefect.",
        is_active: true,
        category: "os",
        user_id: 2,
        tags: ["mac", "Pro", "Air", 'Macbook'],
        created_at: new Date(),
        created_by: "ohi"
    },
    {
        title: "Why we learng python?",
        description: "Python is a one of the high label programming language in the world. Python has a lot of features and plateform independant and learn easy. The language learn kid to siantaice.",
        is_active: false,
        category: "python",
        user_id: 3,
        tags: ["python", "python-programming", "learn-python", 'python-for-all'],
        created_at: new Date(),
        created_by: "saif"
    },
    {
        title: "What is Django framework?",
        description: "Django is a one of the most popular framework in Python. The framework has a lot of features and huge dynamic libary. Django use build small to learge web app and website.",
        is_active: false,
        category: "framework",
        user_id: 4,
        tags: ["Django", "python-programming", "framework", 'django framework'],
        created_at: new Date(),
        created_by: "muhij"
    }
])