import Chip from "@/components/atoms/shared/Chip.tsx";
import ProgressBar from "@/components/atoms/shared/ProgressBar.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

interface CauseCardProps {
  title: string;
  description: string;
  goal: number;
  raised: number;
  imageURL: string;
}

export default function CauseCard({
  title,
  description,
  goal,
  raised,
  imageURL,
}: CauseCardProps) {
  return (
    <div className="border border-neutral-6 rounded-xl px-4 pt-4 pb-5">
      <div className="mb-5 -space-y-6 max-w-[384px] min-w-[384px]">
        <div>
          <Image
            className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
            src={imageURL}
            alt=""
            width={384}
            height={272}
            priority
          />
        </div>
        <div className="flex justify-end">
          <Chip text="Donate Now" />
        </div>
      </div>
      <div>
        <div className={`${outfit.className} text-heading-3 font-bold mb-3`}>
          {title}
        </div>
        <div
          className={`${kanit.className} text-m text-neutral-4 mb-3 text-ellipsis line-clamp-3`}
        >
          {description}
        </div>
        <ProgressBar percentage={80} />
        <div
          className={`${outfit.className} text-center text-heading-5 font-bold text-primary underline`}
        >
          View Details
        </div>
      </div>
      <hr className="border-t border-neutral-4 opacity-15 my-5" />
      <div className="flex items-center justify-between">
        <div className={`${kanit.className} text-l text-neutral-4`}>
          <span>Goals: </span>
          <span className={`${kanit.className} text-xl text-neutral-3`}>
            {goal} meals
          </span>
        </div>
        <div className={`${kanit.className} text-l text-neutral-4`}>
          <span>Raised: </span>
          <span className={`${kanit.className} text-xl text-neutral-3`}>
            {raised} meals
          </span>
        </div>
      </div>
    </div>
  );
}
