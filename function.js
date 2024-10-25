class Employee{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.id+" "+this.name)
    }
}
let e=new Employee(550,"DEEPTHI");
e.display();