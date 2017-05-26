var animal= {
	name:"dog",
	color:"black"
}

animal
Object {name: "dog", color: "black"}
animal.name
"dog"
animal.color
"black"
animal['name']
"dog"


animal
Object {name: "dog", color: "black", legs: 4}
delete animal.name
true
animal
Object {color: "black", legs: 4}


var car = new Object();
undefined
car
Object {}
car.color="red"
"red"
car.brand="bmw"
"bmw"
car
Object {color: "red", brand: "bmw"}
car.brand
"bmw"
car.color
"red"

//method in objects
var animal ={
	name:"dog",
	age:function(a){
		console.log("age of dog is"+a)
	}
}


var animal ={
	name:"cat",
	age:function(a){
		console.log("age of "+this.name+a)
	}
}
animal.age(10)


var car ={
	wheel:4,
	sidemirror:2
}


var bmw = new car();
