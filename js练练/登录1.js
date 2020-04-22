var Obox1=document.getElementsByTagName("input")[0];
var Obox2=document.getElementsByTagName("input")[1];
var Obox3=document.getElementsByTagName("input")[2];
Obox3.onfocus=function(){
	Obox1.style.borderColor="hotpink";
	Obox2.style.borderColor="hotpink";
}
Obox3.onblur=function(){
	Obox1.style.borderColor="";
	Obox2.style.borderColor="";
}
