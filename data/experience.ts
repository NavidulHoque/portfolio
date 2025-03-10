export interface Experiences{
    company: string;
    position: string;
    duration: string;
    descriptions: string[];
}


export const experiences: Experiences[] = [
    {
        company: "Code 19",
        position: "Web Developer - Intern",
        duration: "Feb 2023",
        descriptions: ["Created a dashboard using HTML, Tailwind CSS and Javascript."]
    },
    {
        company: "Bdcalling IT Ltd",
        position: "Software Engineer",
        duration: "March 2025 - Present",
        descriptions: ["Developed and designed RESTful API’s in several services using Nest.js and Express.js", "Designed database(NoSQL) for the responsible services"]
    }
]