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

export default function DonatorsSection() {
  return (
    <div className="bg-neutral-1">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="flex items-center justify-between mb-[60px]">
          <div className="space-y-4">
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
                Donators
              </div>
            </div>
            <div className={`${outfit.className} text-heading-2 font-bold`}>
              Our 
              <span className="text-secondary underline">
                Generous Donators
              </span>
            </div>
          </div>
          <div className="text-neutral-3 text-l">
            <button className="flex">
              <div
                className={`${kanit.className} text-l font-medium bg-primary px-6 py-2 rounded-[60px] text-neutral-1`}
              >
                View all
              </div>
              <div className="bg-primary rounded-[60px] w-[43px] flex items-center justify-center">
                <Image
                  src="/arrow-up-right.svg"
                  alt="arrow up right icon"
                  width={16}
                  height={16}
                  priority
                  style={{
                    filter: "invert(1)",
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="space-y-6 flex-1">
            <div>
              <Image
                className="w-[306px] h-[395px] rounded-xl object-cover"
                src="https://placehold.co/856"
                alt="hero photo"
                width={306}
                height={395}
                priority
              />
            </div>
            <div className="space-y-1">
              <div className={`${outfit.className} text-heading-4 font-bold`}>
                Cody Fisher
              </div>
              <div className={`${kanit.className} text-m text-neutral-4`}>
                VP Of Sucurity
              </div>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <div>
              <Image
                className="w-[306px] h-[395px] rounded-xl object-cover"
                src="https://placehold.co/856"
                alt="hero photo"
                width={306}
                height={395}
                priority
              />
            </div>
            <div className="space-y-1">
              <div className={`${outfit.className} text-heading-4 font-bold`}>
                Cody Fisher
              </div>
              <div className={`${kanit.className} text-m text-neutral-4`}>
                VP Of Sucurity
              </div>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <div>
              <Image
                className="w-[306px] h-[395px] rounded-xl object-cover"
                src="https://placehold.co/856"
                alt="hero photo"
                width={306}
                height={395}
                priority
              />
            </div>
            <div className="space-y-1">
              <div className={`${outfit.className} text-heading-4 font-bold`}>
                Cody Fisher
              </div>
              <div className={`${kanit.className} text-m text-neutral-4`}>
                VP Of Sucurity
              </div>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <div>
              <Image
                className="w-[306px] h-[395px] rounded-xl object-cover"
                src="https://placehold.co/856"
                alt="hero photo"
                width={306}
                height={395}
                priority
              />
            </div>
            <div className="space-y-1">
              <div className={`${outfit.className} text-heading-4 font-bold`}>
                Cody Fisher
              </div>
              <div className={`${kanit.className} text-m text-neutral-4`}>
                VP Of Sucurity
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
