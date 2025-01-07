import { kanit } from "@/utils/fonts.ts";

interface ChipProps {
  text: string;
}

export default function Chip({ text }: ChipProps) {
  return (
    <button
      className={`${kanit.className} uppercase mr-6 text-s font-medium bg-primary text-white border-4 border-neutral-1 rounded-3xl px-5 py-2.5`}
    >
      {text}
    </button>
  );
}
