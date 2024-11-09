/* eslint-disable react/no-unescaped-entities */
import { ContactType, MoreContactInfo, contact, moreContactInfo } from "@/data/contact";
import Heading from "../common/Heading";
import FormComp from "./FormComp";

export default function Contact({contactRef}: {contactRef: React.RefObject<HTMLDivElement>}) {
  return (
    <div ref={contactRef} className="flex flex-col gap-y-20 pt-8">

      <Heading label="Get in touch" />

      <div className="flex md:flex-row flex-col md:gap-x-16 gap-y-10">

        {/* Contact Info */}
        <div className="md:w-[50%] flex flex-col gap-y-5">

          <h2 className="self-start bg-gradient-text bg-clip-text text-transparent text-[50px] leading-[50px] font-semibold">Let's talk</h2>

          <p className="my-5">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className="flex flex-col gap-y-6">

            {contact.map(({icon: Icon, label}: ContactType) => (

              <div
                key={label}
                className="flex gap-x-4"
              >

                <div className="w-[40px]">
                  <Icon />
                </div>

                <span>{label}</span>

              </div>
            ))}

          </div>

          {/* More Contact Info: */}
          <div className="flex flex-col self-start gap-y-4">

            <h2 className="bg-gradient-text bg-clip-text text-transparent">More Contact Info:</h2>

            <div className="flex self-center gap-x-3">
              {moreContactInfo.map(({icon: Icon, link}: MoreContactInfo, index: number) => (

                <a
                  href={link}
                  target="_blank" 
                  key={index}
                  className="cursor-pointer hover:text-blue-500 text-[24px]"
                >
                  <Icon />
                </a>

              ))}
            </div>

          </div>

        </div>

        <FormComp />

      </div>

    </div>
  )
}
