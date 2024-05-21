import React, { Component } from 'react';

class ClassCounterComponent extends Component {
    constructor(props) {
        super(props);
        console.log("in counter constructor");
        this.state = {
            count: 0
        }
    }
    /*
    incrementCount(){
    }

    if we write function like above 
    in this function this object will point to button 
    //  in constructor need to add below code -
    this.incrementCount = this.incrementCount.bind(this);
    // it will add class component object explicity 
    // overrides the old defination with new defination
    */

    incrementCount = () => {
        //  alays use this.setState function to change the state it is a asynchronous function
        this.setState({ count: this.state.count + 1 }, function () {
            console.log(this.state.count)
        })
    }

    decrementCount=()=>{
        this.setState({count:this.state.count-1},function(){
            console.log(this.state.count)
        })
    }

    resetCount=()=>{
        this.setState({count:0},function(){
            console.log(this.state.count)
        })
    }

    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h1>Class Counter Component</h1>
                {/* <h3>You clicked {this.state.count} times</h3> */}
                { this.state.count > 0  ? <h4>You clicked {this.state.count} times </h4> : " "} 
                <button type="button" id="inc" value="inc" onClick={this.incrementCount}>Increment Counter</button> &nbsp; &nbsp; &nbsp;
                <button type="button" id="dec" value="dec" onClick={this.decrementCount}>Decrement Counter</button> &nbsp; &nbsp; &nbsp;
                <button type="button" id="rest" value="rest"onClick={this.resetCount}>Reset Counter</button>
            </div>
        );
    }
}

export default ClassCounterComponent;
