console.log("It works!");
// getters and setters
class Plant {
    // don't normally start with underscore, this is just for showing example
    private _species: string = "default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'default';
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "ab";
console.log(plant.species);
plant.species = "abcd";
console.log(plant.species);

// static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// abstract classes
abstract class Project {
    projectName: string = 'default';
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('super IT project');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'something else';
console.log(right.name);

