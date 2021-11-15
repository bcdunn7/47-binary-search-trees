class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		if (this.root === null) {
			this.root = new Node(val)
			return this;
		}
		let current = this.root;

		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = new Node(val);
					return this;
				} else current = current.left;
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = new Node(val);
					return this;
				} else current = current.right;
			} else current = current.right
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, node = this.root) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}

		if (val < node.val) {
			if (node.left === null) {
				node.left = new Node(val);
				return this;
			}
			this.insertRecursively(val, node.left)
		}
		else if (val > node.val) {
			if (node.right === null) {
				node.right = new Node(val);
				return this;
			}
			this.insertRecursively(val, node.right)
		}
		else this.insertRecursively(val, node.right); 
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (!this.root) return;
		let current = this.root;
		while (current) {
			if (val === current.val) {
				return current;
			} else if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else current = current.right;
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (!this.root) return;

		if (current === null) return undefined;
		else if (val < current.val) return this.findRecursively(val, current.left);
		else if(val > current.val) return this.findRecursively(val, current.right);
		else return current;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder(node = this.root, visited=[]) {

		function dfsPreHelper(node) {
			visited.push(node.val);
			if (node.left) dfsPreHelper(node.left);
			if (node.right) dfsPreHelper(node.right);
		}
		dfsPreHelper(node)

		return visited;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder(node = this.root, visited=[]) {

		function dfsPreHelper(node) {
			if (node.left) dfsPreHelper(node.left);
			visited.push(node.val);
			if (node.right) dfsPreHelper(node.right);
		}
		dfsPreHelper(node)

		return visited;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder(node = this.root, visited=[]) {

		function dfsPreHelper(node) {
			if (node.left) dfsPreHelper(node.left);
			if (node.right) dfsPreHelper(node.right);
			visited.push(node.val);
		}
		dfsPreHelper(node)

		return visited;

	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs(val, visited=[]) {
		let queue = [this.root];
	
		while (queue.length) {
		  	let node = queue.shift();
	
		  	visited.push(node.val)
	
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}

		return visited;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {

	}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {

	}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {
		
	}
}

module.exports = BinarySearchTree;
