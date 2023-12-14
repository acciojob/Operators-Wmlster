
let btn1=document.getElementById("calculate");
btn1.addEventListener("click",event1);

let btn2=document.getElementById("change_text");
btn2.addEventListener("click",event2);

function event1(){

let input1=document.getElementById("num1");
let input2=document.getElementById("num2");
let select=document.getElementById("operator");
let num1=input1.value;
let num2=input2.value;
let op=select.value;

let num=0;


if(op=='+')
{
	num=parseInt(num1)+parseInt(num2);
}
else if(op=='-')
{
	num=num1-num2;
}
else if(op=='*')
{
	num=num1*num2;
}
else
{
	num=num1/num2;
}
	let result=document.getElementById("result"); 
	result.innerHTML=num;

}

function event2(){
	let c1=document.getElementById("i1").innerText="Bye";
	let c2=document.getElementById("i2").innerText="Good Bye";
	let c3=document.getElementById("i3").innerText="To";;
	let c4=document.getElementById("i4").innerText="Your";;
	let c5=document.getElementById("i5").innerText="Class";;
	
}





