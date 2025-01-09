import ContactUsForm from "@/components/molecules/contact-us/ContactUsForm.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex items-start justify-between space-x-10">
        <div className="w-2/5">
          <div className="space-y-6 mb-[84px]">
            <h2 className={`${outfit.className} text-heading-1 font-bold`}>
              Let’s Get In Touch
            </h2>
            <p className={`${kanit.className} text-l font-light`}>
              Great! We’re excited to hear from you and let’s start something
              special together. Call us for any inquery.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3
                className={`${kanit.className} text-neutral-4 text-m font-light`}
              >
                Phone
              </h3>
              <span
                className={`${outfit.className} underline text-heading-5 font-bold`}
              >
                (308) 555-0121
              </span>
            </div>
            <div>
              <h3
                className={`${kanit.className} text-neutral-4 text-m font-light`}
              >
                Email
              </h3>
              <span
                className={`${outfit.className} underline text-heading-5 font-bold`}
              >
                debra.holt@example.com
              </span>
            </div>
            <div>
              <h3
                className={`${kanit.className} text-neutral-4 text-m font-light`}
              >
                Office
              </h3>
              <span
                className={`${outfit.className} underline text-heading-5 font-bold`}
              >
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}
