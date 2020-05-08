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
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(4);
console.log(tree);

function iterativeInorder(root) {
  try {
    const stack = []; 
    while (1) {
      while(root) {
        stack.unshift(root);
        root = root.left;
      }
      if (!stack || !stack.length) {
        break;
      }
      let root = stack.shift();
      console.log(root.data);
      root = root.right;
    }
    } catch (e) {
      throw e;
  }
}

function iterativePreOrder(root) {
  try {
    let root1 = root;
    const stack = [];
    while (1) {
      while(root1) {
        console.log(root1.data);
        stack.unshift(root1);
        root1 = root1.left;
      }
      if (!stack || !stack.length) {
        break;
      }
      let root1 = stack.shift();
      root1 = root1.right;
    }
    } catch (e) {
      throw e;
  }
}

iterativeInorder(tree.root)