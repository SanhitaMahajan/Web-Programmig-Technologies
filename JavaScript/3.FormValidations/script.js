// function to check whether input text contains character more than 3 and spaces not allowed 
//  input type=text
function validateTextInputs(id,errId){
    // alert("text")
    var uname = document.getElementById(id).value;
    if(uname.trim().length>0){
        document.getElementById(errId).innerHTML = "";
        return true;
    }
    else{
        document.getElementById(errId).innerHTML="Please enter valid data, All spaces not allowed";
        return false;
    }
}
// validate radio button 
function validateRadioButton(id,errid){
    alert("in radio");
    var arr=document.getElementsByName(id);
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
            document.getElementById(errid).innerHTML="";
            return true;
        }
    }
    document.getElementById(errid).innerHTML="Please select " +id
    return false;
}

// validations for checkboxes 
// 2 or more than 2 checkboxes should be selected 
function validateChekbox(id,errId){
    // alert("checkbox")
    var skillsArr = document.getElementsByName(id);
    var count=0;
    for(var i=0;i<skillsArr.length;i++){
        if(skillsArr[i].checked){
            count++;
            if(count>=2){
                document.getElementById(errId).innerHTML="";
                return true;
            }
        }
    }
    document.getElementById(errId).innerHTML="select minimum 2 skilss ";
    return false;
}

// validation for dropdown 
function validateDropdown(id, errid){
    // alert("in dropdown")
    var c=document.getElementById(id);
    // alert(c.selectedIndex);
    var v=c.options[c.selectedIndex].value;
    //if(v!=="test"){
    if(c.selectedIndex!==0){
        document.getElementById(errid).innerHTML="";
        return true;
    }
    document.getElementById(errid).innerHTML="Please select the city";
        return false;
}

function validateData(){
    var flag1 = validateTextInputs("userName1","errUser");
    var flag2 = validateTextInputs("addr","errAddr");
    var flag3 = validateRadioButton("gender","errGender");
    var flag4 = validateRadioButton("degree","errDegree");
    var flag5 = validateChekbox("skill","errSkills");
    var flag6 = validateDropdown("city","errCity");

    return flag1 && flag2 && flag3 && flag4 && flag5 && flag6;
}