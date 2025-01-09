"use client";

import TextAndIconButton from "@/components/atoms/shared/TextAndIconButton.tsx";
import Logo from "@/components/atoms/shared/Logo.tsx";

import { kanit } from "@/utils/fonts.ts";
import { TextAndIconButtonType } from "@/utils/enums.ts";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  return (
    <div className={`${kanit.className} bg-primary border-b border-neutral-6`}>
      <div className="3xl:container mx-auto px-[312px] py-5 flex justify-between items-center">
        <Logo />
        <div className="space-x-10 text-neutral-1 text-l">
          <Link
            href="/"
            className={`${isActive("/") ? "text-tertiary" : "hover:text-tertiary"}`}
          >
            Home
          </Link>
          <Link href="/#about-us" className="hover:text-tertiary">
            About Us
          </Link>
          <Link
            href="/donators"
            className={`${isActive("/donators") ? "text-tertiary" : "hover:text-tertiary"}`}
          >
            Donators
          </Link>
          <Link href="/#faq" className="hover:text-tertiary">
            FAQs
          </Link>
          <Link
            href="/causes"
            className={`${isActive("/causes") ? "text-tertiary" : "hover:text-tertiary"}`}
          >
            Causes
          </Link>
          <Link
            href="/contact-us"
            className={`${isActive("/contact-us") ? "text-tertiary" : "hover:text-tertiary"}`}
          >
            Contact Us
          </Link>
        </div>
        <div className="text-neutral-3 text-l">
          <Link href="/causes">
            <TextAndIconButton
              text="Donate Now"
              type={TextAndIconButtonType.Secondary}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
