//javascript functions here

function changeSize(selection){
	var i;
	switch(selection.selectedIndex){
		case 0:
			i = 4;
			break;
		case 1:
			i = 5;
			break;
		case 2:
			i = 6;
			break;
		case 3:
			i = 7;
			break;
		case 4:
			i = 8;
			break;
	}
	buildBoard(i);
}



function buildBoard(n){
	document.getElementById("board").innerHTML = "";
	document.getElementById("test").innerHTML = "";
}
