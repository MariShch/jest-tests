const showMessage = require("./showMessage");

describe("showMessage tests:", () => {
  let now;
  let text;

  beforeEach(() => {
    now = Date.now();
    global.alert = jest.fn((x) => (text = x));
  });

  it("returns alert with passed value", () => {
    showMessage("Simple text");
    expect(text).toBe("Simple text");
  });

  test("returns alert with passed value", () => {
    showMessage(now);
    expect(text).toBe(now);
  });

  test("returns alert with passed value", () => {
    showMessage(now);
    expect(text).toBe(now);
  });
});
