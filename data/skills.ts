import { FC } from "react";
import Typescript from "@/icons/Typescript";
import Javascript from "@/icons/Javascript";
import ReactJS from "@/icons/ReactJS";
import NodeJS from "@/icons/NodeJS";
import ExpressJS from "@/icons/ExpressJS";
import MongoDB from "@/icons/MongoDB";
import NestJS from "@/icons/NestJS";
import Mongoose from "@/icons/Mongoose";
import Redis from "@/icons/Redis";
import Docker from "@/icons/Docker";
import BullQueue from "@/icons/BullQueue";
import CronJobs from "@/icons/CronJobs";
import JWT from "@/icons/JWT";
import Oauth from "@/icons/Oauth";
import WebSocket from "@/icons/Socket";
import Postman from "@/icons/Postman";
import Git from "@/icons/Git";
import Github from "@/icons/Github";
import VSCode from "@/icons/VSCode";

export interface Base {
    icon: FC,
    name: string
}

export interface SkillSection {
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

const technologies: Base[] = [
    {
        icon: NodeJS,
        name: "Node JS"
    },
    {
        icon: ExpressJS,
        name: "Express JS"
    },
    {
        icon: NestJS,
        name: "Nest JS"
    },
    {
        icon: MongoDB,
        name: "MongoDB"
    },
    {
        icon: Mongoose,
        name: "Mongoose"
    },
    {
        icon: Docker,
        name: "Docker"
    },
    {
        icon: Redis,
        name: "Redis"
    },
    {
        icon: BullQueue,
        name: "Bull Queue"
    },
    {
        icon: CronJobs,
        name: "Cron Jobs"
    },
    {
        icon: JWT,
        name: "JWT"
    },
    {
        icon: Oauth,
        name: "OAuth"
    },
    {
        icon: WebSocket,
        name: "Web Socket"
    },
    {
        icon: ReactJS,
        name: "React JS"
    }
]

const tools: Base[] = [
    {
        icon: Postman,
        name: "Postman"
    },
    {
        icon: Git,
        name: "Git"
    },
    {
        icon: Github,
        name: "Github"
    },
    {
        icon: VSCode,
        name: "VSCode"
    },
]


export const wholeSkills: SkillSection[] = [
    {
        label: "Languages",
        skills: languages
    },
    {
        label: "Technologies",
        skills: technologies
    },
    {
        label: "Tools",
        skills: tools
    },
]