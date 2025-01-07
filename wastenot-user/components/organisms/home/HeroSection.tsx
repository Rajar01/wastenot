import CircleDonatorProfileImageGroup from "@/components/molecules/home/CircleDonatorProfileImageGroup.tsx";
import HeroImageGroup from "@/components/molecules/home/HeroImageGroup.tsx";
import HeroCardGroup from "@/components/molecules/home/HeroCardGroup.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

export default function HeroSection() {
  return (
    <div id="wrapper" className="bg-primary">
      <div className="3xl:container mx-auto px-[312px] py-40 space-y-[60px]">
        <div className="flex justify-between items-center text-neutral-1 ">
          <div
            className={`${outfit.className} text-display-3 font-bold text-balance`}
          >
            <span className="after:content-['\00a0']">
              Nobody Has Become Poor
            </span>
            <span className="text-tertiary underline">By Giving</span>
          </div>
          <div className="space-y-6 max-w-[526px] min-w-[526px]">
            <p className={`${kanit.className} text-l text-pretty`}>
              Our goal is to provide food support to all people in need,
              striving to alleviate hunger, and build a more food-secure future
              for everyone.
            </p>
            <div className="flex items-center space-x-3">
              <CircleDonatorProfileImageGroup />
              <div>
                <span className={`${kanit.className} text-xl font-medium`}>
                  175+ Donators
                </span>
              </div>
            </div>
          </div>
        </div>
        <HeroImageGroup />
        <HeroCardGroup />
      </div>
    </div>
  );
}
