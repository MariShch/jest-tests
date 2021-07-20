const { users } = require("../constants");
const getAdultUsers = require("./getAdultUsers");

describe("getAdultUsers tests:", () => {
  it("should returns users age > 18", () => {
    expect(getAdultUsers(users).every((user) => user.age > 18)).toBe(true);
  });

  it("should return correct number of users with age > 18", () => {
    expect(getAdultUsers(users).length).toBe(5);
  });

  it("should return empty array on empty data", () => {
    expect(getAdultUsers()).toHaveLength(0);
  });

  it("returns correct all users age > 18", () => {
    const users = [{ age: 15 }, { age: 4 }, { age: 24 }, { age: 44 }];

    expect(getAdultUsers(users)).toEqual([{ age: 24 }, { age: 44 }]);
  });
});
