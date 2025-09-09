function myDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
        print() {
            console.log('New property is: ', this.newProperty);
            console.log('Hello is: ', this.hello);
        }
    }
}

@myDecorator
export class SuperClass {
    public myProperty: string = 'Property';

    print() {
        console.log('My property is: ', this.myProperty);
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);