import Reevalidate from "ree-validate";
import moment from "moment";

export const Revalidate = (value) => new Reevalidate(value);

export const isAuth = () => {
  const token = localStorage.getItem("accessToken");

  return !!token;
};

export const schoolYearOptions = () => {
  const now = parseInt(moment().format("YYYY"));

  const years = [];
  for (let index = now + 2; index > 2016; index--) {
    years.push(`${index - 1}-${index}`);
  }

  return years;
};

export const levelOptions = () => {
  const level = ["ALS"];
  for (let index = 11; index <= 12; index++) {
    level.push(index);
  }

  return level;
};

export const handleErrorResponse = (err) => {
  const response =
    (err && err.response && err.response.data && err.response.data) || {};

  if (response.errors && typeof response.errors === "object") {
    let errors = [];
    for (const key in response.errors) {
      if (Object.hasOwnProperty.call(response.errors, key)) {
        if (response.errors[key] && response.errors[key][0]) {
          errors = [...errors, response.errors[key][0]];
        }
      }
    }
    return errors.join("<br />");
  }

  if (response.message) {
    return response.message;
  }

  return err.message;
};
