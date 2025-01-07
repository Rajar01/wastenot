import HeroCard from "@/components/atoms/home/HeroCard.tsx";

import { HeroCardType } from "@/utils/enums.ts";

import Image from "next/image";

export default function HeroCardGroup() {
  return (
    <div className="flex justify-between space-x-6">
      <HeroCard
        icon={
          <Image
            src="/hand-fingers-crossed.svg"
            alt=""
            width={50}
            height={50}
            priority
          />
        }
        title="Every Meal Matters"
        content="Your donations are more than sustenance because that acts of compassion that build hope."
      />
      <HeroCard
        icon={
          <Image
            src="/hand-holding-heart.svg"
            alt=""
            width={50}
            height={50}
            priority
          />
        }
        title="Donate Food"
        content="Your contribution makes a direct and immediate impact on the lives of those in need."
        type={HeroCardType.Highlight}
      />
      <HeroCard
        icon={
          <Image src="/piggy-bank.svg" alt="" width={50} height={50} priority />
        }
        title="Save Food"
        content="Transforming food surplus into smiles and reducing hunger."
      />
      <HeroCard
        icon={
          <Image
            src="/grocery-basket.svg"
            alt=""
            width={50}
            height={50}
            priority
          />
        }
        title="Give Food, Give Hope"
        content="Your donation provides nourishment and restores dignity."
      />
    </div>
  );
}
