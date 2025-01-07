import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonType } from "@/utils/enums.ts";

export default function ContactUsForm() {
  return (
    <div className="w-3/5 bg-primary px-8 py-10 rounded-xl space-y-8">
      <div className="flex items-center justify-between space-x-[30px]">
        <input
          placeholder="Name"
          type="text"
          className={`${kanit.className} text-m text-neutral-2/60 rounded border border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
        />
        <input
          placeholder="Email"
          type="email"
          className={`${kanit.className} text-m text-neutral-2/60 rounded border border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
        />
      </div>
      <div className="flex items-center justify-between space-x-[30px]">
        <input
          placeholder="Phone"
          type="text"
          className={`${kanit.className} text-m text-neutral-2/60 rounded border border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
        />
        <input
          placeholder="Subject"
          type="text"
          className={`${kanit.className} text-m text-neutral-2/60 rounded border border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
        />
      </div>
      <div>
        <textarea
          placeholder="Tell us about your interest in"
          wrap="soft"
          className={`${kanit.className} resize-none h-[200px] text-m text-neutral-2/60 rounded border border-neutral-2/20 p-3 w-full bg-transparent focus:ring-0 focus:outline-none`}
        ></textarea>
      </div>
      <div>
        <div className="text-neutral-3 text-l">
          <TextAndIconButton
            text="Send to Us"
            type={TextAndIconButtonType.Secondary}
          />
        </div>
      </div>
    </div>
  );
}
