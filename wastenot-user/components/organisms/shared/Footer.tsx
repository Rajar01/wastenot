import Logo from "@/components/atoms/shared/Logo.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

export default function Footer() {
  return (
    <div className={`${kanit.className} bg-neutral-3 text-neutral-1`}>
      <div className="3xl:container mx-auto px-[312px] py-[120px] flex space-x-16">
        <div className="max-w-[330px] min-w-[330px] space-y-5">
          <Logo />
          <p className="text-pretty font-light text-m">
            Provide food support to all people in need, striving to alleviate
            hunger, and build a more food-secure future for everyone.
          </p>
          <div className="flex space-x-3">
            <div className="w-10 h-10 border-neutral-1 border rounded-full flex items-center justify-center">
              <Image
                src="/facebook.svg"
                alt=""
                width={20}
                height={20}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>
            <div className="w-10 h-10 border-neutral-1 border rounded-full flex items-center justify-center">
              <Image
                src="/instagram.svg"
                alt=""
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
          <div className={`${outfit.className} text-heading-4 font-bold`}>
            Quick Link
          </div>
          <div className="font-light text-m flex flex-col space-y-3">
            <a>About Us</a>
            <a>Donators</a>
            <a>FAQ</a>
            <a>Causes</a>
          </div>
        </div>
        <div className="space-y-8">
          <div className={`${outfit.className} text-heading-4 font-bold`}>
            Contact Us
          </div>
          <div className="font-light text-m flex flex-col space-y-3">
            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
            <span
              className={`${outfit.className} text-heading-5 text-tertiary font-bold`}
            >
              (308) 555-0121
            </span>
            <span>debra.holt@example.com</span>
          </div>
        </div>
      </div>
      <hr className="border-t border-neutral-6 opacity-50" />
      <div className="3xl:container mx-auto px-[312px] py-6 font-light text-m">
        <span>Copyright &copy; 2025 </span>
        <span className="text-tertiary">WasteNot</span>
      </div>
    </div>
  );
}
