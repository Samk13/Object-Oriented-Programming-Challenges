// Object Oriented Programming: Use a Constructor to Create Objects
// Here's the Bird constructor from the previous challenge:

// function Bird() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
//   // "this" inside the constructor always refers to the object being created
// }

// let blueBird = new Bird();
// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results.

// Now blueBird has all the properties defined inside the Bird constructor:

// blueBird.name; // => Albert
// blueBird.color; // => blue
// blueBird.numLegs; // => 2
// Just like any other object, its properties can be accessed and modified:

// blueBird.name = 'Elvira';
// blueBird.name; // => Elvira

// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  // Add your code below this line
  
  let hound = new Dog('Byggie','Brown');

  console.log(hound instanceof Dog);
  
  let ownProps = [];
  for (let property in hound) {
      if (hound.hasOwnProperty(property)){
          ownProps.push(property);
      }
  }

  Dog.prototype.iscool = true;

  if (hound.constractor === Dog){
      return console.log('it\'s' + true);
      
  } else {
      console.log(false);
      
  }

console.log(ownProps);

console.log(hound.iscool);

console.log(Dog.prototype.isPrototypeOf(hound));


console.log(
typeof Dog.prototype
);
console.log
(Object.prototype.isPrototypeOf(Dog.prototype));

function Animal(){};

Animal.prototype = {
    constractor : Animal,
    eat: function (){
        console.log('num num num');  
    }
}
function Dog(){};
Dog.prototype = Object.create(Animal.prototype);

let beagel = new Dog();

console.log(beagel.eat());

// ChildObject.prototype = Object.create(ParentObject.prototype);
// Then the ChildObject received its own methods by chaining them onto its prototype:

// ChildObject.prototype.methodName = function() {...};




// Use Closure to Protect Properties Within an Object from Being Modified Externally


function Bird() {
    let weight = 15;
    this.getWeight = function(){
      return weight;
    }
  };
  
  
  let bird = new Bird();
  
  console.log(
  
  bird.getWeight()
  );

  