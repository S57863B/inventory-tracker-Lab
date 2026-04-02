import { Product } from './Product.js';
import type { DiscountableProduct } from './DiscountableProduct.js';

export class DigitalProduct extends Product implements DiscountableProduct {
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

  applyDiscount(percent: number): void {
    this.price = this.price - (this.price * (percent / 100));
  }
}