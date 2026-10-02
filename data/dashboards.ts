import { StaticImageData } from "next/image";
import HealthcarePython from "@/public/images/dashboards/healthcare-python.png";
import HealthcarePowerBI from "@/public/images/dashboards/healthcare-powerbi.png";
import HealthcareExcel1 from "@/public/images/dashboards/healthcare-excel-1.png";
import HealthcareExcel2 from "@/public/images/dashboards/healthcare-excel-2.png";

export interface Dashboard {
    title: string;
    project: string;
    tool: string;
    image: StaticImageData;
}

export const dashboards: Dashboard[] = [
    {
        title: "6-Panel Analysis Dashboard",
        project: "Healthcare Appointment Analytics",
        tool: "Python (Matplotlib)",
        image: HealthcarePython
    },
    {
        title: "Interactive Dashboard",
        project: "Healthcare Appointment Analytics",
        tool: "Power BI",
        image: HealthcarePowerBI
    },
    {
        title: "Operational Performance Dashboard",
        project: "Healthcare Appointment Analytics",
        tool: "Excel",
        image: HealthcareExcel1
    },
    {
        title: "2023 vs 2024 Review",
        project: "Healthcare Appointment Analytics",
        tool: "Excel",
        image: HealthcareExcel2
    }
]
