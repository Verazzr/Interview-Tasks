/*
	二叉树的中序遍历算法

	重点： 从左子树开始输出key，然后到输出跟节点，最后输出右子树
*/


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

	inorderTraverse (callback) {
		this.inorderTraverseNode (this.tree, callback)
	}

	inorderTraverseNode (node, callback) {
		if (node !== null) {  // 这里判断跳出递归
			this.inorderTraverseNode(node.left, callback)
			callback(node.key)
			this.inorderTraverseNode(node.right, callback)
		}
	}
}

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]

let binaryTree = new BinaryTree()

for (let val of nodes) {
	binaryTree.insert(val)
}

function callback (key) {
	console.log(key)
}

binaryTree.inorderTraverse(callback)
