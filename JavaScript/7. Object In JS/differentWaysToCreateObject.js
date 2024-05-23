//  Differnt ways to create object in JavaScript 

// 1. 
var obj = { pid:123, pname:"Sanhita", mob:9876542132}
document.write(`Pid : ${obj.pid} <br>`);

//  2. 
var obj = {pid:123,pname:"Satish",mob:9876542132,display:function(){
    return `Id:${this.pid}, Name: ${this.pname}, Mob : ${this.mob} <br>`
}}
document.write(obj.display())

// 3. adding property after creating object
obj.email ="abc@gmail.com"

//  object for loop - retriving properties name 

for(var p in obj){
    document.write(`<br> ${p} = ${obj[p]} <br>`)
}
