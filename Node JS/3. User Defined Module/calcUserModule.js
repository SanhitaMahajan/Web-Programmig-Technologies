var cal= require('./calcModule')
console.log("Addition : ", cal.add(10,20))
console.log("Subtraction : ", cal.subtract(10,5))
console.log("Multiplication : ", cal.multiply(24,15))

var division = cal.div(10,5)
if(division===-1){
    console.log("Division by zero not possible")
}
else{
    console.log("Division : ", division)
}
console.log("Squares : ", cal.sqr(5))

console.log("Sum is ",cal.sum(15,15,24,23))