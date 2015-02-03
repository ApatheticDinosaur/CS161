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
	var boardString = "";
	var isBlue = 1;
	for(i=0;i<n;i++){
		boardString += "<tr>";
		for(j=0;j<n;j++){
			if(isBlue==1){
				boardString += "<td class='blue' />";
			}else{
				boardString += "<td class='yellow' />";
			}
			isBlue=isBlue*-1;

		}
		if(n%2==0) isBlue=isBlue*-1;
		boardString += "</tr>"
	}
	document.getElementById("board").innerHTML = boardString;
}
