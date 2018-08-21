@testDec
class Demo {

}

function testDec(target) {
    target.isDec = true
}

alert(Demo.isDec)




// import {readonly} from 'core-decorators'

// class Person {
//     @readonly
//     name() {
//         return 'zhang san'
//     }
// }

// let p = new Person()
// alert(p.name())


import {
    deprecate
} from 'core-decorators'

class Person {
    @deprecate('下个版本弃用')
    name() {
        return 'zhang san'
    }
}

let p = new Person()
alert(p.name())