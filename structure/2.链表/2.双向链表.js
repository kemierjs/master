function Node(val) {
	this.prev = null
	this.val = val
	this.next = null
}

let l1 = new Node(1)
let l2 = new Node(2)
l1.next = l2
l2.prev = l1
let l3 = new Node(3)
l2.next = l3
l3.prev = l2
let l4 = new Node(4)
l3.next = l4
l4.prev = l3


function test(val) {
	let node = l1
	if (node.val === val && !node.next) {
		return null
	}
	while (node) {
		if (node.val === val) {
			if (!node.prev) {
				node.next.prev = null
				node=node.next
				return node
			} else if (node.next) {
				node.prev.next = node.next
				node.next.prev = node.prev
				// node = node.next
				return node
			} else {
				node.prev.next = null
				node=node.prev
				return node
			}
		}
		node = node.next
	}
	return l1
}
console.log(test(2))
