import React from 'react'
import NameForm from './NameForm';

export default function NameList(props) {
    console.log(props)
    const addData = (name) => {
        props.inAppAdd(name);
    }
    return (
        // display Name List 
        <div>
            <ul>
                {
                    props.narr.map((ob, index) => <li key={index}>{ob}</li>)
                }
            </ul>
            <NameForm inNameListAdd={addData}></NameForm>
        </div>
    )
}