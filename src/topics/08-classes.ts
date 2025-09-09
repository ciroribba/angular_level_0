interface Address {
  street: string;
  country: string;
  city: string;
}

// export class Person{
//     public name?: string;
//     public address?: Address;

//     constructor(name: string, address: Address){
//         this.name = name;
//         this.address = address;
//     }

// }

export class Person {
  constructor(
    public name: string,
    private address: Address = { 
        street: "", 
        country: "", 
        city: "" }
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, {street: 'Siempre Viva 123', country: 'USA', city: 'NY'});
//   }
// }

export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) { }
}

const personPeter = new Person("Peter Parker", {street: 'Main St', country: 'USA', city: 'NY'});

const ironman = new Hero("Ironman", 45, "Tony Stark", personPeter);

console.log(ironman);
