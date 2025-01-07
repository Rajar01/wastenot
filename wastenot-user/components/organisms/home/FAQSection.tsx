import IconSubtitle from "@/components/atoms/shared/IconSubtitle.tsx";
import Button from "@/components/atoms/shared/Button.tsx";

import FAQQuestionCardGroup from "@/components/molecules/home/FAQQuestionCardGroup.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="bg-neutral-2">
      <div className="3xl:container mx-auto px-[312px] py-[100px] flex items-start justify-between space-x-[134px]">
        <div className="max-w-[416px] min-w-[416px] space-y-10">
          <div>
            <IconSubtitle text="FAQ" />
            <div
              className={`${outfit.className} text-heading-2 font-bold mb-3`}
            >
              <span className="after:content-['\00a0']">Your questions</span>
              <span className="underline text-secondary">answered.</span>
            </div>
            <div
              className={`${kanit.className} text-l text-neutral-4 text-pretty`}
            >
              Let’s do our best to answer your most frequently asked questions.
            </div>
          </div>
          <div className="space-y-6 border border-neutral-6 rounded-xl px-6 py-5">
            <div className="flex items-center space-x-3">
              <div className="flex-1 max-w-20 h-20 border border-neutral-6 rounded-xl flex items-center justify-center">
                <Image
                  className="object-cover w-10 h-10"
                  src="/question.svg"
                  alt=""
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div className="flex-1 space-y-3">
                <div className={`${outfit.className} text-heading-4 font-bold`}>
                  Still have questions?
                </div>
                <div className={`${kanit.className} text-m text-neutral-4`}>
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team!
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button text="Get in touch" />
            </div>
          </div>
        </div>
        <FAQQuestionCardGroup />
      </div>
    </div>
  );
}
