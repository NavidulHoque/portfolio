export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    name: string;
    tag: string;
    status?: string;
    description: string[];
    stack: string[];
    links: ProjectLink[];
}

export const projects: Project[] = [
    {
        name: "E-Commerce Sales & Customer Analytics",
        tag: "Featured",
        description: [
            "Analyzed 1,956 sales transactions from 287 customers across all 8 divisions to understand why revenue declined in 2024 and where the decline was concentrated.",
            "Traced the revenue decline to Laptops and Monitors, with the largest drops concentrated in Chattogram and Rangpur, helping identify where further investigation was needed.",
            "Built two interactive Excel dashboards to analyze sales performance, product and regional trends, and customer behavior.",
            "Used Python to identify data consistency and accuracy issues."
        ],
        stack: ["Excel", "Python", "Pandas", "Power BI (in progress)"],
        links: [
            { label: "View Code", url: "https://github.com/NavidulHoque/ecommerce_sales_data" },
            { label: "Detailed Analysis Report", url: "https://drive.google.com/file/d/185Hsw0qwJqBCVa8sTLtaCxbsOSdiS0uW/view?usp=sharing" }
        ]
    },
    {
        name: "Bangladesh Healthcare Appointment Analytics",
        tag: "Featured",
        description: [
            "Analyzed healthcare appointment data to understand operational patterns around patient no-shows, appointment demand, and waiting times across divisions, specialties, and patient groups.",
            "Identified key operational patterns and translated them into business insights for appointment scheduling, service planning, and areas requiring further investigation.",
            "Extended the analysis with predictive modeling to evaluate whether available appointment data could support no-show and waiting-time prediction.",
            "Evaluated model performance and limitations to determine whether the available data contained sufficient predictive information for practical use."
        ],
        stack: ["Python", "Pandas", "Matplotlib", "Power BI (in progress)", "Excel", "Scikit Learn", "Statistics", "Machine Learning"],
        links: [
            { label: "View Code", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis" },
            { label: "Detailed Analysis Report", url: "https://drive.google.com/file/d/1PnTLh_ZEAL63WnPt3WAY5iU_O9Lr-JdM/view" },
            { label: "Predictive ML Analysis (No Show)", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis/blob/main/python-analysis/02_no_show_predictive_modeling.ipynb" },
            { label: "Predictive ML Analysis (Waiting Days)", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis/blob/main/python-analysis/03_wait_days_predictive_modeling.ipynb" }
        ]
    }
]
