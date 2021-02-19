import{Cart} from './Cart' 
obj=new Cart();
 nums=[1,2,3,4,5];
 nums=[... nums,6,7,8]; //spread operator
//  for(let i=0;i<nums.length;i++)
//  {
//      console.log(nums[i]);
//  }
//ES 6 notaion
const func2=function (a,b){
    console.log("Total:"+(a+b));
}
//func2 function pointer
func2(5,5);
// ES6 notation -  arrow functions 
const func1=(item)=>{
    console.log(item);
}
//func1("kkkkk")
//  nums.forEach(element => {
//      console.log(`slno ${element}`);
//  });
nums.forEach(func1); /// higher order functions
//function disp(x){console.log("disp"+x)}
nums.map((x)=>{console.log("disp"+x)});   /// functional programming 
// obj1=Object();
// obj1.age=45;
// obj1.name="Anil"
product=[{
    price:45,name:"Necklace"
},{
    price:55,name:"Ring"
},
]
product.forEach(item=>{
    console.log(item.price+" "+item.name)
})