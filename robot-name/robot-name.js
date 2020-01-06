// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
export let arrayNames = [];

export class Robot { 

    constructor() {
        let name;
        do {
            name = this.createName()
        } while (arrayNames.includes(name))
        this._name = name;
        arrayNames.push(name);
    }

    reset() {
        //let previousName = this.name;
        do {
            name = this.createName()
        } while (arrayNames.includes(name))
        this._name = name;
        arrayNames.push(name);
        //arrayNames.splice(arrayNames.indexOf(previousName), 1)
    }

    get name() {
        return this._name
    }
    randomLetter() { 
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    randomNumber() {
        return (Math.floor(Math.random() * 10)).toString();
    }

    createName() {
        return  this.randomLetter() + 
                this.randomLetter() + 
                this.randomNumber() + 
                this.randomNumber() + 
                this.randomNumber()
    }
}

Robot.releaseNames = () => { 
    function releaseNames() {
        Robot.nameList = [''];
    }
};

