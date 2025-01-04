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

export default function DonatorsHeader() {
  return (
    <div className="bg-primary">
      <div className="3xl:container mx-auto px-[312px] py-[60px] relative">
        <div className="space-y-2 w-fit rotate-[-20deg] mb-6">
          <div
            className={`${kanit.className} rounded-full text-[18px] leading-[150%] bg-tertiary px-6 py-2`}
          >
            Donators
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`${outfit.className} max-w-[528px] min-w-[528px] text-[40px] font-bold leading-[120%] text-white`}
          >
            Meet Our Generous Donator for Food Donation
          </div>
          <div className={`${kanit.className} leading-[150%] text-white`}>
            Home - <span className="text-tertiary">Donators</span>
          </div>
        </div>

        <div className="rotate-[-40deg] absolute top-[48px] left-[1344px]">
          <Image
            className="object-cover w-[128px] h-[114px]"
            src="/grapgic.svg"
            alt="donator profile photo"
            width={128}
            height={114}
            priority
          />
        </div>
      </div>
    </div>
  );
}
