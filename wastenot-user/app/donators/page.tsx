import PaginationButton from "@/components/atoms/shared/PaginationButton.tsx";

import DonatorCardGroup from "@/components/molecules/donator/DonatorCardGroup.tsx";

export default function DonatorsPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <DonatorCardGroup />
        <PaginationButton totalItem={20} totalPage={9} currentPage={1} />
      </div>
    </div>
  );
}
