class ReadImg {
    constructor(filename) {
        this.filename = filename
        this.loadFromDisk()
    }
    display() {
        console.info('display...' + this.filename)
    }
    loadFromDisk() {
        console.info('loading...' + this.filename)
    }
}


class ProxyImg {
    constructor(filename) {
        this.realImg = new ReadImg(filename)
    }
    display() {
        this.realImg.display()
    }
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display()