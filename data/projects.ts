export const projects = [
    {
        name: "Doctors Appointment Booking System",
        github: "https://github.com/NavidulHoque/Doctors_Appointment_Booking_System",
        description: ["Built real-time chat & notifications with WebSocket, Redis, and BullMQ.", 
            "Designed asynchronous data processing using Apache Kafka for high throughput.",
            "Automated appointment status updates, background jobs, and activity tracking with BullMQ and Cron Jobs.",
            "Integrated Stripe Connect for secure multi-vendor payments and doctor payouts.",
            "Used Docker for containerized local dev with Redis, PostgreSQL and Kafka.",
            "Implemented role-based access control and class-based validation for robust architecture."
        ],
        stack: ["NestJS", "Prisma", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kafka", "BullMQ", "WebSocket", "Stripe", "Cloudinary", "JWT", "Cron Jobs"],
        tag: "Featured"
    },
    {
        name: "Multi Vendor Ecommorce Platform",
        github: "https://github.com/NavidulHoque/ecommerce-laravel",
        description: ["Designed a backend system for a ecommerce platform using Laravel.", 
            "Used MySQL with PHPMyAdmin for database management.",
            "Implemented role based authentication using JWT.",
            "Containerized the entire project with Docker.",
            "Implemented sending notifications using Redis."
        ],
        stack: ["PHP", "Laravel", "MySQL", "JWT", "Redis", "Docker", "PHPMyAdmin"],
        tag: "Work in Progress"
    },
    {
        name: "House Security Check System",
        github: "https://github.com/NavidulHoque/House_Security_System_Backend",
        description: ["Developed APIs for house security checks with ExpressJS.", 
            "Ensured secure service using JWT, validation middleware."
        ],
        stack: ["Javascript", "ExpressJS", "MongoDB", "Mongoose", "JWT"],
        tag: "Experience"
    }
]
