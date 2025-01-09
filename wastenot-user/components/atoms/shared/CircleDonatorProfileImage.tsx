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
        className="rounded-full w-12 h-12 object-cover object-center border-2 border-neutral-1"
        src={url}
        alt=""
        width={48}
        height={48}
        priority
      />
    </div>
  );
}
