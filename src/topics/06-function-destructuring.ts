export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.00
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.00
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;
    const { tax, products } = options;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [Total, Tax] = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log(`Resultado: ${Total}, Tax: ${Tax}`);

export {};