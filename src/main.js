import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
import { calculateTax } from './utils/taxCalculator.js';
import { Product } from './models/Product.js';
const laptop1 = new PhysicalProduct('SKU123', 'Gaming Laptop', 1000, 2.5);
const laptop2 = new DigitalProduct('SKU456', 'Office laptop', 20, 15);
const inventory = [laptop1, laptop2];
console.log('-- INVENTORY REPORT --');
for (const item of inventory) {
    console.log(item.displayDetails());
    const finalPrice = calculateTax(item);
    console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}\n`);
}
//# sourceMappingURL=main.js.map