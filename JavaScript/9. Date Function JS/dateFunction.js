function showDate(){
    var dt = new Date();
    $('#myDiv').html(dt)
}

var v;
function testDate(){
    // v = setTimeout(showDate,1000); // call only once 
    v = setInterval(showDate,1000); // call agian and agian 
}

function stopInterval(){
    clearInterval(v);
}

function getDetails(){

    var dt1= new Date();
    var day = dt1.getDay(); // week day number 
    var dt2 = dt1.getDate();
    var month = dt1.getMonth(); // jan=0, Dec=11
    var year = dt1.getFullYear();

    document.write(`<br><br>Date is : ${dt2}/ ${month} / ${year}<br>`)
}

getDetails()

//  difference bewteen 2 date 
var dt3 = new Date('2022-05-14')
var dt4 = new Date('2023-05-14')

var diff = dt4.getTime() - dt3.getTime()
var daysDiff = diff/(1000*60*60*24)
document.write(`<br>Difference between 2 dates is : ${daysDiff} days<br>`)
