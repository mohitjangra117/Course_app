console.log("Hello");
name="ABCD"
console.log(typeof(name));
let a=5;
console.log(`The value of a is : ${a}`);
// let b=prompt("Enter the value of b");
// console.log(b);
let msg = "    Hello    ";
console.log(msg);
let msg1= msg.trim();
console.log(msg1);

let str="Ilovecoding";
console.log(str);
str.replace("love","do");
console.log(str);
console.log(str.replace("love","do"));

let num=[1,2,3,4,5,6,7,8];
console.log(num.slice(-2,-1));


let  num2=[11,12,13];
num.splice(5,0,55,66);
console.log(num);
console.log(num.sort());
let a1=[1,2];
let a2=[1,2];
let a3=a1;

console.log(a1==a2);
console.log(a1==a3);

arr5=[[1,2],[3,4]];
console.log(arr5[0][1]);

let  aa1=["Apple", "banana","orange","pineapple"];

for (fruit of aa1){
    console.log(fruit);
}

for(char1 of "helloworld"){
    console.log(char1);
}

// Nested For of Loop

let hero=[["ironman","spiderman"],["thor","superman","flash"]];

for(a of hero){
    for (b of a ){
        console.log(b);
    }
}