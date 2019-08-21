console.log("It works!");

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('hi!');
    }
}

// factory
function logging(value: boolean) {
    return value ? logged : () => { };
}

@logging(true)
class Car {

}

// advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

// multiple decorators
@logging(true)
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
// need to cast any class because it isn't recognizing the decorator function, yet
(<any>plant).print();

// method decorator
// property decorator
function editable(value: boolean) {
    return function (target: any, propName: string,
        descriptor: PropertyDescriptor) {

        descriptor.writable = value;
    }
}

function overwritable(value: boolean): any {
    return function (target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(true)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(true)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);

// parameter decorator

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);