import { FC } from "react";
import Typescript from "@/icons/Typescript";
import Javascript from "@/icons/Javascript";
import NodeJS from "@/icons/NodeJS";
import PostgreSQL from "@/icons/PostgreSQL";
import NestJS from "@/icons/NestJS";
import Docker from "@/icons/Docker";
import {
    Python, Pandas, Numpy, ScikitLearn, Excel, Statistics, PowerBI, Matplotlib,
    MachineLearning, ArtificialIntelligence
} from "@/icons/DataIcons";

export interface Base {
    icon: FC,
    name: string
}

export interface SkillSection {
    label: string;
    skills: Base[];
}

const dataAnalytics: Base[] = [
    { icon: Python, name: "Python" },
    { icon: PostgreSQL, name: "SQL" },
    { icon: Pandas, name: "Pandas" },
    { icon: Numpy, name: "NumPy" },
    { icon: Statistics, name: "Statistics" },
    { icon: PowerBI, name: "Power BI" },
    { icon: Excel, name: "Excel" },
    { icon: Matplotlib, name: "Matplotlib" },
]

const machineLearning: Base[] = [
    { icon: MachineLearning, name: "Machine Learning" },
    { icon: ArtificialIntelligence, name: "Artificial Intelligence" },
    { icon: ScikitLearn, name: "Scikit Learn" },
]

const engineering: Base[] = [
    { icon: Typescript, name: "Typescript" },
    { icon: Javascript, name: "Javascript" },
    { icon: NodeJS, name: "Node JS" },
    { icon: NestJS, name: "Nest JS" },
    { icon: PostgreSQL, name: "PostgreSQL" },
    { icon: Docker, name: "Docker" },
]

export const wholeSkills: SkillSection[] = [
    { label: "Data Analytics", skills: dataAnalytics },
    { label: "Machine Learning", skills: machineLearning },
    { label: "Engineering Background", skills: engineering },
]
