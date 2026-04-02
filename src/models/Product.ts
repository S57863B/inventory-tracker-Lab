class Product {
    constructor(
        public sku: string,
        public name: string,
        public price: number
    ) {}

    displayDetails(): string {
        return `[${this.sku}] ${this.name} - ${this.price}`;
    }

    getPriceWithTax(): number {
        return this.price;
    }
}

export = Product;