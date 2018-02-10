//从文件中读取文本内容，按照换行符分成不同行，然后保存到数组arr,同时利用trim去除空格；
function readFileCreateArr(){
  var arr=read(film.txt).split("\n");
  for(i=0;i<arr.length;i++){
    arr[i]=arr[i].trim();
  }
  return arr;
}
//将数组movie中的元素保存到列表中
var movie=readFileCreateArr();
var movieList=new List();
for(var i=0;i<movie.length;i++){
  movieList.append(movie[i]);
}
//显示所有元素
function displayList(list){
  for(list.front();list.currPos<list.length;list.next()){
    console.log(list.getElement());
  }
}
