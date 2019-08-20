console.log("It works!");
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}
console.log(complex.output(true));

// type alias example
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [666, 7.77, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}
console.log(complex2.output(true));

// union types
let myRealAge: number | string = 27;
console.log(myRealAge);
myRealAge = "27";
console.log(myRealAge);

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
console.log(typeof finalValue);

// never
function neverReturns(): never {
    throw new Error('an error!');
}

try {
    neverReturns();
} catch (err) {
    console.log(err);
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
// this used to throw an error in TypeScript 2.0, but doesn't anymore....
let canThisBeAny = null;
canThisBeAny = 12;

// type bind this:
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };

type BankAccount = { money: number, deposit: (value: number) => void };
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

type Person = { name: string, bankAccount: BankAccount, hobbies: string[] };
let myself: Person = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

