import { Product } from './Product.js';
export declare class PhysicalProduct extends Product {
    private weight;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formattedWeight(): string;
    displayDetails(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map