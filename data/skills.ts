import { FC } from "react";
import Typescript from "@/icons/Typescript";
import Javascript from "@/icons/Javascript";
import HTML from "@/icons/HTML";
import CSS from "@/icons/CSS";
import Tailwind from "@/icons/Tailwind";
import ReactJS from "@/icons/ReactJS";
import NextJS from "@/icons/NextJS";
import NodeJS from "@/icons/NodeJS";
import ExpressJS from "@/icons/ExpressJS";
import MongoDB from "@/icons/MongoDB";
import Firebase from "@/icons/Firebase";

export interface Base {
    icon: FC,
    name: string
}

export interface SkillSection{
    label: string;
    skills: Base[];
}

const languages: Base[] = [
    {
        icon: Typescript,
        name: "Typescript"
    },
    {
        icon: Javascript,
        name: "Javascript"
    }
]

const frontend: Base[] = [
    {
        icon: HTML,
        name: "HTML"
    },
    {
        icon: CSS,
        name: "CSS"
    },
    {
        icon: Tailwind,
        name: "Tailwind CSS"
    },
    {
        icon: ReactJS,
        name: "React JS"
    },
    {
        icon: NextJS,
        name: "Next JS"
    },
]

const backend: Base[] = [
    {
        icon: NodeJS,
        name: "Node JS"
    },
    {
        icon: ExpressJS,
        name: "Express JS"
    }
]

const database: Base[] = [
    {
        icon: MongoDB,
        name: "MongoDB"
    },
    {
        icon: Firebase,
        name: "Firebase"
    }
]

export const wholeSkills: SkillSection[]  = [
    {
        label: "Languages",
        skills: languages
    },
    {
        label: "Frontend",
        skills: frontend
    },
    {
        label: "Backend",
        skills: backend
    },
    {
        label: "Database",
        skills: database
    },  
]