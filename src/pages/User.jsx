import { useEffect, useContext } from "react";
import GithubContext from "../Context/Github/GithubContext";
import { useParams, Link } from "react-router-dom";
import { FaCode, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import Spinner from "../components/layout/Spinner";
import ReposList from "../components/repos/ReposList";

function User() {
  const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext);
  const { username } = useParams();

  useEffect(() => {
    getUser(username);
    getUserRepos(username)
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full lg:w-10/12 pl-20">
        <div className="mb-4 flex justify-start">
          <Link
            to="/"
            className="text-white btn btn-ghost bg-black hover:text-black hover:bg-gray-300 transition-all delay-200 ease-in-out rounded-r-full rounded-l-full w-44 h-12 flex justify-center items-center font-bold"
          >
            Back To Search
          </Link>
        </div>


        <div className="flex flex-col md:flex-row mb-8 md:gap-8 ">
          <div className="mb-6 custom-card-image md:mb-0   rounded-lg  ">
            <div className="shadow-l rounded-lg card">
              <img
                src={avatar_url}
                width={"100%"}
                className="  rounded-2xl "
                alt="profile of user"
              />
              <div className="justify-end card-body relative bottom-20 left-5 flex flex-col gap-y-2">
                <h1 className="mb-0 text-white card-title font-black text-lg">
                  {name}
                </h1>
                <p className="flex-grow-0 text-white font-bold">{login}</p>
              </div>
            </div>
          </div>

          <div className="flex-grow  w-full">
            <div className="mb-6 ">
              <div className="  ">
              <h1 className="text-3xl card-title flex font-bold">
                {name}
                <div className="py-2.5 ml-2 mr-1 badge badge-success font-sans font-semibold text-white  bg-cyan-700 px-3 rounded-full h-6 text-sm w-14 flex justify-center items-center relative ">
                  {type}
                </div>
                
                {hireable && (
                  <div className="py-2.5 mx-1 badge badge-info  ">Hireable</div>
                )}
              </h1>

              </div>
              <p>{bio}</p>
              <div className="mt-4 card-actions  flex">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline border border-black w-44  flex justify-center items-center h-14 rounded-r-full rounded-l-full "
                >
                  VISIT GITHUB PROFILE
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-mg bg-base-100 stats  flex justify-between ">
              {location && (
                <div className="stat px-10">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value font-bold">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value font-bold">
                    <a href={`${blog}`} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value font-bold border-l-2">
                    <a
                      href={`https:///twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-2xl bg-base-100 stats flex flex-wrap  justify-between px-5  ">
          <div className="stat pr-5 flex w-56 justify-between   text-lg font-bold items-center border-black border-r-[1px] ">
            <div className="flex flex-col  ">
              <div className="pr-5 stat-title">Followers</div>
              <div className="pr-5 text-3xl stat-value md:text-4xl">
                {followers}
              </div>
            </div>
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
          </div>

          <div className="stat flex w-56 justify-between   text-lg font-bold  items-center border-black border-r-2 pr-5">


            <div className="flex flex-col ">

              <div className="pr-5 stat-title">Following</div>
              <div className="pr-5 text-3xl stat-value md:text-4xl">
                {following}
              </div>

            </div>
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>


          </div>



          <div className="stat flex w-56 justify-between   text-lg font-bold  items-center border-black border-r-2 pr-5">

            <div className="">
              <div className="pr-5 stat-title">Public Repos</div>
              <div className="pr-5 text-3xl stat-value md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat-figure text-secondary">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
          </div>

          <div className="stat w-56 flex ">

            
<div className="flex flex-col justify-between gap-4   text-lg font-bold  items-center  ">
            <div className="pr-5 stat-title">Public Gists</div>
            <div className="pr-5 text-3xl stat-value md:text-4xl">
              {public_gists}
            </div>

            </div>


            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>

          </div>
        </div > 

        <ReposList repos={repos}  />
      </div>

    </>
  );
}

export default User;




