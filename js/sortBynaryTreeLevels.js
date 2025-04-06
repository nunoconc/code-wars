function recursive (rootNode, list){
    if(!rootNode) {
        return list;
    }

    const left = rootNode.left?.value;
    const right = rootNode.left?.value;

    if(!!left){
        list.push(left);
    }

    if(!!right) {
        list.push(right);
    }

    recursive(rootNode.left, list);
    recursive(rootNode.right), list;


    return list;
}


function treeByLevels (rootNode) {
    return recursive(rootNode, []);
}