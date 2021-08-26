import React from "react";
import { useQuery } from '@apollo/client';

import JobListCard from "../../components/Job-List-card/Job-List-card";
import { FiSearch } from "react-icons/fi";

import "./Job-Lists.css";
import { QUERY_JOB } from '../../utils/queries';

const JobLists = () => {

  const { loading, data } = useQuery(QUERY_JOB);
  const job = data?.job || [];

  return (
    <>
      <div className="mt-8 flex justify-center job-lists">Job Lists</div>
      <div className="mt-4 mb-4 relative flex justify-center text-gray-600">
        <input
          type="search"
          name="serch"
          placeholder="Search by Position..."
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit">
          <FiSearch size={30} className="right-0" />
        </button>
      </div>
      <div className="min-h-screen pb-8 bg-gray-100 md:flex items-center md:justify-center">
        <JobListCard job={job} />

      </div>
    </>
  );
}

export default JobLists;


