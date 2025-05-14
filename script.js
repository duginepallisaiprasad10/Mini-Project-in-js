// data structure algorithums :-
// function isOdd(n){
//     return (n % 2 == 0);
// }
// let n = 77;
// if(isOdd(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
//  function isOdd(n){
//     return ( n % 3 == 0);
//  }
//  let n = 224;
//  if (isOdd(n)){
//     console.log("true");
//  } else{
//     console.log("false");
//  }

// bitwise and AND operator:-

// function isEven(n){
//     if (n%2 ==0){
//         return true;
//     } 
//     else{
//         return false;
//     }
// }
//  let n = 101;
//  if (isEven(n)){
//     console.log("true");
//  }
//  else{
//     console.log("false");
//  }
// function isOdd(n){
//     if (n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let n = 105;
// if (isOdd(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
//  bitwise shift operator:-

// function isEven(sum){
//     if (sum == ( sum >> 1) <<1)
//         return true;
//     else
//     return false;
// }
// let sum = 6;
// if (isEven(sum)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// function isOdd(add){
//     if (add == (add >> 1) << 1)
//         return true;
//     else
//     return false;
// }
// let add = 6;
// if (isOdd(add)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// multiplication:-

// function printTable(n){
//     for ( let i =1; i < 10; ++i)
//         console.log(n + " * " + i + "=" + n * i);
// }
// let n =12;
// printTable(n);

// Javascript program to print
// table of a number

// function printTable(n) { 
//     for (let i = 1; i <= 10; ++i)
//         console.log( n + " * " +i + " = " + n *  i);
// }
//     let n = 8; 
//     printTable(n);

// function printTable(n){
//     for (let i = 1; i <= 15; ++i)
//         console.log(n + " * " + i + " = " + n * i);
// }
// let n = 18;
// printTable(n);


// // function add(n){
// //     for (i = 1; i < 20; ++i)
// //         console.log(n + " *" + i + "="+ n *i);
// // }
// // let num = 19;
// // add(num);


// function table(n,i=1){
//     if(i ==12)
//         return;
//     console.log(n + "*"+ i +"="+ n*i);
//     i++;
//     table(n,i);
// }
// let n = 12;
// table(n);


// function printTable(n, i = 1) {
//     if (i == 11)// base case
//         return;
//     console.log(n + " * " + i + " = " + n * i);
//     i++;
//     printTable(n,i);
// }

// // Driver Code
// let n = 5;
// printTable(n);


// function tables(n,i=1){
//     if (i ==31)
//         return;
//     console.log(n + "*" + i + "=" + n*i);
//     i++;
//     tables(n,i);
// }
// let multiplication = 9;
// tables(multiplication);

// function add(n){
//     for(let i = 1; i <=15; ++i);
//     console.log(n + "*"+ i + "="+n*i);
// }
// let n=18;
// add(n);

// function isEven(n){
//     if(n % 2 == 0){
//         return true;
//         // console.log("true");
//     }
//     else{
//         return false;
//         // console.log("false");

//     }
// }
// let n =102;
// isEven(n);
// function isEven (n){
//     return n % 2==0;
// }
// let n = 100;
// if(isEven(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// function add(n){
//     // if (n ==(n >> 1 ) << 1)
//     if ( n %2== 0)
//     return true;
//     else;
//     return false;
// }
// let n = 11;
// if (add(n)){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// function tables(n){
//     for ( let i = 1; i <= 19; ++i){
//         console.log(n +  "*" + i + "=" + n *i);
//     }
// }
// let n = 23;
// tables(n);


// function printTable(n){
//     for ( let i =1; i < 10; ++i)
//         console.log(n + " * " + i + "=" + n * i);
// }
// let add =12;
// printTable(add);


// function table(n,i=1){
//     if( i==13)
//     return;
// console.log( n + "*"+i+"="+n*i);
//  i++;
//  table(n,i);
// }
// let num = 13;
// table(num);

// function tables(n,i=1){
//     if (i ==31)
//         return;
//     console.log(n + "*" + i + "=" + n*i);
//     i++;
//     tables(n,i);
// }
// let multiplication = 9;
// tables(multiplication);

// function multiplication(n,i=1){
//     if (i==16)
//         return;
//         console.log(n+"*"+i+"="+n*i);
//         i++;
//         multiplication(n,i);
    

// }
// let n = 14;
// multiplication(n); 



// stack =[]
// // push
// stack.append("a")
// stack.append("b")
// stack.append("c")

// print("stack:",stack)


stack = []

// # Push
stack.append('A')
stack.append('B')
stack.append('C')
print("Stack: ", stack)

// # Pop
element = stack.pop()
print("Pop: ", element)

// # Peek
topElement = stack[-1]
print("Peek: ", topElement)

// # isEmpty
// isEmpty = not bool(stack)
// print("isEmpty: ", isEmpty)

// # Size
print("Size: ",len(stack))

// #Python

