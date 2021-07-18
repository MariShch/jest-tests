import days from "../constants";

export const getDay = () => {
  return days[new Date().getDay()];
};

module.exports = getDay;
