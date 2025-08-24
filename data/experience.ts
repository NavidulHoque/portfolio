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
        duration: "January 2025 - June 2025",
        descriptions: ["Built authentication and authorization systems using JWT and OAuth2 providers (Google, Facebook).", 
            "Designed and implemented scalable REST APIs for production environments.",
            "Developed backend services for internal tools with a focus on performance optimization.",
            "Created and tested RESTful APIs using Postman, ensuring reliability and efficiency."
        ]
    }
]