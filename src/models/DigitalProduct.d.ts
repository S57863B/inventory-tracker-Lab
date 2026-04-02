import { Product } from './Product.js';
import type { DiscountableProduct } from './DiscountableProduct.js';
export declare class DigitalProduct extends Product implements DiscountableProduct {
    private fileSize;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get formattedFileSize(): string;
    displayDetails(): string;
    applyDiscount(percent: number): void;
}
//# sourceMappingURL=DigitalProduct.d.ts.map