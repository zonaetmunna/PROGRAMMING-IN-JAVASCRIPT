const globalVariable='hello' //global scope

function myFunction(){
    console.log(globalVariable); //global scope access here access at function
}
console.log(globalVariable) //global scope access outside of function

myFunction()