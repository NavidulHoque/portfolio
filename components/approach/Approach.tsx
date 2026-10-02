import { approachIntro, approachSteps } from "@/data/approach";
import Heading from "../common/Heading";
import ApproachWrapper from "./ApproachWrapper";

export default function Approach() {
  return (
    <ApproachWrapper>

      <Heading label="My Approach" />

      <p>{approachIntro}</p>

      <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-center gap-5">

        {approachSteps.map((step, index) => (
          <div
            key={step.title}
            className="bg-[#232329] hover:bg-gradient-hover flex-column gap-y-2 p-8 rounded-lg hover-scale cursor-pointer"
          >
            <span className="self-start text-gradient">Step {index + 1}</span>

            <h3>{step.title}</h3>

            <p className="text-blue-500 text-[18px]">{step.text}</p>
          </div>
        ))}

      </div>

    </ApproachWrapper>
  )
}
