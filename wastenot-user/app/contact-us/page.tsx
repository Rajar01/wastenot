import Image from "next/image";

import { Kanit, Outfit } from "next/font/google";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-kanit",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-family-outfit",
  subsets: ["latin"],
  display: "swap",
});

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex items-start justify-between space-x-10">
        {/*Left Start*/}
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
        {/*Left End*/}
        {/*Right Start*/}
        <div className="w-3/5 bg-primary px-8 py-10 rounded-xl space-y-8">
          <div className="flex items-center justify-between space-x-[30px]">
            <input
              placeholder="Name"
              type="text"
              className={`${kanit.className} text-m text-neutral-2/60 rounded border-[1px] border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
            />
            <input
              placeholder="Email"
              type="email"
              className={`${kanit.className} text-m text-neutral-2/60 rounded border-[1px] border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
            />
          </div>
          <div className="flex items-center justify-between space-x-[30px]">
            <input
              placeholder="Phone"
              type="text"
              className={`${kanit.className} text-m text-neutral-2/60 rounded border-[1px] border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
            />
            <input
              placeholder="Subject"
              type="text"
              className={`${kanit.className} text-m text-neutral-2/60 rounded border-[1px] border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
            />
          </div>
          <div>
            <textarea
              placeholder="Tell us about your interest in"
              wrap="soft"
              className={`${kanit.className} resize-none h-[200px] text-m text-neutral-2/60 rounded border-[1px] border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
            ></textarea>
          </div>
          <div>
            <div className="text-neutral-3 text-l">
              <button className="flex">
                <div
                  className={`${kanit.className} text-l bg-tertiary px-6 py-2 rounded-[60px]`}
                >
                  Send to Us
                </div>
                <div className="bg-tertiary rounded-[60px] w-[43px] flex items-center justify-center">
                  <Image
                    src="/arrow-up-right.svg"
                    alt="arrow up right icon"
                    width={16}
                    height={16}
                    priority
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/*Right End*/}
      </div>
      <div>
        <Image
          className="w-full h-[500px] object-cover"
          src="https://placehold.co/856"
          alt="hero photo"
          width={1920}
          height={500}
          priority
        />
      </div>
    </div>
  );
}
