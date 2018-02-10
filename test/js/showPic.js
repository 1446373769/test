function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var sourse=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",sourse);
	if(document.getElementById("description"))
	{
	var text=whichpic.getAttribute("title");
	var description=document.getElementById("description");
	description.firstChild.nodeValue=text;
	}
	return true;
}
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}
function preparegegallery()
{
	if(!document.getElementsByTagName)//检查
	{
		return false;
	}
	if(!document.getElementById)//检查
	{
		return false;
	}
	if(!document.getElementById("imagegallery"))//检查id
	{
		return false;
	}
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");//遍历事件函数
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function(){
			showPic(this);
			return !showPic(this);
		}
	}
}
window.onload=preparegegallery;
function addLoadEvent(func)//onload事件加载函数
{
	var oldonload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else
	{
		window.onload=function()
		{
			oldonload();
			func();
		}
	}
}
