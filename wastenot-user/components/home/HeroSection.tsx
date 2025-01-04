import { Kanit, Outfit } from "next/font/google";
import Image from "next/image";

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

export default function HeroSection() {
  return (
    <div className="bg-primary">
      <div className="3xl:container mx-auto px-[312px] py-[100px] space-y-[60px]">
        <div className="flex justify-between items-center text-neutral-1 ">
          <div
            className={`${outfit.className} text-display-3 font-bold text-balance`}
          >
            Nobody Has Become Poor{" "}
            <span className="text-tertiary underline">By Giving</span>
          </div>
          <div className="space-y-6 max-w-[526px] min-w-[526px]">
            <div>
              <p className={`${kanit.className} text-l text-pretty`}>
                Our goal is to provide food support to all people in need,
                striving to alleviate hunger, and build a more food-secure
                future for everyone.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-start space-x-[-12px]">
                <div>
                  <Image
                    className="rounded-full border-[2px] border-neutral-1"
                    src="https://placehold.co/400"
                    alt="donator profile photo"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full border-[2px] border-neutral-1"
                    src="https://placehold.co/400"
                    alt="donator profile photo"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full border-[2px] border-neutral-1"
                    src="https://placehold.co/400"
                    alt="donator profile photo"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <div className="rounded-full w-12 h-12 bg-tertiary flex items-center justify-center">
                  <Image
                    src="/plus.svg"
                    alt="plus icon"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
              </div>
              <div>
                <span className={`${kanit.className} text-xl font-medium`}>
                  175+ Donators
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-between items-stretch">
          <div>
            <Image
              className="w-[856px] h-[524px] rounded-xl object-cover"
              src="https://placehold.co/856"
              alt="hero photo"
              width={856}
              height={524}
              priority
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Image
                className="w-[416px] h-[250px] object-cover rounded-xl"
                src="https://placehold.co/100"
                alt="hero photo"
                width={416}
                height={250}
                priority
              />
            </div>
            <div>
              <Image
                className="w-[416px] h-[250px] object-cover rounded-xl"
                src="https://placehold.co/100"
                alt="hero photo"
                width={416}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="absolute top-[180px] left-[790px]">
            <Image
              className="rounded-xl"
              src="/donate-now-circle.svg"
              alt="donate now circle"
              width={160}
              height={160}
              priority
            />
          </div>
        </div>

        <div className="flex justify-between space-x-6">
          <div className="flex-1 bg-neutral-5 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src="/hand-fingers-crossed.svg"
                alt="donate now circle"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="mb-3">
              <span className={`${outfit.className} text-heading-4 font-bold`}>
                Every Meal Matters
              </span>
            </div>
            <div>
              <p
                className={`${kanit.className} text-l text-neutral-4 text-pretty`}
              >
                Your donations are more than sustenance because that acts of
                compassion that build hope.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-tertiary rounded-xl p-8">
            <div className="mb-6">
              <Image
                src="/hand-holding-heart.svg"
                alt="donate now circle"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="mb-3">
              <span className={`${outfit.className} text-heading-4 font-bold`}>
                Donate Food
              </span>
            </div>
            <div>
              <p
                className={`${kanit.className} text-l text-neutral-4 text-pretty`}
              >
                Your contribution makes a direct and immediate impact on the
                lives of those in need.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-neutral-5 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src="/piggy-bank.svg"
                alt="donate now circle"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="mb-3">
              <span className={`${outfit.className} text-heading-4 font-bold`}>
                Save Food
              </span>
            </div>
            <div>
              <p
                className={`${kanit.className} text-l text-neutral-4 text-pretty`}
              >
                Transforming food surplus into smiles and reducing hunger.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-neutral-5 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src="/grocery-basket.svg"
                alt="donate now circle"
                width={50}
                height={50}
                priority
              />
            </div>
            <div className="mb-3">
              <span className={`${outfit.className} text-heading-4 font-bold`}>
                Give Food, Give Hope
              </span>
            </div>
            <div>
              <p
                className={`${kanit.className} text-l text-neutral-4 text-pretty`}
              >
                Your donation provides nourishment and restores dignity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
