<!DOCTYPE html>
<html>
<body>

<input type="button" onclick="add()" value="click me">

Enter your name: <input type="text" id="fname" onblur="myFunction()">

<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function myFunction() {
    var x = document.getElementById("fname");
    //document.getElementsByClassName("")
    x.value = x.value.toUpperCase();
}
function add(){
	alert(" i am here");
}
function add1(){
	var a = document.getElementById().val;
	var b = document.getElementById().val;
	alert(a+b)
}
</script>

</body>
</html>

