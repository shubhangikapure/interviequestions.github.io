// let a=[];
// let b=[];
// console.log(a==b)
// console.log(a===b) output :false false

// question 2

// let a=[];
// let b=a;
// console.log(a==b);
// console.log(a===b); output:true true

// question 3
// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]); output:true true 


// question 4
let z=[1,2,3,4]
let a={name:'anil'}
console.log(...z);


// // console.log(typeof NaN)

// // let data=10- -10;
// // console.log(data)
// // const set=new set([1,1,2,3,4]);
// // console.log(set)


// // let data={name:"Anil"};
// // console.log(delete data.name)


// // const data={name:"anil"};
// // console.log(delete data);

// // const data=["peter","anil","sam"];
// // const [y,z,x]=data;

// // console.log(y,z,x);


// //second element
// // const data=["peter","anil","sam"];
// //  const [,y]=data;
// //  console.log(y)

// // const name='code step by step';
// // console.log(!typeof name ==='object')//false
// // console.log(!typeof name==='string')//false
// // console.log(!typeof name===false)//true

// // const name="subscribe";
// // const age=21;
// // console.log(NaN(name))//true
// // console.log(isNaN(age));//false

// //modify the object
// // let person={name:'anil'};
// // Object.seal(person)
// // console.log(person)  //{name: 'anil'}
// // // name
// // // : 
// // // "anil"

// // person.seal=29;
// // console.log(person)

// // let data=[2,9,0,10]
// // data.pop()
// // console.log(data);
// // check any value is obb or even

// // let a=31
// // console.log(30%2)

// // let data={
// //     name:'anil'
// // }
// // delete data.name;
// // console.log( typeof data)


// // let data="true";
// // //convert data to boolean false value
// // console.log(!!data)


// //map and foreach
// //map-return something foreach -

// // let data=['anil','peter','bruce'];
// // delete data[1];
// // console.log(data);

// // let data=['anil','peter','bruce'];
// // delete data[1];
// // console.log(data.length)
// // merge two array
// // let a=[1,2,3];
// // let b=[4,5,6];
// // let c=[...a,...b];
// // console.log(c)

// // let a=[1,2,3,4];
// // let b=[4,5,6];
// // let c=[...a,...b];
// // console.log(c);

// // let c=3**3;
// // console.log(c)

// // let a=2;
// // setTimeout(()=>{
// //     console.log(a)
// // },0)
// //a=100;

// // let a=2;
// // let A=30;
// // console.log(A);

// // let A10="like"
// // // let 10A="okay";
// // console.log(A10)

// // let a="like";
// // let b="like";
// // console.log(a===b);

// // let a=1;
// // let c=2;
// // console.log(--c===a)

// // let a=1;
// // let b=1;
// // let c=2;
// // console.log(a===b === --c)


// // console.log(3*3)
// // console.log(3**3)
// // console.log(3***3)

// // console.log(a);
// // var a;

// // console.log([[[[]]]])

// // how to find os

// // navigator.platform()

// // let for=100

// // function fruit(){
// //     console.log(name)
// //     console.log(price);
// //     var name="apple";
// //     let price=20;
// // }
// // fruit();

// // for(var i=0;i<3;i++){
// //     setTimeout(()=>console.log(i),1)
// // }




// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }


// console.log(+true);
// console.log(typeof +true)

// console.log('shu');
// console.log(typeof('shub'))


// let data="size";
// const bird={
//     size:"small"
// }

// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);


// let c={name:"peter"}
// let d;
// d=c;
// c.name="anil"
// console.log(d.name);

// var x;
// var x=10;
// console.log(x);

// var x=
// let x=10;
// console.log(x)

// let a=3;
// let b=new Number(3)
// console.log(a==b)
// console.log(a===b)

// let name;
// nmae={}
// console.log(name)

// function fruit(){
//     console.log("woof!")
// }

// function sum(a,b){
//     return a+b;
// }

// sum(3,"5")

// let number=0;
// console.log(number++);
// console.log(++number)
// console.log(number)


// function getAge(...args){
//     console.log(typeof args)
// }


// getAge(20)


// function getAge(){
//     "use Strict"
//     age=21;
//     console.log(age)
// }

// getAge();



// const sum=eval("10*10+5");
// console.log(sum);

// // ** How long is cool_secret accessible?

// sessionStorage.setItem('cool_secret',123)

// const obj={1:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProprty("1"))
// console.log(obj.hasOwnProprty(1))


// const obj={a:"one",b:"two",a:"repeat"}
// console.log(obj);

// for(let i=1;i<5;i++){
//     if(i===3) continue;
//     console.log(i)
// }


// const foo=()=>console.log('First');
// const bar=()=>setTimeout(()=>console.log('second'))
// bar();
// foo()
// baz()

// const person={name:'anil'}
// function sayHi(age){
//     return `${this.name} is ${age}`;
    
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21))


// function sayHi(){
//     return(()=>0)();
// }

// console.log(typeof sayHi())

// function sayHi(){
//     return()=>0;
// }

// console.log(typeof sayHi());

// console.log(typeof typeof 1);

// const numbers=[1,2,3];
// numbers[6]=11;
// console.log(numbers);

// const numbers=[1,2,3];
// numbers[9]=numbers;
// console.log(numbers);


// console.log(!null);
// console.log(!!"");
// console.log(!!1);

// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))


// console.log([..."anil"])



// const firstPromise=new Promise((res,rej)=>{
//     setTimeout(res,500,'one')
// })

// const secondPromise=new Promise((res,rej)=>{
//     setTimeout(res,100,'two');
// })

// Promise.race([firstPromise,secondPromise]).then(res=>console.log(res))

// const person={
//     name:"batman",
//     age:21,
// }

// for(const item in person){
//     console.log(item)
// }

// let data=3+4+'5';
// console.log(typeof data)
// console.log(typeof 3+4+'5');

// console.log([]==[])

// let data=[1,2,3],map(num=>{
//     if(typeof num==='number') return;
//     return num*2;
// })
// console.log(data)

// function getInfo(member){
//     member.name='Anil'
// }
// const person={name:'Sarah'};

// getInfo(person)
// console.log(person)


// function car(){
//     this.make='take';
//     return {make:'Kia'}
// }

// const myCar=new car();
// console.log(myCar.make)


// (()=>{
//     let x=(y=10)
// })()
// console.log(typeof x)


//83  (()=>{
//     let x=y=10;
//     //letx;
// })()

// console.log(typeof y); output:number

//85 (()=>{
//     let x=10;

// })()

//86  (()=>{
//     let x=10;

// })()

// console.log(typeof x)



// 87 let x=100;
// (()=>{
//     var x=20;
// })
// ()
// console.log(x)

// output:100
//88 console.log(!true-true) output:-1


 // 89 console.log(true+ +"10") ; output  :11
