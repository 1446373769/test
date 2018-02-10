function inserAfter(newElement,targetElement)//将一个新元素插入到现有元素的后面
{
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.inserbefor（newElement,targetElement.nextSubling);
	}
}