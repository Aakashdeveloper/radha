function Dog(breed){
	this.breed = breed;
    this.hair = "awsm"




}

Dog.prototype.bark = function(){
	console.log("aaaaaa")
}

 var buddy = new Dog("gold");

 var snoopy = new Dog("pug")