const getDay = require("./getDay");
import days from "../constants";

test("Returns which day of the week today", () => {
  expect(getDay()).toBe(days[new Date().getDay()]);
});
