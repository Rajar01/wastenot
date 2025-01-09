import Chip from "@/components/atoms/shared/Chip.tsx";
import ProgressBar from "@/components/atoms/shared/ProgressBar.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";
import { roundToDecimal } from "@/utils/helpers.ts";

import Image from "next/image";
import Link from "next/link";

interface CauseCardProps {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  imageURL: string;
}

export default function CauseCard({
  id,
  title,
  description,
  goal,
  raised,
  imageURL,
}: CauseCardProps) {
  const getPercentage = () => {
    const result = roundToDecimal((raised / goal) * 100, 2);

    if (raised >= goal) {
      return 100;
    }

    return result;
  };

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
        <div
          className={`${outfit.className} text-heading-3 font-bold mb-3 text-ellipsis line-clamp-1`}
        >
          {title}
        </div>
        <div
          className={`${kanit.className} text-m text-neutral-4 mb-3 text-ellipsis line-clamp-2`}
        >
          {description}
        </div>
        <ProgressBar percentage={getPercentage()} />
        <div
          className={`${outfit.className} text-center text-heading-5 font-bold text-primary underline`}
        >
          <Link href={`/causes/${id}`}>View Details</Link>
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
