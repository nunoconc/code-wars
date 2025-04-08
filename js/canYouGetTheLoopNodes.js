function loop_size(node){
    let currentNode = node;
    let lastNode = null;
    let counter = 0;
    const list = [];

    while(currentNode.next !== null) {
        list.push(currentNode);

        lastNode = currentNode;
        currentNode = currentNode.next;
        lastNode.next = null;
        ++counter;
    }

    while (counter > 0) {
        if(currentNode === list.shift()){
            break;
        }
        --counter;
    }

    return counter;
}

class Node {
    next;

    setNext(node){
        this.next = node;
    }
}

const A = new Node(), B = new Node();
A.setNext(B); B.setNext(B);

console.log(loop_size(A));