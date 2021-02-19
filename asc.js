var students=[
    {id:2,name:"nandini",marks:344},
    {id:4,name:"harish",marks:433},
    {id:6,name:"ram",marks:200},
    {id:1,name:"raj",marks:580}
 ]

students.sort((item1,item2)=>item1.marks-item2.marks).map((item)=>console.log(item.id+item.name));
console.log(students);
