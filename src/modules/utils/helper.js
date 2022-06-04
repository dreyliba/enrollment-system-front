import ipAddress from "./ip_address.txt";

export const isAuth = () => {
  const token = localStorage.getItem("accessToken");

  return !!token;
};

export const API = () => {
  return fetch(ipAddress)
    .then((res) => res.text())
    .then((res) => {
      return res;
    });
};
