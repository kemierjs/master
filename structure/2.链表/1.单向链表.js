class Node {
	constructor(val) {
		this.next=null
		this.val = val
	}
}
class SingleLinkedList {

	// 创建一个节点
	constructor(val) {
		this.head = new Node(val)
	}
	
	// 添加一个节点
	add(newNode) {
		let node = this.head
		while (true) {
			if (!node.next) {
				node.next = newNode
				break
			}
			node = node.next
		}
	}
	
	// 按照顺序添加节点
	addBySort(newNode) {
		let node = this.head
		while (true) {
			if (!node.next) {
				break
			}
			if (newNode.val < node.next.val) {
				break
			}
			if (newNode.val === node.next.val) {
				throw new Error('节点已存在')
			}
			node = node.next
		}
		newNode.next = node.next
		node.next = newNode
	}
	
	// 删除最后一个节点
	remove() {
		let node = this.head
		if (!node.next) {
			this.head = null
			return
		}
		while (true) {
			if (!node.next.next) {
				node.next = null
				break
			}
			node = node.next
		}
	}
	
	// 遍历一个节点
	list() {
		let node = this.head
		if (!node) {
			return
		}
		while (true) {
			if (!node.next) {
				console.log(node.val)
				break
			}
			console.log(node.val)
			node = node.next
		}
	}
}

let singleLinkedList = new SingleLinkedList(4)
//测试用例一
// singleLinkedList.add(new Node(5))
// singleLinkedList.add(new Node(6))
// singleLinkedList.add(new Node(7))
// singleLinkedList.remove()
// singleLinkedList.remove()
// singleLinkedList.list()
//测试用例二
singleLinkedList.addBySort(new Node(7))
singleLinkedList.addBySort(new Node(5))
singleLinkedList.addBySort(new Node(6))
singleLinkedList.list()
