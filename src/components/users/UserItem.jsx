import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="bg-gray-100 shadow-lg card compact side hover:bg-purple-400 hover:text-white rounded-lg h-24">
      <div className="flex items-center space-x-4 card-body">
        <div className="flex-shrink-0">
          <div className="avatar">
            <div className="rounded-full shadow cursor-pointer w-10 h-10 bg-yellow-400">
              <img src={avatar_url} alt="Profile" className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40 hover:text-yellow-300 text-blue-900 "
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
