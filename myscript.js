var disables = disableMPR();
function disableMPR (){
if(document.getElementsByClassName("js-issue-title")[0].textContent.indexOf("WIP") <= -1){
	var elements = document.getElementsByClassName("btn btn-primary js-merge-branch-action");
	for (var i = 0; i < elements.length; i++) {
	elements[i].disabled =false;
	}
}
if (document.getElementsByClassName("js-issue-title")[0].textContent.indexOf("WIP") > -1) {
	var elements = document.getElementsByClassName("btn btn-primary js-merge-branch-action");
	for (var i = 0; i < elements.length; i++) {
	elements[i].disabled =true;
	}
}
}
window.setInterval(function() {disableMPR();}, 1000);