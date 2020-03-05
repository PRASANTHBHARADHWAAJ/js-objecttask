const obj1 = {
  getname : function (){
    return this.name ;
  },
  setname : function (name){
     this.name=name;
  },
  getid : function (){
    return this.name ;
  },
  setid : function (name){
     this.name=name;
  },
  getclass : function (){
    return this.name ;
  },
  setclass : function (name){
     this.name=name;
  },
  getage : function (){
    return this.name ;
  },
  setage : function (name){
     this.name=name;
  },
  getdob : function (){
    return this.name ;
  },
  setdob : function (name){
     this.name=name;
  },
  getloc : function (){
    return this.name ;
  },
  setloc : function (name){
     this.name=name;
  }
}
let id = prompt("enter id");
let class1 = prompt("enter class");
let name = prompt("enter name");
let age= prompt("enter age");
let loc =prompt("enter location");
let dob = prompt("enter dob");
console.log(obj1.setid(id))
console.log(obj1.getid())
console.log(obj1.setname(name))
console.log(obj1.getname())
console.log(obj1.setclass(class1))
console.log(obj1.getclass())
console.log(obj1.setage(age))
console.log(obj1.getage())
console.log(obj1.setdob(dob))
console.log(obj1.getdob())
console.log(obj1.setloc(loc))
console.log(obj1.getloc())
