/*
	二叉树后序遍历算法

	重点： 先打印左子树， 再打印右子树， 最后打印当前节点
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

	insert (key) {  // 构造插入
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

	inorderTraverse (callback) {  // 中序遍历
		this.inorderTraverseNode (this.tree, callback) // callback负责处理节点数值
	}

	inorderTraverseNode (node, callback) {
		if (node !== null) {  // 这里判断跳出递归
			this.inorderTraverseNode(node.left, callback)
			callback(node.key)
			this.inorderTraverseNode(node.right, callback)
		}
	}

	preorderTraverse (callback) {  // 前序遍历
		this.preorderTraverseNode (this.tree, callback)
	}

	preorderTraverseNode (node, callback) {
		if (node !== null) {
			callback(node.key)
			this.preorderTraverseNode(node.left, callback)
			this.preorderTraverseNode(node.right, callback)
		}
	}

	postorderTraverse (callback) { // 后序遍历
		this.postorderTraverseNode (this.tree, callback)
	}

	postorderTraverseNode (node ,callback) {
		if (node !== null) {
			this.postorderTraverseNode(node.left, callback)
			this.postorderTraverseNode(node.right, callback)
			callback(node.key)
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

binaryTree.postorderTraverse(callback)
