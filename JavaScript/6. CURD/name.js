var nameArr = ["Sam"]

//  display list
function displayList() {
    var str = `<ul>`
    for (var p of nameArr) {
        str += `<li>${p}</li>`
    }
    str += `</ul>`
    document.getElementById("nameDiv").innerHTML = str;
}

//  add name
function addName() {
    var name = document.getElementById("name").value;
    nameArr.push(name)
    displayList()
    document.getElementById("name").value = ""
}

// delete name 
function deleteName() {
    var name = document.getElementById("name").value;
    var pos = nameArr.indexOf(name)
    if (pos !== -1) {
        var ans = confirm(`Do you want to delete the name ${name} ? (y/n)`)
        if (ans) {
            nameArr.splice(pos, 1)
            displayList()

        }
    }
    else{
        alert("Name not found")
    }
    document.getElementById("name").value = "";
}


// serach name 
function searchName(){
    var name = document.getElementById("name").value;
    var pos = nameArr.indexOf(name)
    if(pos!==-1){
        alert(`${name} found at position ${pos+1}`)
    }
    else{
        alert(`${name} not found`)
    }
    document.getElementById("name").value = "";
}
