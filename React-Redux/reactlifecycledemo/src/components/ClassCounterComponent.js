import React from 'react'

class ClassCounterComponent extends React.Component {

    // 1. constructor 
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("In class counter component constructor");
        // it will pass class component object explicitly 
        // and overwrite the old defination with new defination 
        //  this.incrementCount = this.incremntCount.bind(this);
    }

    // 3. function - incrementCount 
    incrmentCount = () => {
        // always use this.setState function to chnage the state 
        //  it is a asynchronous function, always the chnages to the state are visible in callback function
        this.setState({count:this.state.count+1},function(){
            console.log(this.state.count);
        })
    }

    // 2. render 
    render() {
        console.log("In class component render function");
        return (
            <div>
                <h1>Class Counter Component</h1>
                {
                    this.state.count >= 0 ? <h4>You clicked {this.state.count} times</h4> : ""
                }
                <button type="button" name="btn" id="btn" value="inc" onClick={this.incrmentCount}>Increment counter</button>
            </div>
        )
    }

    // 4. componentDidMount()
    componentDidMount() {
        console.log("In class counter component componentDidMount ");
    }

    // 5. componentDidUpdate()
    componentDidUpdate(prevprops, prevstate) {
        console.log("In class counter component componentDidUpdate ");
        console.log("previous state ", prevstate);
        console.log("this state ", this.state);
    }

    // 6. shouldComponentUpdate() 
    shouldComponentUpdate(nextProps, nextState) {
        console.log("In class counter component shouldComponentUpdate ");
        return nextState.count !== this.state.count;
    }

    // 7. getSnapshotsBeforeUpdate()
    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
    }

    // 8. componentWillUnmount()
    componentWillUnmount() {
        console.log("in componentWIllUnmount");
    }
}


export default ClassCounterComponent;