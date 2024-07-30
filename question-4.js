function sortProductsByPrice(products) {
  let n = products.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (products[i - 1].price > products[i].price) {
        [products[i - 1], products[i]] = [products[i], products[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
