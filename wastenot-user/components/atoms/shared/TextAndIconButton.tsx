import Image from "next/image";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonSize } from "@/utils/enums.ts";

interface TextAndIconButtonProps {
  text: string;
  type?: TextAndIconButtonSize;
}

export default function TextAndIconButton({
  text,
  type = TextAndIconButtonSize.Base,
}: TextAndIconButtonProps) {
  return (
    <button className={`${kanit.className} flex`}>
      <div
        className={`bg-tertiary rounded-[60px] ${type == TextAndIconButtonSize.Base ? "px-6 py-2" : "px-8 py-3"}`}
      >
        {text}
      </div>
      <div
        className={`bg-tertiary rounded-[60px] flex items-center justify-center ${type == TextAndIconButtonSize.Base ? "w-[43px]" : "w-[51px]"}`}
      >
        <Image
          src="/arrow-up-right.svg"
          alt=""
          width={16}
          height={16}
          priority
        />
      </div>
    </button>
  );
}
