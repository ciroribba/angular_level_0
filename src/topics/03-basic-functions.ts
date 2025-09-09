
function addNumbers(a: number, b: number): number {
    return a + b;
};

const addNumbers2 = (a: number, b: number): string => {
    return `${a + b}`;
};

const result: number = addNumbers(1, 2);
const result2: string = addNumbers2(1, 2);
console.log(result);
console.log(result2);

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
};

const multiplyResult: number = multiply(10);
console.log(multiplyResult);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
};

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
};

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('HP: ', this.hp);
    }
};

healCharacter(strider, 10);
strider.showHp();

export {};