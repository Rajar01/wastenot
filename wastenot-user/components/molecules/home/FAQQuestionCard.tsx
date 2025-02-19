"use client";

import IconButton from "@/components/atoms/shared/IconButton.tsx";

import { kanit } from "@/utils/fonts.ts";

import Image from "next/image";
import { useState } from "react";

interface FAQQuestionCardProps {
  question: string;
  answer: string;
}

export default function FAQQuestionCard({
  question,
  answer,
}: FAQQuestionCardProps) {
  const [isActive, setIsActive] = useState(false);

  const onFaqBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${isActive ? "bg-tertiary" : "border border-neutral-6"} w-full px-5 py-4 rounded-xl space-y-3`}
    >
      <div className="flex items-center justify-between">
        <div className={`${kanit.className} text-xl font-medium`}>
          {question}
        </div>
        <IconButton
          onIconBtnClick={onFaqBtnClick}
          icon={
            isActive ? (
              <Image
                className="object-cover w-8 h-8"
                src="/angle-small-up.svg"
                alt=""
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            ) : (
              <Image
                className="object-cover w-8 h-8"
                src="/angle-small-down.svg"
                alt=""
                width={32}
                height={32}
                priority
                style={{
                  filter: "invert(1)",
                }}
              />
            )
          }
        />
      </div>
      <div
        className={`${kanit.className} ${!isActive && "hidden"} text-l text-neutral-4 text-pretty`}
      >
        {answer}
      </div>
    </div>
  );
}
