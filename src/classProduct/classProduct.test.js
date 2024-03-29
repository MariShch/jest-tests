const { defaultProduct, money } = require("../constants");
const Product = require("./classProduct");

describe("classProduct tests:", () => {
  it("should work with passed product and price", () => {
    const obj = new Product("melon", 7);

    expect(obj.title).toBe("melon");
    expect(obj.price).toBe(7);
  });

  it("it should add default product name and price if they are falsy", () => {
    const obj = new Product();

    expect(obj.title).toBe(defaultProduct);
    expect(obj.price).toBe(10);
  });

  it("getPrice method returns the value in the appropriate currency", () => {
    const obj = new Product("banana", 20);

    expect(obj.getPrice()).toBe(20 + money);
  });

  it("setPrice method sets the price of the product", () => {
    const obj = new Product("avocado");

    obj.setPrice(30);
    expect(obj.price).toBe(30);
  });

  it("setPrice method can't set price lower, then 10", () => {
    const price = 50;
    const obj = new Product("onion", price);

    obj.setPrice(3);
    expect(obj.price).toBe(price);
  });

  it("setPrice method throw error with falsy value:", () => {
    const obj = new Product("potato", 2);

    expect(() => {
      obj.setPrice(0);
    }).toThrow("Price should be defined");
  });
});
