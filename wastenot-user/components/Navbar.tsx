import { Kanit } from "next/font/google";
import wastenotLogo from "/wastenot-logo.svg";
import Image from "next/image";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-kanit",
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  return (
    <div
      className={`${kanit.className} bg-primary border-b-[1px] border-neutral-6`}
    >
      <nav className="3xl:container mx-auto px-[312px] py-5 flex justify-between items-center">
        <div>
          <Image
            src="/wastenot-logo.svg"
            alt="wastenot logo"
            width={208}
            height={48}
            priority
          />
        </div>
        <div className="space-x-10 text-white text-l">
          <a>Home</a>
          <a>About Us</a>
          <a>Donators</a>
          <a>FAQ</a>
          <a>Causes</a>
        </div>
        <div className="text-neutral-3 text-l">
          <button className="flex">
            <div className="bg-tertiary px-6 py-2 rounded-[60px]">
              Donate Now
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
      </nav>
    </div>
  );
}
