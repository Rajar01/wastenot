import IconSubtitle from "@/components/atoms/shared/IconSubtitle.tsx";
import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";

import CauseCardGroup from "@/components/molecules/home/CauseCardGroup.tsx";

import { outfit } from "@/utils/fonts.ts";
import { BASE_API_URL } from "@/utils/consts.ts";

import Link from "next/link";

export default async function CausesSection() {
  const fetchCauses = async () => {
    const response = await fetch(`${BASE_API_URL}/causes`);

    const data = await response.json();

    return data["data"].slice(0, 6);
  };

  const causes = await fetchCauses();

  return (
    <div id="causes" className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="flex items-center justify-between mb-[60px]">
          <div className="space-y-4">
            <IconSubtitle text="Causes" />
            <div className={`${outfit.className} text-heading-2 font-bold`}>
              <span className="after:content-['\00a0']">Closest</span> 
              <span className="text-secondary underline">
                Causes From Your Location
              </span>
            </div>
          </div>
          <Link href="/causes">
            <TextAndIconButton text="View all" />
          </Link>
        </div>
        <CauseCardGroup causes={causes} />
      </div>
    </div>
  );
}
