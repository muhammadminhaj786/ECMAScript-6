//var let const
//var
//1) var is function scope
//2) var can be re declared and re initilize

function foo(){
    var num = 10;
    //var only access in function
    console.log(num)
}
foo()
// console.log(num)
var num1 = 12
var num1 = 20
console.log(num1)

//let
//1) let is block scope
//2) let can't br re declared but let can be re initilize

let num2 = 15
// let num2 = 20
let num3;
num3 = 5
console.log(num3)

if(true){
    //let only access in this block
    let num4 = 22
    console.log(num4)
}
// console.log(num4)

//const
//1) const is block scope
//2) const neither re declared or nor re initilize

const num5 = 4
// const num5 = 5
// num5 = 6
// console.log(num5)

for (var i =0; i<3;i++){
    const num6 = 7
    //const only access in this block
    console.log(num6)
}

// console.log(num6)