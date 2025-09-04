export const projects = [
    {
        name: "Doctors Appointment Booking System",
        github: "https://github.com/NavidulHoque/Doctors_Appointment_Booking_System",
        description: ["Built real-time chat & notifications using WebSocket, Redis, and BullMQ, supporting 1,000+ concurrent users.", 
            "Implemented asynchronous data processing with Apache Kafka, handling 10K+ traffic events daily.",
            "Automated appointment updates, background jobs, and activity tracking with BullMQ and Cron Jobs, decreasing manual effort by 30%.",
            "Integrated Stripe Connect for secure multi-vendor payments, enabling instant payouts to 50+ doctors.",
            "Optimized performance with Redis caching and rate limiting, reducing API response time by 60% and preventing abuse.",
            "Increased user engagement by implementing email/SMS notifications, improving response rates by 25%.",
            "Containerized the platform with Docker, ensuring consistent development environments with Redis, PostgreSQL, and Kafka.",
            "Implemented role-based access control and class-based validation for robust architecture."
        ],
        stack: ["NestJS", "Prisma", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kafka", "BullMQ", "WebSocket", "Stripe", "Cloudinary", "JWT", "Cron Jobs"],
        tag: "Featured"
    },
    {
        name: "Multi Vendor Ecommorce Platform",
        github: "https://github.com/NavidulHoque/ecommerce-laravel",
        description: ["Established scalable backend system supporting 100+ vendors to manage products, orders, and payments.", 
            "Enforced role-based authentication with JWT, securing access for admins, vendors, and customers.",
            "Containerized the project with Docker, ensuring consistent deployments across environments.",
            "Expanded APIs for product search, order tracking, and vendor dashboards, handling thousands of weekly transactions."
        ],
        stack: ["PHP", "Laravel", "MySQL", "JWT", "Redis", "Docker", "phpMyAdmin"],
        tag: "Work in Progress"
    },
    {
        name: "House Security Check System",
        github: "https://github.com/NavidulHoque/House_Security_System_Backend",
        description: ["Created RESTful APIs for household security checks, serving 500+ homes securely.", 
            "Applied JWT authentication with role-based access control, achieving 100% authorization coverage.",
            "Improved data quality by applying validation middleware, cutting invalid requests by 40%."
        ],
        stack: ["Javascript", "ExpressJS", "MongoDB", "Mongoose", "JWT"],
        tag: "Experience"
    }
]
