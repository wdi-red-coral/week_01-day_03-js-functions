const youRock = function (name) {
    console.log('you rock' + " " + name)
  }

youRock("sami")
//solution
//you rock sami



const square = function (number) {
    console.log(number * number)
  }

square(2)
 //solution
 //4
 

 const cube = function (number) {
    console.log(number * number * number)
  }


cube(2)
 //solution
 //8


const toTheFourth = function (number) {
    console.log(number * number * number * number)
  }



toTheFourth(2)
//solution
// 16

const fizzBuzz= function (num){
	if(num % 3 === 0){
		return "Fizz"
    } else if(num % 5 === 0){
		return "Buzz"
	} else if(num % 3 === 0 && num % 5 === 0){
		return "FizzBuzz"
	} else {
		return num 
	}
}
fizzBuzz(3)
//solution
//"Fizz"

const fizzBuzz= function (num){
    if(num % 3 === 0 && num % 5 === 0){
      return "FizzBuzz"
  } else if(num % 5 === 0){
      return "Buzz"
  } else if(num % 3 === 0){
      return "Fizz"
  }  else {
      return num 
  }
}

fizzBuzz(15)
//solution
//"FizzBuzz"

