import Image from "next/image";

import { Kanit, Outfit } from "next/font/google";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-kanit",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-family-outfit",
  subsets: ["latin"],
  display: "swap",
});

export default function CausesPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <div className="grid grid-cols-3 gap-6 mb-[60px]">
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}

          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
          {/* Card Start*/}
          <div className="border-[1px] border-neutral-6 rounded-xl px-4 pt-4 pb-5">
            {/*image Start*/}
            <div className="mb-5 space-y-[-24px] max-w-[384px] min-w-[384px]">
              <div>
                <Image
                  className="max-w-[384px] min-w-[384px] max-h-[272px] min-h-[272px] object-cover rounded-lg"
                  src="https://placehold.co/400"
                  alt="arrow up right icon"
                  width={384}
                  height={272}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button
                  className={`${kanit.className} mr-6 text-s font-medium bg-primary text-white border-[4px] border-neutral-1 rounded-3xl px-5 py-[10px]`}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
            {/*image end*/}
            {/*content start*/}
            <div>
              <div
                className={`${outfit.className} text-heading-3 font-bold mb-3`}
              >
                Help the helpless
              </div>
              <div className={`${kanit.className} text-m text-neutral-4 mb-3`}>
                Together we can make a charity to supporting great purpose for
                helpless people.
              </div>
              <div className="space-y-[4px] mb-5">
                <div
                  className={`${outfit.className} text-heading-5 font-bold text-primary flex justify-between items-center`}
                >
                  <span>0%</span>
                  <span>70%</span>
                </div>
                <div>
                  <div className="h-[6px] w-full bg-neutral-6 rounded-lg"></div>
                </div>
              </div>
              <div
                className={`${outfit.className} text-center font-[20px] font-bold leading-[130%] text-primary underline`}
              >
                View Details
              </div>
            </div>
            {/*content end*/}
            <hr className="border-t-[1px] border-neutral-4 opacity-15 my-5" />
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
          {/*Card End*/}
        </div>
        <div className="flex items-center space-x-6 w-fit mx-auto">
          <div
            className={`${kanit.className} text-[18px] font-light leading-[150%]`}
          >
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">9</span> of{" "}
            <span className="font-medium">27</span>
          </div>
          <div className={`${kanit.className} text-[18px] leading-[150%]`}>
            <button className="px-6 py-3 bg-tertiary rounded-tl-lg rounded-bl-lg">
              Prev
            </button>
            <button className="px-6 py-3 bg-primary text-white rounded-tr-lg rounded-br-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
