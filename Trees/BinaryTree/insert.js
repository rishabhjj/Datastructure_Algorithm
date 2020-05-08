class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
}
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    insert(data) {
      const root = this.root;
      if (root === null) {
        this.root = new Node(data)
        return;
      } else {
        function addAtAppropriatePosition(root) {
          if (data < root.data) {
            if (root.left === null) {
              root.left = new Node(data);
              return;
            } else {
              return addAtAppropriatePosition(root.left);
            }
          } else if (data > root.data) {
            if (root.right === null) {
              root.right = new Node(data);
              return;
            } else {
              return addAtAppropriatePosition(root.right);
            }    
          } else {
            return null;
          }
        }
        addAtAppropriatePosition(root);
      }
    }
    search(data) {
      let root = this.root;
      while (root) {
        if (root.data === data) {
          return true;
        }
        if (root.data > data) {
          root = root.left;
        } else {
          root = root.right
        }
      }
      return false;
    }
    minimumElement() {
      let root = this.root;
      while(root.left) {
        root = root.left;
      }
      return root.data;
    }
    maximumElement() {
      let root = this.root;
      while(root.right) {
        root = root.right;
      }
      return root.data;
    }
    // height : Number of edges/link from root to leaf - Maximum of right and left subtree + 1
    heightOfTree(root) {
      if (root === null) {
        return 0;
      }
      let leftHeight = this.heightOfTree(root.left);
      let rightHeight = this.heightOfTree(root.right);
      return 1 + Math.max(leftHeight, rightHeight)

    }

    isBST(root, min, max) {
      if (root === null) {
        return true;
      }
      if (root.data <= min || root.data > max) {
        return false;
      }
      return this.isBST(root.left, min, root.data) && this.isBST(root.right, root.data, max)
    }
  }
  
  function sameTree(root1, root2) {
    try {
      if (root1 === null && root2 === null) {
        return true;
      }
      if (root1 === null || root2 === null) {
        return false;
      }
      return root1.data === root2.data && sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)

    } catch (e) {
      throw e;
    } 
  }

  function breadthFirst(root) {
    try {
      if (root === null) {
        return;
      }
      const queue = [];
      queue.push(root);
      while(queue.length) {
        const data = queue.shift()
        console.log(data.data)
        if (data.left) queue.push(data.left);
        if (data.right) queue.push(data.right)
      }
    } catch (e) {
      throw e;
    }
  }

  function preOrder(root) {
    try {
      if (root === null) {
        return;
      }
      console.log(root.data);
      preOrder(root.left);
      preOrder(root.right)
    } catch (e) {
      throw e;
    }
  }

  function inOrder(root) {
    try {
      if (root === null) {
        return;
      }
      preOrder(root.left);
      console.log(root.data);
      preOrder(root.right)
    } catch (e) {
      throw e;
    }
  }

  function postOrder(root) {
    try {
      if (root === null) {
        return;
      }
      preOrder(root.left);
      preOrder(root.right)
      console.log(root.data);
    } catch (e) {
      throw e;
    }
  }

  const binaryTree = new BinaryTree();
  const binaryTree1 = new BinaryTree();
  binaryTree.insert(10);
  binaryTree.insert(5);
  binaryTree.insert(7);
  binaryTree.insert(3);
  binaryTree.insert(30);
  console.log(binaryTree.search(30))
  console.log(binaryTree.isBST(binaryTree.root, Number.MIN_VALUE, Number.MAX_VALUE))
  console.log(binaryTree.heightOfTree(binaryTree.root))
  console.log(sameTree(binaryTree.root, binaryTree1.root))
  breadthFirst(binaryTree.root)
  console.log("-----")
  preOrder(binaryTree.root);
  console.log("-----")

  postOrder(binaryTree.root)

  console.log("-----")
  inOrder(binaryTree.root);
