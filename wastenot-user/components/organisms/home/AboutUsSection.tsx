import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";
import IconSubtitle from "@/components/atoms/shared/IconSubtitle.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="bg-neutral-2">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex flex-row items-center justify-between space-x-20">
        <div className="flex-1">
          <Image
            className="object-cover w-[580px] h-[584px]"
            src="/about-us.svg"
            alt=""
            width={580}
            height={584}
            priority
          />
        </div>
        <div className="flex-1">
          <div className="mb-8">
            <IconSubtitle text="About Us" />
            <div
              className={`${outfit.className} text-heading-2 font-bold mb-3`}
            >
              <span className="after:content-['\00a0']">
                Ending hunger. We rescue
              </span>
              <span className="text-secondary underline after:content-['\00a0']">
                surplus food
              </span>
              <span>from any source and deliver it to those in need.</span>
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
          <TextAndIconButton text="Donate Now" />
        </div>
      </div>
    </div>
  );
}
