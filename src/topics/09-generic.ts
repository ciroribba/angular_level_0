
export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hello World");
const amINumber = whatsMyType<number>(10);
const amIArray = whatsMyType<number[]>([1, 2, 3]);
const amIObject = whatsMyType<{name: string, age: number}>({name: "John", age: 30});

console.log(amIString, amINumber, amIArray, amIObject);