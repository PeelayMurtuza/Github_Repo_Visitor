import React from "react";
import { PropTypes } from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return <div className="mb-2 rounded-md card hover:bg-secondary bg-gray-200 flex flex-col  gap-10 ">
    <div className="card-body hover:text-white hover:bg-pink-400 p-5 flex flex-col rounded-lg ">

        <h3 className="mb-2 text-xl font-semibold ">
            <a href={html_url}>
                <FaLink className="inline mr-1"/>
                {name}
            </a>
        </h3>

       <p className="mb-3">{description}</p>

        <div className="flex gap-5 ">
            <div className="mr-2 badge badge-info badge-lg flex bg-blue-400 rounded-full  justify-center items-center p-1 w-16 h-6  ">
                <FaEye className="mr-2"/>
                {watchers_count}
            </div>
             <div className="mr-2 badge badge-success badge-lg flex rounded-full  bg-green-700 justify-center items-center p-1 w-16 h-6  ">
                <FaStar className="mr-2"/>
                {stargazers_count}
            </div>
             <div className="mr-2 badge badge-error badge-lg flex rounded-full  bg-red-400 justify-center items-center p-1 w-16 h-6  ">
                <FaInfo className="mr-2"/>
                {open_issues}
            </div>
             <div className="mr-2 badge badge-warning badge-lg flex rounded-full bg-yellow-400  justify-center items-center p-1 w-16 h-6 ">
                <FaUtensils className="mr-2"/>
                {forks}
            </div>
        </div>
    </div>

  </div>;
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;