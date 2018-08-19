class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is: ${this.name}, age: ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age, number){
        super(name, age)
        this.number = number
    }

    study() {
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 12, '001')
xiaoming.study()
xiaoming.speak()

let xiaohong = new Student('xiaohong', 12, '002')
xiaohong.study()
xiaohong.speak()