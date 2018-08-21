class Circle {
    draw() {
        console.info('画一个圆')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder(circle) {
        console.info('设置红色边框')
    }
}

let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
dec.draw()