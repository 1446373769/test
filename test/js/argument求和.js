function sum(argument) {
	var result=0;
	for(var i=0;i<argument.length;i++){
		result+=argument[i];
	}
	return result;
}
console.log(sum(1,2,3));
