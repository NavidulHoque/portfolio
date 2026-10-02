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
            "Analyzed 1,956 sales transactions from 287 customers across all 8 divisions (Jan 2023 – Dec 2024) to explain why revenue fell 4.21%, from BDT 162.47M to BDT 155.62M.",
            "Traced the decline to Laptops (-10.77%) and Monitors (-13.90%), starting in the second half of 2024 and concentrated in Chattogram and Rangpur.",
            "Built two interactive Excel dashboards with slicers: a Sales Dashboard and a Customer Segment Dashboard.",
            "Segmented customers with RFM analysis and found 43.21% of customers in vulnerable groups, led by 78 At Risk customers averaging BDT 1.24M in spend but inactive for about 189 days.",
            "Turned the findings into a prioritized retention and win-back plan focused on Dhaka and Chattogram.",
            "Profiled the dataset with Python; the interactive Power BI version is currently in progress."
        ],
        stack: ["Excel", "Python", "Pandas", "Power BI (in progress)"],
        links: [
            { label: "View Code", url: "https://github.com/NavidulHoque/ecommerce_sales_data" }
        ]
    },
    {
        name: "Bangladesh Healthcare Appointment Analytics",
        tag: "Featured",
        description: [
            "Analyzed 500 appointment records across 8 divisions to identify no-show patterns, specialty demand and patient waiting time trends.",
            "Found Dhaka has the highest no-show rate (14.6%) and General Physicians have the longest average wait time (11.6 days).",
            "Built a reusable Python filtering function for division and specialty level exploration.",
            "Ran a 2023–2024 operational performance review in Excel across divisions, age groups and specialties, and translated it into business implications.",
            "Built dashboards in Matplotlib, Power BI and Excel to communicate key trends.",
            "Built a scikit-learn pipeline (Logistic Regression, Decision Tree, Random Forest) to predict missed appointments, with stratified sampling, cross-validated tuning and ROC-AUC comparison.",
            "Converted model predictions into Low, Moderate, High and Very High risk levels a scheduling team can act on."
        ],
        stack: ["Python", "Pandas", "Matplotlib", "Power BI (in progress)", "Excel", "Scikit Learn", "Statistics"],
        links: [
            { label: "View Code", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis" },
            { label: "Detailed Analysis Report", url: "https://drive.google.com/file/d/1PnTLh_ZEAL63WnPt3WAY5iU_O9Lr-JdM/view" },
            { label: "Predictive ML Analysis (No Show)", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis/blob/main/python-analysis/02_no_show_predictive_modeling.ipynb" },
            { label: "Predictive ML Analysis (Waiting Days)", url: "https://github.com/NavidulHoque/healthcare_appointment_analysis/blob/main/python-analysis/03_wait_days_predictive_modeling.ipynb" }
        ]
    }
]
