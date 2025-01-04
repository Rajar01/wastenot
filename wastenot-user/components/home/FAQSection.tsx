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

export default function FAQSection() {
  return (
    <div className="bg-neutral-2">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex items-start justify-between space-x-[134px]">
        <div className="max-w-[416px] min-w-[416px] space-y-[40px]">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <Image
                  className="object-cover w-[32px] h-[32px]"
                  src="/star.svg"
                  alt="donator profile photo"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <div
                className={`${outfit.className} text-heading-5 font-bold text-primary`}
              >
                FAQ
              </div>
            </div>
            <div
              className={`${outfit.className} text-heading-2 font-bold mb-3`}
            >
              Your questions{" "}
              <span className="underline text-secondary">answered.</span>
            </div>
            <div
              className={`${kanit.className} text-l text-neutral-4 text-pretty`}
            >
              Let’s do our best to answer your most frequently asked questions.
            </div>
          </div>
          <div className="space-y-6 border-[1px] border-neutral-6 rounded-xl px-6 py-5">
            <div className="flex items-center space-x-3">
              <div className="flex-1 max-w-[80px] h-[80px] border-[1px] border-neutral-6 rounded-xl flex items-center justify-center">
                <Image
                  className="object-cover w-[40px] h-[40px]"
                  src="/question.svg"
                  alt="donator profile photo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="flex-1 space-y-3">
                <div className={`${outfit.className} text-heading-4 font-bold`}>
                  Still have questions?
                </div>
                <div className={`${kanit.className} text-m text-neutral-4`}>
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team!
                </div>
              </div>
            </div>
            <div className="w-full">
              <button
                className={`${kanit.className} w-full p-3 rounded-xl text-l font-semibold bg-primary text-white`}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-[1px] border-neutral-6">
            <div className={`${kanit.className} text-xl font-medium`}>
              How can i make food donation?
            </div>
            <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <Image
                className="object-cover w-[32px] h-[32px]"
                src="/angle-small-down.svg"
                alt="donator profile photo"
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>
          </div>
          <div className="bg-tertiary space-y-3 w-full px-5 py-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className={`${kanit.className} text-xl font-medium`}>
                How can i make food donation?
              </div>
              <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <Image
                  className="object-cover w-[32px] h-[32px]"
                  src="/angle-small-up.svg"
                  alt="donator profile photo"
                  width={32}
                  height={32}
                  priority
                  style={{
                    filter: "invert(1)",
                  }}
                />
              </div>
            </div>
            <div
              className={`${kanit.className} text-l text-neutral-4 text-pretty`}
            >
              Most food banks and charities welcome non-perishable, unopened,
              and unexpired food items. This usually includes canned goods
              (fruits, vegetables, soups, beans), boxed meals, pasta, rice, and
              other shelf-stable items. However, it's crucial to check the
              specific guidelines of the organization you're donating to, as
              some may have preferences or restrictions on certain items.
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-[1px] border-neutral-6">
            <div className={`${kanit.className} text-xl font-medium`}>
              Will my contributions be appreciated?
            </div>
            <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <Image
                className="object-cover w-[32px] h-[32px]"
                src="/angle-small-down.svg"
                alt="donator profile photo"
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-[1px] border-neutral-6">
            <div className={`${kanit.className} text-xl font-medium`}>
              How can i find a food bank or charity near me that accepts
              donations?
            </div>
            <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <Image
                className="object-cover w-[32px] h-[32px]"
                src="/angle-small-down.svg"
                alt="donator profile photo"
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between px-5 py-4 rounded-xl border-[1px] border-neutral-6">
            <div className={`${kanit.className} text-xl font-medium`}>
              How can I get food donation?
            </div>
            <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <Image
                className="object-cover w-[32px] h-[32px]"
                src="/angle-small-down.svg"
                alt="donator profile photo"
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
