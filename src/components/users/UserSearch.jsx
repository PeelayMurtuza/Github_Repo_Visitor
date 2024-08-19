import { useState, useContext } from "react";
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/alert/AlertContext";
import { FaGithub } from "react-icons/fa";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something", "Error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      {users.length === 0 && (
        <div
          className="relative mb-4 overflow-hidden rounded-2xl h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://blog.crew.work/content/images/2022/11/5-Steps-to-quickly-find-best-software-engineers-on-Github.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center text-white">
            <h1 className="mb-4 text-5xl font-extrabold">Github Repository Visitor </h1>
            <p className="text-lg">Search Real Time Data and Visits their Repository in less then a second </p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
        <div className="flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-16 px-5 rounded-full text-black bg-gray-200 input input-lg"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0.5 right-0 h-[60px] w-24 bg-gray-300 btn btn-lg rounded-r-full"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div className="flex-shrink-0 flex flex-col md:flex-row items-center">
            <button
              className="mt-4 text-white btn btn-ghost btn-lg bg-neutral hover:text-black bg-black md:mt-0 md:ml-4 w-24 h-16 rounded-full hover:bg-gray-300 "
              onClick={clearUsers}
            >
              Clear
            </button>
            <h2 className="mt-4 md:mt-0 text-xl font-semibold md:ml-4">
              Total Users: {users.length}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
