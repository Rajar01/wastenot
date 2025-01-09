import DonatorCard from "@/components/atoms/shared/DonatorCard.tsx";

type Donator = {
  id: number;
  donator_name: string;
  donator_type: string;
  donator_phone_number: string;
  photo: string;
};

interface DonatorCardGroupProps {
  donators: Donator[];
}

export default function DonatorCardGroup({ donators }: DonatorCardGroupProps) {
  return (
    <div className="flex space-x-6">
      {donators.map((donator) => (
        <DonatorCard
          key={donator["id"]}
          title={donator["donator_name"]}
          subtitle={donator["donator_type"]}
          imageURL={
            donator["photo"] == null
              ? "https://placehold.co/600x400?text=No+Photo&font=roboto"
              : donator["photo"]
          }
        />
      ))}
    </div>
  );
}
