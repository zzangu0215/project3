import React from "react";
import { useQuery } from "@apollo/client";

import DevListCard from "./Dev-list-card";

import "./Developer-Lists.css";
import { QUERY_DEVELOPERS } from "../../utils/queries";

const DeveloperLists = () => {
  const { loading, error, data: developerData } = useQuery(QUERY_DEVELOPERS);
  // console.log({ loading, error, developerData });

  const developers = developerData?.Developers || [];

  return (
    <>
      <div className="mt-8 flex justify-center dev-lists">Developer Lists</div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        {developers.map((developer) => (
          <DevListCard key={developer._id} developer={developer} />
        ))}
      </div>
    </>
  );
};

export default DeveloperLists;
