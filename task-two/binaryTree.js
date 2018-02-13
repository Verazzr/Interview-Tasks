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

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]

let binaryTree = new BinaryTree()
let result = {}
for (let val of nodes) {
	result = binaryTree.insert(val)
}

console.log(result)
