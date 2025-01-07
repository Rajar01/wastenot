import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

interface DonatorCardProps {
  title: string;
  subtitle: string;
  imageURL: string;
}

export default function DonatorCard({
  title,
  subtitle,
  imageURL,
}: DonatorCardProps) {
  return (
    <div className="space-y-6 flex-1">
      <div>
        <Image
          className="w-[306px] h-[395px] rounded-xl object-cover"
          src={imageURL}
          alt=""
          width={306}
          height={395}
          priority
        />
      </div>
      <div className="space-y-1">
        <div className={`${outfit.className} text-heading-4 font-bold`}>
          {title}
        </div>
        <div className={`${kanit.className} text-m text-neutral-4`}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}
