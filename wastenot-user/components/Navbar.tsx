import ButtonWithIcon from "@/components/atoms/ButtonWithIcon.tsx";

import { kanit } from "@/utils/fonts.ts";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className={`${kanit.className} bg-primary border-b border-neutral-6`}>
      <div className="3xl:container mx-auto px-[312px] py-5 flex justify-between items-center">
        <div>
          <Image
            src="/wastenot-logo.svg"
            alt=""
            width={208}
            height={48}
            priority
          />
        </div>
        <div className="space-x-10 text-neutral-1 text-l">
          <a>Home</a>
          <a>About Us</a>
          <a>Donators</a>
          <a>FAQ</a>
          <a>Causes</a>
        </div>
        <div className="text-neutral-3 text-l">
          <ButtonWithIcon text="Donate Now" />
        </div>
      </div>
    </div>
  );
}
