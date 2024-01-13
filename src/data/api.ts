import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (username: string) => {
  const results = await http.get(`/users/${username}`);
  return results.data;
};

export const getUserRepos = async (username: string) => {
  const results = await http.get(`/users/${username}/repos`);
  return results.data;
};
