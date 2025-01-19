import { Base } from "@/data/skills";

interface Prop {
  skill: Base
}

export default function Skill({ skill }: Prop) {

  const { icon: Icon, name } = skill

  return (
    <div className="bg-[#232329] flex-center flex-col gap-y-5 size-60 rounded-lg hover:bg-gradient-hover hover-scale cursor-pointer">

      <Icon />

      <span className="text-2xl">{name}</span>

    </div>
  )
}
