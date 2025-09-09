let skills: string[] = ['bash', 'counter', 'healing'];

interface Character { // Interface is a way to define a contract in our code
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

//interface no ocupan espacio en el codigo final, se eliminan

const characterJhon: Character = {
  name: 'John',
  hp: 100,
  skills,
}

console.log({characterJhon});

export {};