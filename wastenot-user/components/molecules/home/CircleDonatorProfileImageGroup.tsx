import CircleDonatorProfileImage from "@/components/atoms/CircleDonatorProfileImage.tsx";
import IconButton from "@/components/atoms/IconButton.tsx";

import Image from "next/image";

export default function CircleDonatorProfileImageGroup() {
  return (
    <div className="flex items-center justify-start -space-x-3">
      <CircleDonatorProfileImage url="https://placehold.co/400" />
      <CircleDonatorProfileImage url="https://placehold.co/400" />
      <CircleDonatorProfileImage url="https://placehold.co/400" />
      <IconButton
        icon={<Image src="/plus.svg" alt="" width={20} height={20} priority />}
      />
    </div>
  );
}
