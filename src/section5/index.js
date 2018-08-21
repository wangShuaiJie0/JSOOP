class SingleObject {
    login() {
        console.info('login...')
    }
}

SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }

        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 = SingleObject.getInstance()
obj2.login()

console.info('obj1 === obj2', obj1 === obj2)

let obj3 = new SingleObject()
obj3.login()
console.info('obj1 === obj3', obj1 === obj3)