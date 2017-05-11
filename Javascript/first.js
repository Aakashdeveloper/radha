string 
number
boolen
null
undefiend

str a = "hjjjh"
int a =10
bool a = true

var a ="radha"
var a =10
var a = true


var a =15
if(a%2==0){
	console.log("number is even "+a)
} else if(a%3 ==0){
	console.log(a+ " number is divisible by 3 ")
} else if(a%5 ==0){
	console.log(a+ " number is divisible by 5 ")
}
 else{
	console.log("number is odd "+a)
}

//////OR////////////////////

var a =15
if(a%2==0 || a%3 ==0){
	console.log("its ok")
}else{
	console.log("not ok")
}

////////////And/////////////////
if(a%3==0 && a%5==0){
	console.log("its ok")
}else{
	console.log("not ok")
}

var a =10
if(a%2==0 && a%3 !=0){
	console.log("its ok")
}else{
	console.log("not ok")
}

/////////////Array///////////
var a = [1,2,3,4,56,45,561];
var a = ["dv","dd","dsvdf","df"];

var a=[1,3,"xcv","dsv",434,true]
var a = [1,2,3,[8,9,7,[5,2,4]],4,56,45,561];

//////////////////////////////split////
document.URL
"https://www.youtube.com/watch?v=ucMJu94UpTM"
var a =document.URL;
undefined
a
"https://www.youtube.com/watch?v=ucMJu94UpTM"
var b = a.split("/")
undefined
b
(4) ["https:", "", "www.youtube.com", "watch?v=ucMJu94UpTM"]
b[3]
"watch?v=ucMJu94UpTM"

var b = a.split('/')
undefined
b.length
6
b.length-1
5
var b = a.split('/')[b.length-1]
undefined
b
"watch?v=ucMJu94UpTM"