class Node {
    constructor({value, left = null, right = null}) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class BinarySearchTree {
    constructor(root =  null) {
        this.root = root;
    }

    add(value) {
        let newNode = new Node({value})
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.addNode(newNode, this.root);
        }
    }

    addNode(newNode, node) {
        if (newNode.value <= node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.addNode(newNode, node.left);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.addNode(newNode, node.right);
            }
        }

    }

    view() {
        const root = this.root;
        const treeDiv = document.getElementById("tree");
        if (root !== null) {
            const treeHtml = this.treeToHtml(root);
            treeDiv.innerHTML = treeHtml;
        }
    }

    treeToHtml(tree) {
        if (tree === null) {
            return "";
        } else {
            return `<div class="tree">
                        <div class="tree__leaf">${tree.value}</div>
                        <div class="tree__subtree-container">
                            <div class="tree">
                                ${this.treeToHtml(tree.left)}
                            </div>
                            <div class="tree">
                                ${this.treeToHtml(tree.right)}
                            </div>
                        </div>
                    </div>`;
        }
    }
}

let bst = new BinarySearchTree();

document.addEventListener("keydown", (event) => {
    if (event.keyCode !== 32) return;
    let randomNum = Math.floor(Math.random() * (100 - (-100)) + -100);
    bst.add(randomNum);
    bst.view();
});