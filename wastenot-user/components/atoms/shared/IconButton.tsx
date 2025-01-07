import { IconButtonSize } from "@/utils/enums.ts";

interface IconButtonProps {
  icon: React.ReactNode;
  size?: IconButtonSize;
}

export default function IconButton({
  icon,
  size = IconButtonSize.Base,
}: IconButtonProps) {
  return (
    <div
      className={`${size == IconButtonSize.Base ? "w-12 h-12" : "w-[50px] h-[50px]"} rounded-full bg-tertiary flex items-center justify-center`}
    >
      {icon}
    </div>
  );
}
