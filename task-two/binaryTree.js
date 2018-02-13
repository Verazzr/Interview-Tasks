/*
	js实现二叉排序树

	重点： 数组、对象等的按值传递与数字、字符串还是有所不同的。
	数字、字符串是把值直接复制进去了，而数组、对象是把变量地址复制进去的。
*/

// es5构造函数实现

function BinaryTree () {
	let Node = function (key) {
		this.key = key    // 节点数值
		this.left = null  // 表示左子节点
		this.right = null // 表示右子节点
	}

	let root = null

	let insertNode = function (node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				insertNode(node.right, newNode)
			}
		}
	}

	this.insert = function (key) {
		let newNode = new Node(key)

		if (root === null) {
			root = newNode
		} else {
			insertNode(root, newNode)
		}
		return root
	}
}


// es6 class实现

class Node {
	constructor (key) {
		this.key = key
		this.left = null
		this.right = null
	}
}

class BinaryTree {
	constructor () {
		this.tree = null
	}

	insert (key) {
		let newNode = new Node(key)
		if (this.tree === null) {
			this.tree = newNode
		} else {
			this.insertNode(newNode, this.tree)
		}
	}

	insertNode (newNode, node) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode
			} else {
				this.insertNode(newNode, node.left)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				this.insertNode(newNode, node.right)
			}
		}
	}
}

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]

let binaryTree = new BinaryTree()
for (let val of nodes) {
	binaryTree.insert(val)
}

console.log(binaryTree.tree)
