const showMessage = require("./showMessage");

test("showMessage should return alert with passed string", () => {
  global.alert = jest.fn();
  showMessage("text");
  expect(global.alert).toHaveBeenNthCalledWith(1, "text");
});
