import Call from "@/icons/Call";
import Location from "@/icons/Location";
import Mail from "@/icons/Mail";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export interface ContactType {
    icon: FC;
    label: string;
}

export interface MoreContactInfo{
    icon: FC;
    link: string;
}

export const contact: ContactType[] = [
    {
        icon: Mail,
        label: "hnavidul@gmail.com"
    },
    {
        icon: Call,
        label: "+8801700763325"
    },
    {
        icon: Location,
        label: "Dhaka, Bangladesh"
    }
]

export const moreContactInfo = [
    {
        icon: FaGithub,
        link: "https://github.com/NavidulHoque"
    },
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/navidul-hoque-04b850267/"
    }
]