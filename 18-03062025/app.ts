// let productName: string = "string";
// let productPrice: number = 1600;
// let isInStock: boolean = true;

// function calculateDiscount(price: any, discountRate: number): number {
// return price - (price (discountRate / 100))
// }

// let discountedPrice = calculateDiscount(1200, 10)

// console.log(discountedPrice);

interface Product {
  name: string;
  price: number;
  isInStock: boolean;
}

let newProduct: Product = {
  name: "laptop",
  price: 1800,
  isInStock: true,
};
