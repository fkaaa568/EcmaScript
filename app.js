
// var name = "Rehan"
// function data(){
//      name = "Faizan";
// }
// data();
// console.log(name);
                                //LET//

// let B_name = "Farhan Manzoor";
// if(true){
//      B_name = "Arsalan Manzoor";
// }

// console.log(B_name)

                                //CONST//
// const age = 20;
// console.log(age);
// age = 30;
// console.log(age);


                                //TEMPLATE LITERALS
// let name = "Faizan Manzoor";
// let f_name = "Manzoor Ali";
// let age = 20;
// let email = "fkaaa567@gmail.com";
//let Nationality = "Pakistani";
// document.write(`My name is ${name} <br> My father Name is ${f_name} My age is ${age} <br> My email is ${email} <br> My Nationality is ${Nationality}`);


                                //SPREAD OPERATOR//
                                    //ARRAY//

// let data = [name,f_name,age]
// let otherdata = [...data,email,Nationality];
// console.log(otherdata); 

                                   //OBJECTS//

// let mydata = {
//     name:name,
//     fatherName:f_name,
//     Age:age, 
// }                                   

// let myotherData = {
//     ...mydata,
//     Id:email,
//     Nation:Nationality,
// }

// console.log(myotherData);

                                    //DESTRUCTURING//

// let a,b,c,rest;
// [a,b,c] = [20,30,40];
// console.log(a);

// [a,b,c,...rest] = [20,30,40,50,60];
// console.log(rest); 

// ({a,b,c} = {a:10,b:20,c:30});
// console.log(a);

// ({a,b,c,...rest} = {a:10,b:20,c:30,d:40,e:50});
// console.log(rest);


// const x = [10,20,30,40,50];
// const [y,z,...rest] = x;
// console.log(rest);

// const colors = ['red','yellow','green','blue','pink'];
// const [one,two,three,four,five] = colors;
// console.log(one);
// console.log(two);
// console.log(three);
// 
// 
// function f() {     
    // return [1, 2];
  // }
  // 
  // let a, b; 
  // [a, b] = f(); 
  // console.log(a); // 1
  // console.log(b); // 2
// 
// 
// 
  // function f() {
    // return [1, 2, 3];
  // }
  // 
  // const [a, , b] = f();
  // console.log(a); // 1
  // console.log(b); // 3
  // 
  // const [c] = f();
  // console.log(c); // 1


  // let data = {
  //   name:'faizan',
  //   age:20,
  //   email:'fkaaa567@gmail.com'
  // }

  // let {name,age,email} = data;
  // console.log(name);
  // console.log(age);
  // console.log(email);          

                                            //TERNARY OPERATORS//

// var a = 100;
// var b;
// b = (a >= 100)? "This is True value":"This is false value";
// document.write(b);                                           

// var age = 20;
// var beverage;
// beverage = (age >= 20)? "True" : "False";
// console.log(beverage);

// var value = 50;
// var check;
// check = (value >=30)? 
// "30 se bara hai"
// : 
// "30 se choota hai";
// check = (value >= 40) ?
// "40 ke bara bar ha"
// :
// "40 ke bara ha"
// document.write(check);

// var bool = true;
// var name = bool && "Faizan";
// console.log(name);

                                           //PROMISES//

// let promise = new Promise(function(resolve,reject){

//     var age = 20;
//     if(age >= 19){
//       resolve("The age is grether than 20")
//     }else{
//       reject("The age is less than 20");
//     }
// })                                          
// promise.then(function(data){
//   console.log("Resolve ===> ",data);
// })

// .catch(function(error){

// console.log("Rejected ===> ",error);
// })

// let promise = new Promise(function(resolve,reject){

//   firebase.database().ref("User-Data").on("child_added",function(data){
//     if(data.val()){
//       resolve(data.val())
//     }else{
//       reject("Something went wrong")
//     }
//   })
// })

// promise.then(function(data){
//   console.log(data);
// })
// .catch(function(error){
//   console.log(error);
// })

// let promise = new Promise((resolve,reject)=>{

//     if(true){
//         setTimeout(()=>{
//           resolve("It is resolved");
//         },3000)    
//     }else{
//       reject("It is rejected");
//     }
// })

// promise.then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//   console.log(error);

// })


                                            //FUNCTION EXPRESION//

// let today = "Wednesday"         
// let foo = function(){
//     if(today === "Wednesday"){
//       console.log(`${today}!!! Today is good day for me Bcoz!!! today is my birthday`);
//     }
//     else{
//       console.log("Today the day is going to be bored");
//     }
// }                                            
// foo();

                                             //ARROQ FUNCTION//
// let PI =(pi)=>{
// console.log(`The value of pi ${pi} is`);
// }

// PI(3.14);

// let value = sum =>{
//   console.log(`The sum value of ${sum} is ${sum*sum} `)
// }

// value(2);

// let text = (name,age)=>{
//   return `My name is ${name} and My age is ${age}`;
// }

// let get = text('Faizan',20);
// console.log(get);


// let hello = () => "World";
// console.log(`Hello ${hello()}`);


// let hello_ = _ => "World";
// console.log(`Hello ${hello_()}`); 
      
                                            //FILTER METHOD//

    // let data = [{name:"faizan",age:20,email:"fkaaa567@gmail.com"},{name:"Rehan",age:6,email:"rehan555@gmail.com"}];
    
    // let filter = data.filter(function(a){
    //   return true;
    // })

    // console.log(filter);



    // let data = [{name:"faizan",age:20,email:"fkaaa567@gmail.com"},{name:"Rehan",age:6,email:"rehan555@gmail.com"}];
    // let filter = data.filter((a)=> console.log(a));

// let data = [{name:"faizan",age:20,email:"fkaaa567@gmail.com"},{name:"Rehan",age:6,email:"rehan555@gmail.com"}];

// let filter = data.filter(a =>  a.age > 19);  
 
// console.log(filter);

                                          //SEARCH METHODS//

// let  value = "Hello World";
// let search = prompt('please enter your value');
// if(value.startsWith(search)){
//   console.log(value);
// }

// let  value = "Hello World";
// let search = prompt('please enter your value');
// if(value.endsWith(search)){
//   console.log(value);
// }    

                                            //ARRAY MAP//

// let arr = [20,30,40,50,60];
// let map = arr.map((a)=>{
//   return a*2;
// })                                            

// console.log(map);


// let arr = [20,30,40,50,60];
// let map = arr.map((a)=> a*2);
                                          
// console.log(map);


// let data = [
//   {fname : "Arsalan" ,lname:'Manzoor'},
//   {fname : "Faizan" ,lname:'Manzoor'},
//   {fname : "Farhan" ,lname:'Manzoor'},
//   {fname : "Rehan" ,lname:'Manzoor'},
// ]

// let map = data.map((a)=> `${a.fname} ${a.lname} <br>`);
// document.write(map);

                                          //CLASS CONSTRUCTOR//

// class Student{
//   constructor(name,age,email){
//     this.name = name,
//     this.age =age,
//     this.email = email
//   }
// }

// let data1 = new Student('Faizan',20,'fkaaa567@gmail.com',"Froeble");
// console.log(data1);  

//                                           //  MERGE TWO CLASSES

// class School extends Student{
//   constructor(name,age,email,school){
//     super(name,age,email) 
//     this.school = school
//   }
// }                                          

// let data2 = new School('Faizan',20,'fkaaa567@gmail.com',"Froeble");
// console.log(data2);  