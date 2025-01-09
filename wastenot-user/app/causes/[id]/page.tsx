import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";
import ProgressBar from "@/components/atoms/shared/ProgressBar.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";
import { TextAndIconButtonSize } from "@/utils/enums.ts";
import { BASE_API_URL } from "@/utils/consts.ts";
import { getPercentage, removeAllWhiteSpace } from "@/utils/helpers.ts";

import Image from "next/image";

export default async function CauseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const causeId = (await params).id;

  const fetchCause = async () => {
    const response = await fetch(`${BASE_API_URL}/causes/${causeId}`);

    const data = await response.json();

    return data["data"];
  };

  const cause = await fetchCause();

  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="space-y-10">
          <h1 className={`${outfit.className} font-bold text-heading-2`}>
            {cause["cause_title"]}
          </h1>
          <div>
            <Image
              className="w-full h-[640px] rounded-xl object-cover object-center"
              src={
                cause["photo"] == null
                  ? "https://placehold.co/600x400?text=No+Photo&font=roboto"
                  : cause["photo"]
              }
              alt=""
              width={1296}
              height={640}
              priority
            />
          </div>
          <div>
            <ProgressBar
              percentage={getPercentage(
                cause["cause_meal_raised_amount"],
                cause["cause_meal_goal_amount"],
              )}
            />
            <div className="flex items-center justify-between">
              <div className={`${kanit.className} text-l text-neutral-4`}>
                <span>Goals: </span>
                <span className={`${kanit.className} text-xl text-neutral-3`}>
                  {cause["cause_meal_goal_amount"]}
                </span>
              </div>
              <div className={`${kanit.className} text-l text-neutral-4`}>
                <span>Raised: </span>
                <span className={`${kanit.className} text-xl text-neutral-3`}>
                  {cause["cause_meal_raised_amount"]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-10">
          <div className="flex items-center justify-center py-5 border-y border-neutral-6/50">
            <div className="text-neutral-1 text-l">
              <TextAndIconButton
                text="Donate Now"
                size={TextAndIconButtonSize.Large}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-8">
            <h1 className={`${outfit.className} font-bold text-heading-2`}>
              Cause Description
            </h1>
            <p
              className={`${kanit.className} text-justify text-neutral-4 text-m font-light`}
            >
              {cause["cause_desc"]}
            </p>
          </div>
          <div className="space-y-8 mt-10">
            <h1 className={`${outfit.className} font-bold text-heading-2`}>
              Cause Location
            </h1>
            <div className="w-full">
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://www.google.com/maps?q=${removeAllWhiteSpace(cause["cause_geocoordinate"])}&hl=es;z%3D14&amp&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
