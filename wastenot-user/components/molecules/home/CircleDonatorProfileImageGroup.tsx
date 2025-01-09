import CircleDonatorProfileImage from "@/components/atoms/shared/CircleDonatorProfileImage.tsx";
import IconButton from "@/components/atoms/shared/IconButton.tsx";

import { IconButtonType } from "@/utils/enums.ts";

import Image from "next/image";

interface CircleDonatorProfileImageGroupProps {
  donatorPhotoURLs: string[];
}

export default function CircleDonatorProfileImageGroup({
  donatorPhotoURLs,
}: CircleDonatorProfileImageGroupProps) {
  return (
    <div className="flex items-center justify-start -space-x-3">
      {donatorPhotoURLs.map((url) => (
        <CircleDonatorProfileImage
          key={Math.random()}
          url={
            url == null
              ? "https://placehold.co/600x400?text=No+Photo&font=roboto"
              : url
          }
        />
      ))}
      <IconButton
        icon={<Image src="/plus.svg" alt="" width={20} height={20} priority />}
        type={IconButtonType.Secondary}
      />
    </div>
  );
}
