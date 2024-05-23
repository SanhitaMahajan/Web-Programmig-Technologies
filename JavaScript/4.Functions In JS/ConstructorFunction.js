//  constructor function in JS
var Person = function(pid,pname,mob){
    this.pid = pid;
    this.pname = pname;
    this.mob = mob;
}

var p1 = new Person(12,"Siddharth",'23456789')

var Employee = function(dept,desg){
    this.dept = dept;
    this.desg = desg;
}

var e1 = new Employee("HR","Manager")
e1.__proto__ = p1 // p1 is parnet of e1

for(var p in e1){
    // checking hether the proeprty is its own 
    if(e1.hasOwnProperty(p)){
        document.write(`own properties - ${p} ${e1[p]} ${typeof(e1[p])}<br>`)
    }
    else{
        document.write(`parent properties - ${p} ${e1[p]} ${typeof(e1[p])}<br>`)
    }
}