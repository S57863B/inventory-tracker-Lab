import { Product } from './Product.js';

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private fileSize: number
  ) {
    super(sku, name, price);
  }

  override getPriceWithTax(): number {
    return this.price;
  }

  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} (Size: ${this.formattedFileSize})`;
  }
}