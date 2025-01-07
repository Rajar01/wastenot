import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";
import Logo from "@/components/atoms/shared/Logo.tsx";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonType } from "@/utils/enums.ts";

export default function Navbar() {
  return (
    <div className={`${kanit.className} bg-primary border-b border-neutral-6`}>
      <div className="3xl:container mx-auto px-[312px] py-5 flex justify-between items-center">
        <Logo />
        <div className="space-x-10 text-neutral-1 text-l">
          <a>Home</a>
          <a>About Us</a>
          <a>Donators</a>
          <a>FAQ</a>
          <a>Causes</a>
        </div>
        <div className="text-neutral-3 text-l">
          <TextAndIconButton
            text="Donate Now"
            type={TextAndIconButtonType.Secondary}
          />
        </div>
      </div>
    </div>
  );
}
