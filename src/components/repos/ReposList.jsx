import React from 'react'
import { PropTypes } from 'prop-types';
import RepoItem from './RepoItems';

function ReposList({repos}) {
  return (
    <div className='rounded-lg shadow-2xl card bg-base-100 mt-5  p-7 '>
        <div className="card-body px-5 py-5  flex flex-col gap-4 ">
            <h2 className='my-4 text-3xl font-bold card-title'>
                Latest Respositories
            </h2>
            {repos.map((repo)=>(
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired,
};


export default ReposList