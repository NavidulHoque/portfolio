import blogApp from "@/public/images/BlogApp.png"
import chattingApp from "@/public/images/ChattingApp.png"
import gemini from "@/public/images/gemini.png"
import FoodDeliveryWebsite from "@/public/images/FoodDeliveryWebsite.png"
import FoodDeliveryWebsiteAdmin from "@/public/images/FoodDeliveryWebsite-Admin.png"
import { StaticImageData } from "next/image"


export interface Projects {
    name: string;
    link: string;
    photo: StaticImageData;
    description1: string;
    description2: string;
}

export const projects: Projects[] = [
    {
        name: "Food Delivery Website",
        link: "https://tomato-blond.vercel.app",
        photo: FoodDeliveryWebsite,
        description1: "Developed a full-stack food delivery website where users can order their foods. They need to be logged in to add foods in their cart and finally can make order by putting their delivery information. They will get update of their order status in real time. Users can login using google, github and credentials and responsive UI has been applied for an engaging user experience.",

        description2: "Used NextJS, Typescript and Shadcn for the frontend, Next-Auth for the authentication, ExpressJS for the backend, Mongoose for handling database schema, MongoDB for the database."
    },
    {
        name: "Food Delivery Website - Admin",
        link: "https://tomato-admin-mu.vercel.app",
        photo: FoodDeliveryWebsiteAdmin,
        description1: "Developed a full-stack food delivery admin website where admins can control the food creation, deletion of the main website and also can update the status of the order. Admins can login using google, github and credentials and responsive UI has been applied for an engaging user experience.",

        description2: "Used NextJS, Typescript and Shadcn for the frontend, Next-Auth for the authentication, ExpressJS for the backend, Mongoose for handling database schema, MongoDB for the database."
    },
    {
        name: "Blog App",
        link: "https://blogappfrontend098.netlify.app",
        photo: blogApp,
        description1: "Developed a full-stack blog application where users can create, edit, and delete blog posts, while others can comment in real time. Implemented user authentication, post and comment management, and responsive UI for an engaging user experience.",

        description2: "Used React JS for the frontend, Express JS for the backend, Mongoose for handling database schema, and MongoDB as the database."
    },
    {
        name: "Chatting App",
        link: "https://chattingapp0912.netlify.app",
        photo: chattingApp,
        description1: "Developed a real-time chatting application where users can create accounts, add friends, and engage in one-on-one conversations. Ensured smooth user experience, secure messaging along with real-time updates and efficient data handling.",

        description2: "Used Firebase for authentication, real-time database, along with React JS for a dynamic, responsive user interface."
    },
    {
        name: "Gemini Clone",
        link: "https://geminiclone098.netlify.app",
        photo: gemini,
        description1: "Developed a Gemini clone that allows users to generate results almost similar to the Gemini platform",

        description2: "Used React JS to create a responsive interface that replicates better user experience."
    }
]
