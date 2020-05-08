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


  function ZigZag(root) {
    try {
      let stack1 = [], stack2 = [];
      stack1.unshift(root);
      while (stack1.length || stack2.length) {
        while(stack1.length) {
          let pop1 = stack1.shift();
          console.log(pop1.data);
          if (pop1.left) {
            stack2.unshift(pop1.left);
          }
          if (pop1.right) {
            stack2.unshift(pop1.right);
          }
        }
        while(stack2.length) {
          let pop2 = stack2.shift();
          console.log(pop2.data)
          if (pop2.right) {
            stack1.unshift(pop2.right);
          }
          if (pop2.left) {
            stack1.unshift(pop2.left);
          }
        }
      }
    } catch (e) {
      throw e;
    }
  }

  ZigZag(tree.root)