export const isAuth = () => {
  const token = localStorage.getItem("accessToken");

  return !!token;
};
