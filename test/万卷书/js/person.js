//用于选中左侧导航，右侧导航随之切换。
var liNum=$(".mainList li a");
var list=$(".list");
    for(var i=0;i<liNum.length;i++){

  liNum[i].onclick=function(){
  var index=$(this).parent().index();
      $(".list").removeClass("dis");
      $(".list").eq(index-1).addClass("dis");
  }
}
