// learning about interfaces in the typescript
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// interface and types are similar with subtle differences
// use types when creating shape of values
// you can extend interfaces
interface isPerson {
    height: number;
}

// now the interface has height variables aswell
const me: isPerson = {
    name: 'Darshan',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    },
    height: 6
}

console.log(me);

interface isExtendedPerson extends isPerson {
    skinType: string;
    race: string;
} 

let asianPerson: isExtendedPerson = {
    name: 'Joma',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    },
    height: 6,
    skinType: 'dark',
    race: 'asian'
}

console.log(asianPerson);