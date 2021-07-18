const { users } = require("../constants");
const getRandomUsers = require("./getRandomUsers");

describe("getRandomUsers tests:", () => {
  it("should return false or empty array if no users", () => {
    expect(getRandomUsers()).toBe(false);
    expect(getRandomUsers([])).toEqual([]);
  });

  it("should return some number of users if passed argument isn't falsy", () => {
    expect(getRandomUsers(users).length).toBeGreaterThan(0);
  });
});
