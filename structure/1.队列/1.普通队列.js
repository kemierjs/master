class ArrQueue {
	front = 0
	rear = 0
	maxSize = 0
	arr = []
	
	constructor(maxSize) {
		this.maxSize = maxSize
		this.arr = new Array(maxSize)
	}
	
	// 判断队列是否满
	isFill() {
		return this.rear === this.maxSize
	}
	
	// 判断队列是否为空
	isEmpty() {
		return this.rear === this.front
	}
	
	// 向队列中添加一个元素
	add(val) {
		if (this.isFill()) {
			throw new Error('队列已满')
		}
		this.arr[this.rear++] = val
	}
	
	// 从队列中获取一个元素
	get() {
		if (this.isEmpty()) {
			throw new Error('队列是空的')
		}
		return this.arr[this.front++]
	}
	
	// 查看队首元素的值
	getFirst() {
		if (this.isEmpty()) {
			throw new Error('队列是空的')
		}
		return this.arr[this.front]
	}
	
	// 打印队列
	toString() {
		for (let i = this.front; i < this.rear; i++) {
			console.log('arr[%d]=%d',i,this.arr[i ])
		}
		console.log()
	}
}

let arrQueue = new ArrQueue(3)
arrQueue.add(1)
arrQueue.add(2)
arrQueue.add(3)

arrQueue.get()
arrQueue.get()

arrQueue.toString()
