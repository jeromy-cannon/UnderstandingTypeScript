class MyMap<T> {
    keyMap: string[];
    valueMap: Array<T>;

    constructor() {
        this.keyMap = [];
        this.valueMap = [];
    }

    setItem(key: string, item: T) {
        this.keyMap.push(key);
        this.valueMap.push(item);
    }

    getItem(key: string): T {
        for (let counter = 0; counter < this.keyMap.length; counter++) {
            if (this.keyMap[counter] === key) {
                return this.valueMap[counter];
            }
        }
        return null;
    }

    clear() {
        this.keyMap = [];
        this.valueMap = [];
    }

    printMap() {
        console.log("MyMap[");
        for (let counter = 0; counter < this.keyMap.length; counter++) {
            console.log("  { key: '" + this.keyMap[counter] + "', value: " + this.valueMap[counter] + "},");
        }
        console.log("]");
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();