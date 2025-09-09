import { type Product, taxCalculation,  } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.00
    },
    {
        description: 'iPad Air',
        price: 250.00
    }
]

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log(`Resultado: ${total}, Tax: ${tax}`);
