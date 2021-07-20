const getRandomUsers = require("./getRandomUsers");

describe("getRandomUsers tests:", () => {
  it("should return false or empty array if no users", () => {
    expect(getRandomUsers()).toBeFalsy();
  });

  it("should return second part of array if random number <=0.5", () => {
    const arr = ["1", "Lera", 2, "second", "part"];

    Math.random = jest.fn(() => 0.5);
    expect(getRandomUsers(arr)).toEqual(["second", "part"]);
  });

  it("should return first half of users if random number >0.5", () => {
    const userNames = ["Arina", "Lera", "Ivan", "Anton", "Ira", "Karina"];

    jest.spyOn(global.Math, "random").mockReturnValue(0.7);
    expect(getRandomUsers(userNames)).toEqual(["Arina", "Lera", "Ivan"]);
  });
});
