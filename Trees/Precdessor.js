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

  function pre(root) {
    try {

    } catch (e) {
      
    }
  }