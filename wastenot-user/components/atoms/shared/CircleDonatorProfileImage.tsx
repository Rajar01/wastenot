import Image from "next/image";

interface CircleDonatorProfileImageProps {
  url: string;
}

export default function CircleDonatorProfileImage({
  url,
}: CircleDonatorProfileImageProps) {
  return (
    <div>
      <Image
        className="rounded-full border-2 border-neutral-1"
        src={url}
        alt=""
        width={48}
        height={48}
        priority
      />
    </div>
  );
}
