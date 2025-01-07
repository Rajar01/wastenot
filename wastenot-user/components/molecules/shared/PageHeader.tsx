import { kanit, outfit } from "@/utils/fonts.ts";

import Image from "next/image";

interface PageHeaderProps {
  pagename: string;
  breadcrumb: React.ReactNode;
  text: string;
}

export default function PageHeader({
  pagename,
  breadcrumb,
  text,
}: PageHeaderProps) {
  return (
    <div className="bg-primary">
      <div className="3xl:container mx-auto px-[312px] py-[60px] relative">
        <div className="space-y-2 w-fit rotate-[-20deg] mb-6">
          <div
            className={`${kanit.className} rounded-full text-l bg-tertiary px-6 py-2`}
          >
            {pagename}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            className={`${outfit.className} max-w-[528px] min-w-[528px] text-heading-2 font-bold text-white`}
          >
            {text}
          </div>
          <div className={`${kanit.className} text-m text-neutral-1`}>
            {breadcrumb}
          </div>
        </div>
        <div className="rotate-[-40deg] absolute top-12 left-[1344px]">
          <Image
            className="object-cover w-32 h-[114px]"
            src="/grapgic.svg"
            alt=""
            width={128}
            height={114}
            priority
          />
        </div>
      </div>
    </div>
  );
}
