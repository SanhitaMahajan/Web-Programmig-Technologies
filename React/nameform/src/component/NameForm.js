import React from 'react'
import { useState } from 'react'
export default function NameForm(props){

    const [name,setName] = useState("")

    //  input text box name - onchnage 
    const changeName=(event)=>{
        setName(event.target.value)
    }

    // add function - Add Name button click 
    const addName=()=>{
        //pass the name to parent -> NameList
        props.inNameListAdd(name)
        setName("")
    }
    return(
        <div>
            <form>
            <label htmlFor="nm">Name : </label> 
            <input type="text" name="name" id="nm"
            value={name}
            onChange={changeName}></input>
            <br></br> <br></br>
               <button type="button" name="add" value="add" id="add" onClick={addName}>Add Name</button>
            </form>
        </div>
    )
}