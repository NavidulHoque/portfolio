export interface Experiences{
    company: string;
    position: string;
    duration: string;
    descriptions: string[];
}

export const experiences: Experiences[] = [
    {
        company: "TulipTech Ltd",
        position: "Backend Software Engineer",
        duration: "November 2025 – May 2026",
        descriptions: ["Engineered production-grade NestJS backends within an existing monorepo architecture, delivering scalable REST APIs and type-safe contracts across multiple internal products.", 
            "Contributed to a shared monorepo architecture using Turborepo, reducing backend code duplication and enabling reuse of validation, database, and API contract modules.",
            "Worked with oRPC and Scalar Reference UI for API documentation, implementing type-safe API contracts using Zod schemas.",
            "Used Supabase Auth, Realtime, and Storage to implement authentication, real-time features, and file storage across the backend."
        ]
    },
    {
        company: "Chetona",
        position: "Backend Developer",
        duration: "January 2025 – October 2025",
        descriptions: ["Implemented JWT-based authentication and authorization, securing APIs for multiple user roles.", 
            "Designed and optimized REST APIs for production using Express.js.",
            "Improved system maintainability by restructuring backend using clean architecture principles and modular design."
        ]
    }
]