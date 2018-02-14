/*
	二叉树前序遍历算法

	重点： 打印当前节点的值，再打印当前节点的左子树的值，最后打印右子树的值
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
		this.inorderTraverseNode (this.tree, callback) // callback负责处理节点数值
	}

	inorderTraverseNode (node, callback) {
		if (node !== null) {  // 这里判断跳出递归
			this.inorderTraverseNode(node.left, callback)
			callback(node.key)
			this.inorderTraverseNode(node.right, callback)
		}
	}

	preorderTraverse (callback) {
		this.preorderTraverseNode (this.tree, callback)
	}

	preorderTraverseNode (node, callback) {
		if (node !== null) {
			callback(node.key)
			this.preorderTraverseNode(node.left, callback)
			this.preorderTraverseNode(node.right, callback)
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

binaryTree.preorderTraverse(callback)



// 遍历整个世界，只为找到你
for (let you of worlds) {

	// 当我发现你是我的灵魂伴侣时,
	if (you === 'soul mate') {

		// 那么你就是我心中的另一半
		myHeart['sigother'] = you
	}
}
