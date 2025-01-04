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

export default function AboutUsSection() {
  return (
    <div className="bg-neutral-2">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex flex-row items-center justify-between space-x-[80px]">
        <div className="flex-1">
          <Image
            className="object-cover w-[580px] h-[584px]"
            src="/about-us.svg"
            alt="donator profile photo"
            width={580}
            height={584}
            priority
          />
        </div>
        <div className="flex-1">
          <div className="mb-8">
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
                About Us
              </div>
            </div>
            <div
              className={`${outfit.className} text-heading-2 font-bold mb-3`}
            >
              Ending hunger. We rescue{" "}
              <span className="text-secondary underline">surplus food</span>{" "}
              from any source and deliver it to those in need.
            </div>
            <div
              className={`${kanit.className} text-l text-neutral-4 text-pretty`}
            >
              We believe that everyone deserves access to nutritious food. Our
              mission is to connect surplus food with those in need, reducing
              food waste and building a stronger community. We work with local
              businesses, farms, and volunteers to ensure that no one goes
              hungry.
            </div>
          </div>
          <div className="text-neutral-3 text-l">
            <button className="flex">
              <div
                className={`${kanit.className} text-l font-medium bg-primary px-6 py-2 rounded-[60px] text-neutral-1`}
              >
                Donate Now
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
      </div>
    </div>
  );
}
