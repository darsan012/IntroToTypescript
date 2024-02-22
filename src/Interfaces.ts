// learning about interfaces in the typescript
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'Darshan',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    }
}

console.log(me);