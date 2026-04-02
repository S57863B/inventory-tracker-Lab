import { Product } from '../models/Product.js';
export function sortByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}
//# sourceMappingURL=sorter.js.map