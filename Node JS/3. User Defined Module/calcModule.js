// create user defined local module calc.js that exposes the following functions :
// add(a,b) , subtract(a,b), multiply(a,b), divde(a,b), squares(a), sum(a,b,c...)

// create a client application that invokes each of these methods 

exports.add=function(a,b){
    return a+b;
}

exports.subtract=function(a,b){
    return a-b;
}

exports.multiply=function(a,b){
    return a*b;
}

exports.div=function(a,b){
    if(b!==0){
        return a/b;
    }
    return -1;
}

exports.sqr=function(a){
    return a*a;
}

exports.sum=function(...args){
    // takes the array of arguments (args), iterates over each element, and adds them together to get the total sum. 
    // reduce() - it is a method for arrays in JavaScript that iterates over each element of the array, allowing you to perform an operation (such as summing up values) and accumulate a result.
    return args.reduce((acc,val)=>acc+val,0)
}