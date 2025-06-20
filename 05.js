const purchases = [
  {id: 1, item: 'Laptop', price: 1200, category: 'Electronics'},
  {id: 2, item: 'Coffee Maker', price: 100, category: 'Home Appliances'},
  {id: 3, item: 'Smartphone', price: 800, category: 'Electronics'},
  {id: 4, item: 'Blender', price: 50, category: 'Home Appliances'},
  {id: 5, item: 'Headphones', price: 150, category: 'Electronics'},
  {id: 6, item: 'Microwave', price: 200, category: 'Home Appliances'},
  {id: 7, item: 'Tablet', price: 300, category: 'Electronics'},
  {id: 8, item: 'Toaster', price: 30, category: 'Home Appliances'},
  {id: 9, item: 'Smartwatch', price: 250, category: 'Electronics'},
  {id: 10, item: 'Air Fryer', price: 180, category: 'Home Appliances'}
]

const purchasesByCategory = purchases.reduce((accumulator, currentPurchase) => {
  // Check if the category already exists in the accumulator
  if (accumulator[currentPurchase.category]) {
    // If it exists, add the current purchase to the array for that category
    accumulator[currentPurchase.category].push(currentPurchase);
  } else {
    // If it doesn't exist, create a new array with the current purchase
    accumulator[currentPurchase.category] = [currentPurchase];
  }
  return accumulator;
}, {});

console.log(purchasesByCategory);
