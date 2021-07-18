const { users } = require("../constants");
const getAdultUsers = require("./getAdultUsers");

describe("getAdultUsers tests:", () => {
  it("returns correct all users age > 18", () => {
    expect(getAdultUsers(users).every((user) => user.age > 18)).toBe(true);
  });

  it("it returns correct number of users with age > 18", () => {
    expect(getAdultUsers(users).length).toBe(5);
  });

  it("should return false on empty data", () => {
    expect(getAdultUsers().length).toBeFalsy();
  });

  it("returns correct all users age > 18", () => {
    const users = [{ age: 15 }, { age: 4 }, { age: 24 }, { age: 44 }];
    expect(getAdultUsers(users)).toEqual([{ age: 24 }, { age: 44 }]);
  });
});
