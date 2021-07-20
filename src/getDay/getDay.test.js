const getDay = require("./getDay");
import days from "../constants";

test("getDay should return which day of the week today", () => {
  expect(getDay()).toBe(days[new Date().getDay()]);
});
