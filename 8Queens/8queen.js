/** Javascript for the 8queens assignment CS 161
@Author			- Thorpe, David-Eric 3554
@Author			- 
@Author			- 
@Class  		- Programing Project, CS161-2
@Date modified	- 2nd Feb 2015
*/

/* Changes the size of board based on radial selection
* @param selection - is the item from the list selected.
*/
function changeSize(selection){
	buildBoard(selection.selectedIndex + 1);
}

/* Clear and constructs a board of specified size
* @param n - is the size of board to be constructed.
*/
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
