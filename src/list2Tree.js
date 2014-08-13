var Tree = function(){
    this.root = new Node(0);
    //find a node very quickly
    this.nodes = {};
};
Tree.prototype.getRoot = function(){
    return this.root;   
};

var Node = function(value){
    //this.value = value;
    $.extend(true, this, value);
    this.children = [];
};
Node.prototype.setValue = function(value){
    //this.value = value;
    $.extend(true, this, value);
    
};
Node.prototype.setParent = function(parent){
    this.parent = parent;
};
Node.prototype.appendChild = function(childNode){
    this.children.push(childNode);
    childNode.setParent(this);
};
Node.prototype.isLeaf = function(){
    return (this.children.length == 0);
};

function listToTree (list){
    var tree = new Tree();
    var root = tree.getRoot();
    for(var i = 0; i < list.length; ++i){
        var newNode = new Node(list[i]);
        if(list[i].pid == 0){
            root.appendChild(newNode);
            //tree.nodes[newNode.value.id] = newNode;
            tree.nodes[newNode.id] = newNode;
        }else{
            if(!tree.nodes[list[i].pid]){
                throw 'Something wrong with the order of your data';
            }
            //tree.nodes[newNode.value.id] = newNode;
            tree.nodes[newNode.id] = newNode;
            tree.nodes[list[i].pid].appendChild(newNode);
        }
    }
    return tree;
}
