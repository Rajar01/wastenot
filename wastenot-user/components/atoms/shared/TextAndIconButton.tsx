import Image from "next/image";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonSize, TextAndIconButtonType } from "@/utils/enums.ts";

interface TextAndIconButtonProps {
  text: string;
  size?: TextAndIconButtonSize;
  type?: TextAndIconButtonType;
}

export default function TextAndIconButton({
  text,
  size = TextAndIconButtonSize.Base,
  type = TextAndIconButtonType.Primary,
}: TextAndIconButtonProps) {
  return (
    <button
      className={`${kanit.className} ${type == TextAndIconButtonType.Primary ? "text-neutral-1" : "text-neutral-3"} text-l flex`}
    >
      <div
        className={`${size == TextAndIconButtonSize.Base ? "px-6 py-2" : "px-8 py-3"} ${type == TextAndIconButtonType.Primary ? "bg-primary" : "bg-tertiary"} rounded-[60px]`}
      >
        {text}
      </div>
      <div
        className={`${size == TextAndIconButtonSize.Base ? "w-[43px]" : "w-[51px]"} ${type == TextAndIconButtonType.Primary ? "bg-primary" : "bg-tertiary"} rounded-[60px] flex items-center justify-center`}
      >
        {type == TextAndIconButtonType.Primary && (
          <Image
            src="/arrow-up-right.svg"
            alt=""
            width={16}
            height={16}
            priority
            style={{
              filter: "invert(1)",
            }}
          />
        )}
        {type == TextAndIconButtonType.Secondary && (
          <Image
            src="/arrow-up-right.svg"
            alt=""
            width={16}
            height={16}
            priority
          />
        )}
      </div>
    </button>
  );
}
