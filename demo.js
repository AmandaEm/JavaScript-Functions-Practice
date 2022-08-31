//Define an arrow fucntion that returns square of a number
const square (number) => number * number;


//Define a function that return the largest of two numbers 
function largerNum (number1, number2) {
   if (number1 > number2) {
       return number1
   } else { return number2
          }
}


// Define a function that returns the area of a circle after given a radius


function area(radius) {
    area =Pi * (r * r)
    return area
}

//Explain what is happening in the code below.

function kitchen(ing1, ing2, chefcb){
    return chefcb(ing1, ing2);
  }
  
  function pastaChef(ing1, ing2){
    return `I took ${ing1} and ${ing2} and I made you a 🍝`;
  }
  
  function pizzaChef(ing1, ing2){
     return `I took ${ing1} and ${ing2} and I made you a 🍕`;
  }

// console.log(kitchen('dough', 'sauce', pizzaChef));
// console.log(kitchen('dough', 'sauce', pastaChef));


In this code, function kitchen is a helper function for the function pastaCHef and function pizzaChef.
