export const projects = [
    {
        name: "Doctors Appointment Booking System",
        github: "https://github.com/NavidulHoque/Doctors_Appointment_Booking_System",
        openapi: "https://doctors-appointment-booking-system-x428.onrender.com/api/docs",
        description: ["Architected a full-featured appointment booking API with NestJS and Fastify covering role based access for patients, doctors and admins.", 
            "Built a real-time messaging and notification system using Supabase Realtime broadcast channels replacing WebSocket infrastructure without a dedicated server.",
            "Integrated Stripe Express Connect for multi vendor payment processing enabling per appointment checkout sessions with direct payouts to individual doctors.",
            "Applied email verification and password reset flows using Supabase Auth with session tracking.",
            "Applied a two-step signed URL file upload system via Supabase Storage.",
            "Automated appointment lifecycle transitions using NestJS cron jobs including inactive user cleanup and expired session removal.",
            "Implemented Zod validation across all DTOs in a shared validation package ensuring consistent input enforcement across the monorepo."
        ],
        stack: ["NestJS", "Fastify", "TypeORM", "TypeScript", "PostgreSQL", "Supabase (Auth, Realtime, Storage)", "Stripe", "Cron Jobs", "Nodemailer", "Zod", "REST API"],
        tag: "Featured"
    },
    {
        name: "TaskFlow — Project & Task Management",
        github: "https://github.com/NavidulHoque/taskflow",
        openapi: "https://taskflow-y6e0.onrender.com/api/docs",
        description: ["Designed and built a type-safe task management backend using oRPC procedures with explicit Zod input/output schemas.", 
            "Used Scalar Reference UI via the oRPC OpenAPI plugin producing a modern interactive API docs experience auto generated from Zod schemas.",
            "Modeled a clean monorepo with Turborepo, separating validation, database, oRPC routers and Supabase clients into independent packages consumed by the NestJS app.",
            "Implemented full project and task lifecycle management, enabling efficient handling of user tasks and bulk operations.",
            "Integrated Supabase OAuth (Google) alongside email/password auth with a unified session model covering token refresh and logout."
        ],
        stack: ["NestJS", "Fastify", "TypeScript", "PostgreSQL", "Drizzle ORM", "Supabase (Auth, Storage)", "oRPC", "Zod"],
        tag: "Featured"
    }
]
