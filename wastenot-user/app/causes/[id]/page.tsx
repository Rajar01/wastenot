import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";
import ProgressBar from "@/components/atoms/shared/ProgressBar.tsx";

import { kanit, outfit } from "@/utils/fonts.ts";
import { TextAndIconButtonSize } from "@/utils/enums.ts";

import Image from "next/image";

export default function CauseDetailsPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="space-y-10">
          <h1 className={`${outfit.className} font-bold text-heading-2`}>
            Help the helpless
          </h1>
          <div>
            <Image
              className="w-full h-[640px] rounded-xl object-cover"
              src="https://placehold.co/856"
              alt=""
              width={1296}
              height={640}
              priority
            />
          </div>
          <div>
            <ProgressBar percentage={50} />
            <div className="flex items-center justify-between">
              <div className={`${kanit.className} text-l text-neutral-4`}>
                <span>Goals: </span>
                <span className={`${kanit.className} text-xl text-neutral-3`}>
                  100 meals
                </span>
              </div>
              <div className={`${kanit.className} text-l text-neutral-4`}>
                <span>Raised: </span>
                <span className={`${kanit.className} text-xl text-neutral-3`}>
                  20 meals
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
              Lorem ipsum dolor sit amet consectetur. Tellus cursus enim
              pellentesque magna. Phasellus consequat purus id at malesuada.
              Pellentesque egestas leo tincidunt donec dapibus. Elit massa enim
              sem praesent amet ullamcorper quam egestas vulputate. Dolor
              pretium adipiscing dolor mus facilisi. Feugiat auctor sagittis nec
              volutpat. Amet at lacus faucibus pulvinar pulvinar nunc.
              Adipiscing sed sem risus integer amet sed. Fusce lectus libero dui
              ipsum semper commodo enim lorem. Magna ut habitasse dolor diam
              magna vitae. Commodo tristique donec sem sagittis in odio sed
              cursus cras. Urna nunc arcu in dolor sapien amet. Volutpat ornare
              cursus rhoncus tortor. Ut sit sapien pulvinar vel eget tellus nec.
              Urna sed sodales fermentum nibh amet ipsum congue diam at. Sit in
              cursus amet sit id. Ullamcorper sed laoreet posuere facilisi risus
              enim purus et enim. At nullam vel auctor habitant enim. Varius
              eget porttitor auctor hendrerit nulla tortor ultrices nisl.
              Viverra elementum eget est condimentum ornare. Vitae praesent duis
              nisi augue quis sed sed. Ultrices nibh convallis est enim leo
              molestie magna tristique. Neque molestie justo pulvinar aliquet
              id. Consequat in amet curabitur vitae sit pretium integer
              tincidunt eget. Laoreet nisl adipiscing risus cras sed sed. Leo at
              dictum pellentesque tempus aliquet ultricies etiam ut. Eleifend at
              mauris sit accumsan libero quam.
            </p>
          </div>
          <div className="space-y-8 mt-10">
            <h1 className={`${outfit.className} font-bold text-heading-2`}>
              Cause Location
            </h1>
            <div>
              <Image
                className="w-full h-[640px] rounded-xl object-cover"
                src="https://placehold.co/856"
                alt=""
                width={1296}
                height={640}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
