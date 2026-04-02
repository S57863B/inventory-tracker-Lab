import { Product } from './Product.js';
export declare class DigitalProduct extends Product {
    private fileSize;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get formattedFileSize(): string;
    displayDetails(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map