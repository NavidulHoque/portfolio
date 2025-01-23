import { Base, SkillSection } from "@/data/skills";
import Skill from '@/components/about/Skill';

interface Prop{
    section: SkillSection;
}

export default function SkillsContainer({section}: Prop) {

    const {label, skills} = section

    return (
        <div className="flex-column gap-y-7">

            <h2 className="self-start text-gradient text-3xl">{label}</h2>

            <div className="flex flex-wrap justify-center min-[565px]:justify-start gap-7">

                {skills.map((skill: Base) => (
                    <Skill key={skill.name} skill={skill} />
                ))}

            </div>

        </div>
    )
}
