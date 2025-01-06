import Image from "next/image";

import { kanit } from "@/utils/fonts.ts";
import { ButtonWithIconSize } from "@/utils/enums.ts";

interface ButtonWithIconProps {
  text: string;
  type?: ButtonWithIconSize;
}

export default function ButtonWithIcon({
  text,
  type = ButtonWithIconSize.Base,
}: ButtonWithIconProps) {
  return (
    <button className={`${kanit.className} flex`}>
      <div
        className={`bg-tertiary rounded-[60px] ${type == ButtonWithIconSize.Base ? "px-6 py-2" : "px-8 py-3"}`}
      >
        {text}
      </div>
      <div
        className={`bg-tertiary rounded-[60px] flex items-center justify-center ${type == ButtonWithIconSize.Base ? "w-[43px]" : "w-[51px]"}`}
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
