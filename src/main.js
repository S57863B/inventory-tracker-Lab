import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import { calculateTax } from './utils/taxCalculator.js';
import { Product } from './models/Product.js';
import { sortByPrice } from './utils/sorter.js';
const laptop1 = new PhysicalProduct('SKU123', 'Gaming Laptop', 1000, 2.5);
const ebook = new DigitalProduct('SKU456', 'Office laptop', 20, 15);
let inventory = [laptop1, ebook];
ebook.applyDiscount(20);
inventory = sortByPrice(inventory);
console.log('-- INVENTORY REPORT --');
for (const item of inventory) {
    console.log(item.displayDetails());
    const finalPrice = calculateTax(item);
    console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}\n`);
}
//# sourceMappingURL=main.js.map