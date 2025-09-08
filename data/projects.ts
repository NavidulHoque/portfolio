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
        name: "AI Powered Document Assisstant System",
        github: "https://github.com/NavidulHoque/AI_powered_document_assisstant",
        description: ["Developed AI-powered document processing backend using NestJS, enabling intelligent document management and retrieval.", 
            "Integrated OpenAI APIs to generate summaries and insights from uploaded documents, improving information extraction efficiency.",
            "Built file upload and storage system using Cloudinary, supporting images, PDFs, and videos in a unified workflow.",
            "Containerized PostgreSQL with Docker, maintaining consistent development and deployment environments across services.",
            "Applied logging and error monitoring with NestJS Logger, ensuring easier debugging and system reliability."
        ],
        stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker", "OpenAI", "Cloudinary", "REST API"],
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
