import IconSubtitle from "@/components/atoms/shared/IconSubtitle.tsx";
import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";

import DonatorCardGroup from "@/components/molecules/home/DonatorCardGroup.tsx";

import { outfit } from "@/utils/fonts.ts";

export default function DonatorsSection() {
  return (
    <div className="bg-neutral-1">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="flex items-center justify-between mb-[60px]">
          <div className="space-y-4">
            <IconSubtitle text="Donators" />
            <div className={`${outfit.className} text-heading-2 font-bold`}>
              Our 
              <span className="text-secondary underline">
                Generous Donators
              </span>
            </div>
          </div>
          <TextAndIconButton text="View all" />
        </div>
        <DonatorCardGroup />
      </div>
    </div>
  );
}
