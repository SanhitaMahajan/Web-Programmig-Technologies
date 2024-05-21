import React , {Component, useState} from 'react';

const FunctionCounterComponent=()=>{
    // var count=0;
    const [count,setCount]= useState(0)

    const incrementCount=()=>{
        // count++
        setCount(count+1)
        console.log(count);
    }

    const decrementCount=()=>{
        setCount(count-1)
        console.log(count);
    }

    const resetCount=()=>{
        setCount(0)
    }


    return(
        <div style={{ padding: '30px' }}>
            <h1>Functional Counter Component</h1>
            { count > 0  ? <h4>You clicked {count} times </h4> : " "} 
                <button type="button" id="inc" value="inc" onClick={incrementCount}>Increment Counter</button> &nbsp; &nbsp; &nbsp;
                <button type="button" id="dec" value="dec" onClick={decrementCount}>Decrement Counter</button> &nbsp; &nbsp; &nbsp;
                <button type="button" id="rest" value="rest"onClick={resetCount}>Reset Counter</button>
        </div>
    )
}

export default FunctionCounterComponent