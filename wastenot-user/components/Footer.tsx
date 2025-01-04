import { Kanit, Outfit } from "next/font/google";
import wastenotLogo from "/wastenot-logo.svg";
import Image from "next/image";

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

export default function Footer() {
  return (
    <div className="bg-neutral-3 text-neutral-1">
      <footer className={kanit.className}>
        <div className="3xl:container mx-auto px-[312px] py-[120px] flex space-x-16">
          <div className="max-w-[330px] min-w-[330px] space-y-5">
            <div>
              <Image
                src="/wastenot-logo.svg"
                alt="wastenot logo"
                width={208}
                height={48}
                priority
              />
            </div>
            <div>
              <p className="text-pretty font-light leading-[150%]">
                Provide food support to all people in need, striving to
                alleviate hunger, and build a more food-secure future for
                everyone.
              </p>
            </div>
            <div className="flex space-x-3">
              <div className="w-10 h-10 border-neutral-1 border-[1px] rounded-full flex items-center justify-center">
                <Image
                  src="/facebook.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                  priority
                  style={{
                    filter: "invert(1)",
                  }}
                />
              </div>
              <div className="w-10 h-10 border-neutral-1 border-[1px] rounded-full flex items-center justify-center">
                <Image
                  src="/instagram.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                  priority
                  style={{
                    filter: "invert(1)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div
              className={`${outfit.className} text-2xl leading-[130%] font-bold`}
            >
              Quick Link
            </div>
            <div className="font-light leading-[150%] flex flex-col space-y-3">
              <a>About Us</a>
              <a>Donators</a>
              <a>FAQ</a>
              <a>Causes</a>
            </div>
          </div>
          <div className="space-y-8">
            <div
              className={`${outfit.className} text-2xl leading-[130%] font-bold`}
            >
              Contact Us
            </div>
            <div className="font-light leading-[150%] flex flex-col space-y-3">
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
              <span
                className={`${outfit.className} text-xl text-tertiary leading-[130%] font-bold`}
              >
                (308) 555-0121
              </span>
              <span>debra.holt@example.com</span>
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] border-neutral-6 opacity-50" />
        <div className="3xl:container mx-auto px-[312px] py-6">
          <div className="font-light leading-[150%]">
            <span>Copyright &copy; 2025 </span>
            <span className="text-tertiary">WasteNot</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
