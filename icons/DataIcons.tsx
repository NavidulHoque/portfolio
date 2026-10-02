import { FC } from "react";
import { FaFileExcel } from "react-icons/fa";
import { PiSigma } from "react-icons/pi";
import { SiPython, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { BrainCircuit, Bot } from "lucide-react";

const SIZE = 100;

export const Python: FC = () => <SiPython size={SIZE} color="#3776AB" />;
export const Pandas: FC = () => <SiPandas size={SIZE} color="#8f6cf0" />;
export const Numpy: FC = () => <SiNumpy size={SIZE} color="#4DABCF" />;
export const ScikitLearn: FC = () => <SiScikitlearn size={SIZE} color="#F7931E" />;
export const Excel: FC = () => <FaFileExcel size={SIZE} color="#21A366" />;
export const Statistics: FC = () => <PiSigma size={SIZE} color="#B415FF" />;
export const MachineLearning: FC = () => <BrainCircuit size={SIZE} color="#B415FF" strokeWidth={1.5} />;
export const ArtificialIntelligence: FC = () => <Bot size={SIZE} color="#DF8908" strokeWidth={1.5} />;

export const PowerBI: FC = () => (
  <svg width={SIZE} height={SIZE} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>Power BI</title>
    <rect x="3" y="14" width="7" height="15" rx="1.5" fill="#F2C811" opacity="0.6" />
    <rect x="12.5" y="8" width="7" height="21" rx="1.5" fill="#F2C811" opacity="0.8" />
    <rect x="22" y="2" width="7" height="27" rx="1.5" fill="#F2C811" />
  </svg>
);

export const Matplotlib: FC = () => (
  <svg width={SIZE} height={SIZE} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>Matplotlib</title>
    <circle cx="16" cy="16" r="14" fill="none" stroke="#11557c" strokeWidth="2" />
    <path d="M16 2v14l10-10M16 16l12 6M16 16L6 26M16 16H2" stroke="#11557c" strokeWidth="1.2" fill="none" />
    <path d="M16 16V2a14 14 0 0 1 9.9 4.1z" fill="#ef8c1f" />
    <path d="M16 16l12 6a14 14 0 0 1-2 3z" fill="#2c8ac2" />
  </svg>
);
