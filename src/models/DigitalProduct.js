import { Product } from './Product.js';
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    displayDetails() {
        return `${super.displayDetails()} (Size: ${this.formattedFileSize})`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map