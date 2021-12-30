class CircleQueue {
	front = 0
	rear = 0
	maxSize = 0
	arr = []
	
	constructor(length) {
		this.maxSize = length+1
		this.arr = new Array(this.maxSize)
	}
	
	
	isFill() {
		return (this.rear + 1) % this.maxSize === this.front
	}
	
	isEmpty() {
		return this.rear === this.front
	}
	
	add(val) {
		if (this.isFill()) {
			throw new Error('队列已满')
		}
		this.arr[this.rear] = val
		this.rear = (this.rear + 1) % this.maxSize
	}
	
	get() {
		if (this.isEmpty()) {
			throw new Error('队列是空的')
		}
		let result = this.arr[this.front]
		this.front = (this.front + 1) % this.maxSize
		return result
	}
	
	
	toString() {
		for (let i = this.front; i < this.front + this.size(); i++) {
			console.log('arr[%d]=%d',i % this.maxSize,this.arr[i % this.maxSize])
		}

	}
	
	size() {
		return (this.rear - this.front + this.maxSize) % this.maxSize
	}
}

let circleQueue = new CircleQueue(4)
circleQueue.add(1)
circleQueue.add(2)
circleQueue.add(3)

circleQueue.get()
circleQueue.add(4)
circleQueue.add(5)

circleQueue.toString()
