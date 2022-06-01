// import ipAddress from "./ip_address.txt";

export const isAuth = () => {
  const token = localStorage.getItem("accessToken");

  return !!token;
};

// export const getApiAddress = () => {
//   return getIp();
// };

// const getIp = async () => {
//   const ip = await await fetch(ipAddress).then((r) => r.text());
//   return ip;
// };
