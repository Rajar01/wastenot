"use client";

import PaginationButton from "@/components/atoms/shared/PaginationButton.tsx";

import CauseCardGroup from "@/components/molecules/cause/CauseCardGroup.tsx";

import { BASE_API_URL } from "@/utils/consts.ts";

import { useEffect, useState } from "react";

export default function CausesPage() {
  const [causes, setCauses] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCauses = async () => {
    const response = await fetch(`${BASE_API_URL}/causes?page=${currentPage}`);

    const data = await response.json();

    setCauses(data["data"]);
    setLastPage(data["meta"]["last_page"]);
  };

  const onPrevBtnClick = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const onNextBtnClick = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCauses();
  }, [currentPage]);

  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <CauseCardGroup causes={causes} />
        <PaginationButton
          lastPage={lastPage}
          currentPage={currentPage}
          isPrevBtnDisabled={currentPage == 1}
          isNextBtnDisabled={currentPage == lastPage}
          onPrevBtnClick={onPrevBtnClick}
          onNextBtnClick={onNextBtnClick}
        />
      </div>
    </div>
  );
}
