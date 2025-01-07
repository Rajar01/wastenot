import { outfit } from "@/utils/fonts.ts";

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
        <span>{percentage}%</span>
      </div>
      <div>
        <div className={`w-full h-[6px] bg-neutral-6 rounded-lg`}></div>
        <div
          className={`w-[${percentage}%] h-[6px] bg-primary rounded-lg -mt-[6px]`}
        ></div>
      </div>
    </div>
  );
}
