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
var data = [{"id":23261,"pid":0,"level":1,"name":"护肤"},{"id":23266,"pid":0,"level":1,"name":"彩妆"},{"id":23268,"pid":23266,"level":2,"name":"面部底妆"},{"id":23269,"pid":23266,"level":2,"name":"唇部"},{"id":23270,"pid":23266,"level":2,"name":"眼部"},{"id":23271,"pid":0,"level":1,"name":"彩妆香水"},{"id":23272,"pid":23269,"level":3,"name":"唇膏/口红"},{"id":23417,"pid":23261,"level":2,"name":"面部护理"},{"id":23419,"pid":23261,"level":2,"name":"眼部护理"},{"id":23421,"pid":23261,"level":2,"name":"身体护理"},{"id":23422,"pid":23417,"level":3,"name":"洁面/洗面奶"},{"id":23427,"pid":23417,"level":3,"name":"面膜"},{"id":27784,"pid":23417,"level":3,"name":"精华液"},{"id":28338,"pid":23421,"level":3,"name":"足膜"},{"id":28646,"pid":23419,"level":3,"name":"眼部精华霜"},{"id":28649,"pid":23417,"level":3,"name":"乳液"},{"id":31785,"pid":23421,"level":3,"name":"沐浴"},{"id":32097,"pid":23271,"level":2,"name":"男士香水"},{"id":32098,"pid":23271,"level":2,"name":"女士香水"},{"id":32099,"pid":23271,"level":2,"name":"中性香水"},{"id":32153,"pid":23268,"level":3,"name":"BB霜"},{"id":32157,"pid":23419,"level":3,"name":"眼霜"},{"id":32158,"pid":23270,"level":3,"name":"睫毛膏"},{"id":32159,"pid":23270,"level":3,"name":"眼线"}];
console.log(listToTree(data));