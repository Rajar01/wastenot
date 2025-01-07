import DonatorCard from "@/components/atoms/shared/DonatorCard.tsx";

export default function DonatorCardGroup() {
  return (
    <div className="flex space-x-6">
      <DonatorCard
        title="Cody Fisher"
        subtitle="VP of Security"
        imageURL="https://placehold.co/856"
      />
      <DonatorCard
        title="Cody Fisher"
        subtitle="VP of Security"
        imageURL="https://placehold.co/856"
      />
      <DonatorCard
        title="Cody Fisher"
        subtitle="VP of Security"
        imageURL="https://placehold.co/856"
      />
      <DonatorCard
        title="Cody Fisher"
        subtitle="VP of Security"
        imageURL="https://placehold.co/856"
      />
    </div>
  );
}
