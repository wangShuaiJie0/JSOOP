let star = {
    name: '王XX',
    age:24,
    phone: '18623742962'
}

let agent = new Proxy(star, {
    get:function (target, key) {  
        if(key === 'phone') {
            return '15666698741'
        }
        if(key === 'price') {
            return 12000
        }
        return target[key]
    },
    set:function (target, key, val) {  
        if(key === 'customPrice') {
            if(val < 100000) {
                throw new Error('价格太低')
            }else {
                target[key] = val
                return true
            }
        }
    }
})

console.info(agent.name)
console.info(agent.age)
console.info(agent.phone)
console.info(agent.price)

agent.customPrice = 900
console.info(agent.customPrice)