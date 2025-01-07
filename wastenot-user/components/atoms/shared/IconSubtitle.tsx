import { outfit } from "@/utils/fonts.ts";

import Image from "next/image";

interface IconSubtitleProps {
  text: string;
}

export default function IconSubtitle({ text }: IconSubtitleProps) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div>
        <Image
          className="object-cover w-8 h-8"
          src="/star.svg"
          alt=""
          width={32}
          height={32}
          priority
        />
      </div>
      <div
        className={`${outfit.className} text-heading-5 font-bold text-primary`}
      >
        {text}
      </div>
    </div>
  );
}
