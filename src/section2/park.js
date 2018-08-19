
class Car {
    constructor(num) {
        this.num = num
    }
}

class Camera{
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

class Screen{
    show(car, inTime) {
        console.info('车牌号', car.num)
        console.info('停车时间', Date.now() - inTime)
    }
}

class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }
    in(car) {
        const info = this.camera.shot(car)
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        this.carList[car.num] = info
    }
    out(car) {
        // 获取信息
        const info = this.carList[car.num]
        // 停车位清空
        const place = info.place
        place.out()
        // 显示时间
        this.screen.show(car, info.inTime)
        // 清空记录
        delete this.carList[car.num]
    }

    emtpyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有${floor.emptyPlaceNum()}个空闲车位`
        }).join('\n')
    }
}

class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places || []
    }

    emptyPlaceNum() {
        let num = 0
        this.places.forEach(p => {
            if(p.empty) {
                num += 1
            }
        })
        return num
    }
}

class Place {
    constructor() {
        this.empty = true
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}


// 初始化停车场

const floors = []

for(let i = 0; i< 3; i++) {
    const places = []
    for(let j = 0; j< 100; j++) {
        places[j] = new Place()
    }

    floors[i] = new Floor(i+1, places)
}

const park = new Park(floors)

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.info('第一辆车进入')
console.info(park.emtpyNum())
park.in(car1)

console.info('第二辆车进入')
console.info(park.emtpyNum())
park.in(car2)

console.info('第一辆车离开')
park.out(car1)
console.info('第二辆车离开')
park.out(car2)


console.info('第三辆车进入')
console.info(park.emtpyNum())
park.in(car3)
console.info('第三辆车离开')
park.out(car3)

 