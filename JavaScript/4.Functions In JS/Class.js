// Class in JS

class Person{
    constructor(pid,pname,mob){
        this.pid=pid;
        this.pname =pname;
        this.mob=mob;
    }
    display(){
        return `Id: ${this.pid}, Pname : ${this.pname}, Mob : ${this.mob}`
    }
}

class Employee extends Person{
    constructor(pid,pname,mob,dept,desg) {
        super(pid,pname,mob);
        this.dept=dept;
        this.desg=desg;
    }

    display(){
        return super.display() + `Dept : ${this.dept}, Desg : ${this.desg}`
    }
}

var e1 = new Employee(1,"Siddharth","32547379",'HR','Manager')
document.write(`Class demo JS<br>`)
document.write(e1.display())