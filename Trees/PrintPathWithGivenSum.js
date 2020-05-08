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
  tree.insert(5);
  tree.insert(14);
  tree.insert(3); 
  tree.insert(7);
  tree.insert(2); 
  tree.insert(4);
  tree.insert(12); 
  tree.insert(16);

console.log(tree);

  let sum = 0;
  let stack = [];
  function getSumPath(root) {
    try {
      if (root === null) {
        return;
      }
      sum = sum + root.data;
      console.log(root.data)
      stack.unshift(root.data);
      if (sum === 22) {
        console.log('suu')
        return;
      }
      getSumPath(root.left);
      getSumPath(root.right);
      sum = sum - root.data;
       stack.shift();
    } catch (e) {
      throw e;
    }
  }

  getSumPath(tree.root)