import { createContext, useReducer } from "react";
import githubReducer from "./GitubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com"; // Set the base GitHub API URL

export const GithubProvider = ({ children }) => {
  const initialState = {
    loading: false,
    repos: [],
    user: {},
    users: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);

    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (username) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${username}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const getUserRepos = async (username) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "updated",
      per_page: 15,
    });
    const response = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}`);

    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // Clear users from state
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
