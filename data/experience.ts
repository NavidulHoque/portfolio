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
            "Worked on backend systems for internal products, contributing to APIs, databases, real time data handling, and shared data validation processes. This experience strengthened my understanding of how business applications generate, organize and process operational data."
        ]
    },
    {
        company: "Chetona",
        position: "Backend Developer",
        duration: "December 2024 – October 2025",
        descriptions: [
            "Developed and maintained backend services supporting different user roles and business workflows. Working with APIs, databases, and backend architecture gave me practical exposure to how software systems support day to day operations and how structured data flows through those systems."
        ]
    }
]
