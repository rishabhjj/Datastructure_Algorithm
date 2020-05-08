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

  function countLeaf(root) {
    try {
      if (root.left === null && root.right === null) {
        return 1;
      }
      let leftCount = countLeaf(root.left);
      let rightCount = countLeaf(root.right);
      let totalCount =  leftCount + rightCount;
      if (totalCount == 2) {
        console.log(root.data);
      }
      return totalCount;
    } catch (e) {
      throw e;
    }
  }
  
  countLeaf(tree.root);