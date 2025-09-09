export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'John'
}

const passenger2: Passenger = {
    name: 'Ciro',
    children: ['Maria', 'Juan']
}

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren2 = passenger.children!.length; // This is not recommended because it can cause errors its not null safe
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

printChildren(passenger);
printChildren(passenger2);