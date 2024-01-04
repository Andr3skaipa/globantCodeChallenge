class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let arrayTree = [];
class binaryTree {
    constructor() {
        this.root = null;
    }

    invertLeaves(node) {
        if (node === null) {
            return;
        }

        if(node.left !== null && node.right !== null){
            this.invertLeaves(node.left);
            this.invertLeaves(node.right);
            arrayTree.push(node.left.value);
            arrayTree.push(node.right.value);
            let aux = node.left;
            node.left = node.right;
            node.right = aux;
        }
    }

    invertBinaryTree() {
        this.invertLeaves(this.root);
        arrayTree.push(this.root.value);
    }
}

const tree = new binaryTree();
tree.root = new node(4);
tree.root.left = new node(2);
tree.root.right = new node(7);
tree.root.left.left = new node(1);
tree.root.left.right = new node(3);
tree.root.right.right = new node(9);
tree.root.right.left = new node(6);

tree.invertBinaryTree();
console.log(arrayTree.reverse());

//Output tree: 4729631
