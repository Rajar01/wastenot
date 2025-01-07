import { IconButtonSize, IconButtonType } from "@/utils/enums.ts";

interface IconButtonProps {
  icon: React.ReactNode;
  size?: IconButtonSize;
  type?: IconButtonType;
}

export default function IconButton({
  icon,
  size = IconButtonSize.Base,
  type = IconButtonType.Primary,
}: IconButtonProps) {
  return (
    <div
      className={`${size == IconButtonSize.Base ? "w-12 h-12" : "w-[50px] h-[50px]"} ${IconButtonType.Primary ? "bg-primary" : "bg-tertiary"} rounded-full flex items-center justify-center`}
    >
      {icon}
    </div>
  );
}
