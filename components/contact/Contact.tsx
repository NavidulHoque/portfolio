/* eslint-disable react/no-unescaped-entities */
import { ContactType, MoreContactInfo, contact, moreContactInfo } from "@/data/contact";
import Heading from "../common/Heading";
import Form from "./Form";
import ContactWrapper from "./ContactWrapper";

export default function Contact() {
  return (
    <ContactWrapper>

      <Heading label="Get in touch" />

      <div className="flex md:flex-row flex-col md:gap-x-16 gap-y-10">

        {/* Contact Info */}
        <div className="md:w-[50%] flex flex-col gap-y-5">

          <h2 className="self-start bg-gradient-text bg-clip-text text-transparent text-[50px] leading-[50px] font-semibold">Let's talk</h2>

          <p className="my-5">I am currently open to opportunities in data analytics and business intelligence. Feel free to reach out about a role, a project or a business problem you want to solve with data. You can contact me anytime.</p>

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

        <Form />

      </div>

    </ContactWrapper>
  )
}
