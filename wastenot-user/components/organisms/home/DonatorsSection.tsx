import IconSubtitle from "@/components/atoms/shared/IconSubtitle.tsx";
import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";

import DonatorCardGroup from "@/components/molecules/home/DonatorCardGroup.tsx";

import { outfit } from "@/utils/fonts.ts";
import { BASE_API_URL } from "@/utils/consts.ts";

export default async function DonatorsSection() {
  const fetchDonators = async () => {
    const response = await fetch(`${BASE_API_URL}/donators`);

    const data = await response.json();

    return data["data"].slice(0, 4);
  };

  const donators = await fetchDonators();

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
        <DonatorCardGroup donators={donators} />
      </div>
    </div>
  );
}
