function list(){
  this.listSize=0;
  this.pos=0;
  this.dataStore=[];
  this.find=find;
  this.clear=clear;
  this.toString=toString;
  this.insert=insert;
  this.append=append;
  this.remove=remove;
  this.front=front;
  this.end=end;
  this.prev=prev;
  this.next=next;
  this.length=length;
  this.currPos=currPos;
  this.moveTo=moveTo;
  this.getElement=getElement;
  this.contains=contains;
}
//给列表添加元素
function append(element){
  this.dataStore[this.listSize++]=element;
}
//从列表中查找元素
function find(element){
  for(var i=0;i<this.dataStore.length;i++){
    if(this.dataStore[i]==element){
      return i;
    }
  }
  return -1;
}
//从列表中删除元素
function remove(element){
  var findele=this.find(element);
  if(findele>-1){
    this.dataStore.splice(findele,1);
    this.listSize--;
    return true;
  }
  return false;
}
//列表中的元素数量
function length(){
  return this.listSize;
}
//显示列表元素
function toString(){
  return this.dataStore;
}
//列表插入元素
function insert(elemrnt,after){
  var insertPos=this.find(after);
  if(insertPos>-1){
    this.dataStore.splice(insertPos+1,0,element);
    this.listSize++;
    return true;
  }
  return false;
}
//清除列表元素
function clear(){
  delete this.dataStore;
  this.dataStore=[];
  this.listSize=this.pos=0;
}
//查询列表是否存在某个元素
function contains(element){
  for(var i=0;i<this.dataStore.length;i++){
    if(this.dataStore[i]==element){
      return true;
    }
  }
  return false;
}
//列表遍历
function front(){
  this.pos=0;
}
function end(){
  this.pos=this.listSize-1;
}
function prev(){
  if(this.pos>0){
    this.pos--;
  }
}
function next(){
  if(this.pos<this.listSize-1){
    this.pos++;
  }
}
function currPos(){
  return this.pos;
}
function moveTo(position){
  this.pos=position;
}
function getElement(){
  return this.dataStore[this.pos];
}
var names=new list();
names.append("1");
names.append("2");
names.append("3");
names.append("4");
names.append("5");
names.front();
console.log(names.getElement());
names.end();
console.log(names.getElement());
names.prev();
console.log(names.getElement());
// console.log(names.toString());
// console.log(names.toString());
