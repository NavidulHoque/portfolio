/* eslint-disable react/no-unescaped-entities */
import { contact, moreContactInfo } from "@/data/contact";
import Heading from "../common/Heading";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-20 mt-8">

      <Heading label="Get in touch" />

      <div className="flex gap-x-16">

        {/* Contact Info */}
        <div className="w-[50%] flex flex-col gap-y-5">

          <h2 className="self-start bg-gradient-text bg-clip-text text-transparent text-[50px] leading-[50px] font-semibold">Let's talk</h2>

          <p className="my-5">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

          <div className="flex flex-col gap-y-6">

            {contact.map((info, index) => (

              <div
                key={index}
                className="flex gap-x-4"
              >

                <div className="w-[7%]">
                  {info.icon}
                </div>

                <span>{info.label}</span>

              </div>
            ))}

          </div>

          {/* More Contact Info: */}
          <div className="flex flex-col self-start gap-y-4">

            <h2 className="bg-gradient-text bg-clip-text text-transparent">More Contact Info:</h2>

            <div className="flex self-center gap-x-3">
              {moreContactInfo.map((info, index) => (

                <a
                  href={info.link}
                  target="_blank" 
                  key={index}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {info.icon}
                </a>

              ))}
            </div>

          </div>

        </div>

        <Form />

      </div>

    </div>
  )
}
