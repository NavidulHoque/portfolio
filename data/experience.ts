export interface Experiences{
    company: string;
    position: string;
    duration: string;
    descriptions: string[];
}

export const experiences: Experiences[] = [
    {
        company: "TulipTech Ltd",
        position: "Junior Software Engineer",
        duration: "November 2025 – May 2026",
        descriptions: [
            "Built and maintained backend APIs for multiple internal products using NestJS and TypeScript.",
            "Designed PostgreSQL schemas and optimized SQL queries for reliable, high performance access to production data.",
            "Used Supabase Realtime to handle live data updates across the system.",
            "Contributed to shared validation logic using Zod to keep data consistent across services."
        ]
    },
    {
        company: "Chetona",
        position: "Backend Developer",
        duration: "December 2024 – October 2025",
        descriptions: [
            "Built REST APIs using Express.js to handle data requests across different user roles.",
            "Designed and structured MongoDB schemas to keep data organized and queries efficient.",
            "Refactored the backend codebase using clean architecture to make it easier to maintain and scale."
        ]
    }
]
