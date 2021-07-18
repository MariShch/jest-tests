const { defaultProduct, money } = require("../constants");

class Product {
  constructor(title, price) {
    this.title = title || defaultProduct;
    this.price = price || 10;
  }

  getPrice() {
    return this.price + money;
  }

  setPrice(value) {
    if (!value) {
      throw new Error("Price should be defined");
    }

    if (value > 10) {
      this.price = value;
    }
  }
}

module.exports = Product;
