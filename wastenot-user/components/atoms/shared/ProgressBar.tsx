import { outfit } from "@/utils/fonts.ts";
import { roundToDecimal } from "@/utils/helpers.ts";

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="space-y-1 mb-5">
      <div
        className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
      >
        <span>0%</span>
        <span className={`${percentage == 0 && "hidden"}`}>{percentage}%</span>
      </div>
      <div className={`w-full h-[6px] bg-neutral-6 rounded-lg`}>
        <div
          className="h-[6px] bg-primary rounded-lg 1-mt-[6px]"
          style={{ width: `${roundToDecimal(percentage)}%` }}
        ></div>
      </div>
    </div>
  );
}
