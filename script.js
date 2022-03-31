

//..............................................object.............................................................
//object are non primitive datatype
//they having key value pair,
//key having string format
// value it should be any type


let user ={
    name:'rutuja',
    age:22,
    isadmin:false
}
console.log(user.name);
console.log(user['name']);//second way to  writen name

// let user1= new Object()
// user1.name = 'rutwi';
// console.log(user1)

//inside a object we can passes the square bracket inside a  variable=>
let fruit='apple';
let obj={
    [fruit]:true
}
console.log(obj.apple);// is called computed properties where fruite ki value pahile object ke key mai aayega and badme .



//.................loopin in object................
//1)..................for in loop
//it give all key names

// let saleries={
//     john:100,
//     rutuja:200,
//     shri:600
// }
// let sum=0;
// for(let key in saleries){
//      sum += saleries[key];
    
// }
// console.log(sum);


let menu={
    width:200,
    height:300,
    title:'my menu'
}
for(let key in menu){
    if(typeof menu[key] === 'number'){
        menu[key]=menu[key]*2
    }
    
}
console.log(menu);

//.........................object referencing and copying....................
//in case of primitive data type 
let message='hello';
phrase= message +'world';



//............spread operator...........
let name1={
    name:'rutuja',
    age:22
}
let clone = {...user };
clone.lastname = 'arage';
console.log(name1);


console.log(clone);


let arr1=[2,3,4];
let arr2=[5,6,7];
let arr3=[...arr1,...arr2];
console.log(arr3);//[2,3,4,5,6,7]


let obj2={name:'rahul',age:22};
let obj3={name:'ram',age:21};
let obj4={...obj2 , ...obj3};
console.log(obj4);


// it represent real type entity
//a function bound to an object is called method
// why we use in object an method?  ==> it allowing the 

//.......................this ..................................................
let info={
    age:23,
    firstname:'rutu',
    sayhi:function(){
        console.log('hi', this.firstname);// value of 'this' is defines during the runtime and it will refer to the object from where it was called 
    }
}
let admin=user;
user = null;
console.log(admin.sayhi);
admin.sayhi();

//when the "this" keyword refre in normal function which means they not a method then it will refre to global object
//"this" keyword  refer the  window object when  they  are inside  arrow function. when it come from browser
//value of "this" determined at run-time