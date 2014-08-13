function listToTree(list){
  var i = 0, l, tree = {id: 0, children: []};
  function append(child, parent){
    var i = 0, l;
    parent.children = parent.children || [];
    if(child.pid == parent.id){
      parent.children.push(child);
      return;
    }
    for(i, l = parent.children.length; i<l; i++){
      arguments.callee(child, parent.children[i]);            
    }
  }
  for(i, l=list.length; i<l; i++){
    append(list[i], tree);
  }
  return tree;
}
