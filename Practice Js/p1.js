// console.log("Hello");
// name="ABCD"
// console.log(typeof(name));
// let a=5;
// console.log(`The value of a is : ${a}`);
// // let b=prompt("Enter the value of b");
// // console.log(b);
// let msg = "    Hello    ";
// console.log(msg);
// let msg1= msg.trim();
// console.log(msg1);

// let str="Ilovecoding";
// console.log(str);
// str.replace("love","do");
// console.log(str);
// console.log(str.replace("love","do"));

// let num=[1,2,3,4,5,6,7,8];
// console.log(num.slice(-2,-1));


// let  num2=[11,12,13];
// num.splice(5,0,55,66);
// console.log(num);
// console.log(num.sort());
// let a1=[1,2];
// let a2=[1,2];
// let a3=a1;

// console.log(a1==a2);
// console.log(a1==a3);

// arr5=[[1,2],[3,4]];
// console.log(arr5[0][1]);

// let  aa1=["Apple", "banana","orange","pineapple"];

// for (fruit of aa1){
//     console.log(fruit);
// }

// for(char1 of "helloworld"){
//     console.log(char1);
// }

// // Nested For of Loop

// let hero=[["ironman","spiderman"],["thor","superman","flash"]];

// for(a of hero){
//     for (b of a ){
//         console.log(b);
//     }
// }


// // Js objects

// let student={
//     name:"Kartik",
//     age:20,
//     city:"Delhi",
//     marks:88
// };




// // get values

// console.log(student["name"]);
// console.log(student.age);


// // Add / update / Delete 

// student.city="Mumbai";
// student.gender="Female";
// student.marks="A";
// delete student.age;


// console.log(student);


// // Object of objects

// let classinfo={
//     aman:{
//         age:20,
//         marks:66
//     },
//     kartik:{
//         age:21,
//         marks:84
//     }
// };

// console.log(classinfo);
// console.log(classinfo.aman);
// console.log(classinfo.kartik.marks);



// // Array of Objects

// let arrr=[
//     {name:"Aman", age:20},

//     {name:"Kartik",age:21}

// ];

// console.log(arrr);
// console.log(arrr[0]);
// console.log(arrr[0].name);
// console.log(arrr[0].age);




// JS Math Object


console.log(Math.PI);
console.log(Math.E);
console.log(Math.random());
console.log(Math.pow(2,4));
console.log(Math.abs(-5));
console.log(Math.floor(4.8545));
console.log(Math.ceil(4.1545));


// Random integers from 1-10


let n=Math.random()*10+1;
let m=Math.floor(n);
console.log(m);


function hello(){
    console.log("Hello");
}

hello();


function sum(a,b){
   console.log(a+b);
}


sum(1,5);


function printnames(name1,name2){
    console.log(name1);
    console.log(name2);
}

printnames("kartik", "Rohan");

function sum1(a,b){
    return a+b;
}

let s=sum(1,6);


const ss=function(a,b){
    return a+b;
}

ss(5,8);

console.log(ss);



// high order Functions 


function multi(fun,n){
    for(let i=0;i<n;i++){
        fun();
    }
}

let abc=function(){
    console.log("Hello");
}

multi(abc,4);
 

multi(function() {console.log("method2");},3);



function printh(fun,n){
    while(n--){
        fun();
    }
}

let aa=function(){
    console.log("AAAAA");
}

printh(aa,3);





function summ(func , n){
    for(let i=0;i<n;i++){
        func();
    }

}

let abb=function(){
    console.log("Hello World");
}

summ(abb,5);


console.log(abb);


// Return a function   


function sub(){
    return function(a,b){
           return a-b;
    }
}

let xyy=sub();
console.log(xyy);
console.log(xyy(5,4));





// methods that can be performed on an obejct


const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(4,6));
console.log(calculator.sub(4,6));


// This 


let student={
    name:"Kartik",
    age:20,
    math:80,
    eng:88,
    getavg(){
        console.log(this);
        console.log(this.eng);
        console.log(this.math);
        let avg=(this.eng+this.math)/2;
        console.log("Average marks are : " , avg);
    }

}

student.getavg();



//  Arrow Functions 

const sum2=(a,b)=>{
 console.log(a+b);
}

sum2(5,66);

const mul2=(a,b)=>(
    a*b
)

let x=mul2(2,4);
console.log(x);



// //  setTimeout      -   execute only once

// setTimeout(()=>{
//     console.log("Hello");
// },4000);                          // print hello after 4 sec and stop 
  

// // setInterval       -- executes infinitely

// let si=setInterval(()=>{
//     console.log("World");
// },2000);

// // Stopping condition

// setTimeout(()=>{
//     clearInterval(si);
//     console.log("Interval cleared");
// },6000);



// This with arrow function

console.warn("This with Arrow Function")


const student1={
    marks:95,
    prop:this,
    getmarks1:function(){
        console.log("Normal Function");
        console.log(this);
    },
    getmarks2:()=>{
        console.log("Arrow Function");
        console.log(this);
    },
    get1:function(){
        setTimeout(()=>{
            console.log("Arrow function in setTimeout");
            console.log(this);
        },2000);
    },
    get2:function(){
        setTimeout(function(){
            console.log("Normal Function in setTimeout  ,  window because the calling object is setTimeout and setTimeout is Window object");
            console.log(this);
        }),2000;
    }
}

student1.getmarks1();
student1.getmarks2();
student1.get1();
student1.get2();

