import CauseCard from "@/components/molecules/shared/CauseCard.tsx";

type Cause = {
  id: number;
  donator_name: string;
  donator_type: string;
  donator_phone_number: string;
  photo: string;
};

interface CauseCardGroupProps {
  causes: Cause[];
}

export default function CauseCardGroup({ causes }: CauseCardGroupProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {causes.map((cause) => (
        <CauseCard
          key={cause["id"]}
          id={cause["id"]}
          goal={cause["cause_meal_goal_amount"]}
          raised={cause["cause_meal_raised_amount"]}
          title={cause["cause_title"]}
          description={cause["cause_desc"]}
          imageURL={
            cause["photo"] == null
              ? "https://placehold.co/600x400?text=No+Photo&font=roboto"
              : cause["photo"]
          }
        />
      ))}
    </div>
  );
}
