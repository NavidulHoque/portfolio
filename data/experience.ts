export interface Experiences{
    company: string;
    position: string;
    duration: string;
    descriptions: string[];
}

export const experiences: Experiences[] = [
    {
        company: "Bdcalling IT Ltd",
        position: "Software Engineer",
        duration: "December 2024 - July 2025",
        descriptions: ["Implemented authentication and authorization systems with JWT and OAuth2 (Google, Facebook).", 
            "Designed and optimized REST APIs for production environments with 99.9% uptime.",
            "Developed performance-focused backend services for internal tools, increasing operational efficiency.",
            "Improved maintainability and scalability by applying clean architecture principles."
        ]
    }
]