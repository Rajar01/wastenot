"use client";

import PaginationButton from "@/components/atoms/shared/PaginationButton.tsx";

import DonatorCardGroup from "@/components/molecules/donator/DonatorCardGroup.tsx";

import { BASE_API_URL } from "@/utils/consts.ts";

import React, { useEffect, useState } from "react";

export default function DonatorsPage() {
  const [donators, setDonators] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDonators = async () => {
    const response = await fetch(
      `${BASE_API_URL}/donators?page=${currentPage}`,
    );

    const data = await response.json();

    setDonators(data["data"]);
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
    fetchDonators();
  }, []);

  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <DonatorCardGroup donators={donators} />
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
