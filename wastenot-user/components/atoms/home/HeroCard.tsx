import { kanit, outfit } from "@/utils/fonts.ts";
import { HeroCardType } from "@/utils/enums.ts";

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  type?: HeroCardType;
}

export default function HeroCard({
  icon,
  title,
  content,
  type = HeroCardType.Normal,
}: HeroCardProps) {
  return (
    <div
      className={`${type == HeroCardType.Normal ? "bg-neutral-5" : "bg-tertiary"} flex-1 rounded-xl p-8`}
    >
      <div className="mb-6">{icon}</div>
      <div className="mb-3">
        <span className={`${outfit.className} text-heading-4 font-bold`}>
          {title}
        </span>
      </div>
      <div>
        <p className={`${kanit.className} text-l text-neutral-4 text-pretty`}>
          {content}
        </p>
      </div>
    </div>
  );
}
