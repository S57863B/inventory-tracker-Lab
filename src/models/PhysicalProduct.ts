import { Product } from './Product.js';

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  override getPriceWithTax(): number {
    return this.price * 1.10; 
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} (Weight: ${this.formattedWeight})`;
  }
}