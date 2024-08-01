import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayData';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { new_booking,cancel_booking } from './redux/action/bookingAction'
function App() {

  let [formDetails, setFormDetails]= useState({id:"",name:"",amount:""})
  const dispatch=useDispatch()

  const bookTicket=()=>{
    let action = new_booking(formDetails.id,formDetails.name, formDetails.amount)
    dispatch(action);
    setFormDetails({id:"",name:"",amount:""})
  }

  const cancelTicket=()=>{
    let action = cancel_booking(formDetails.id,formDetails.name,formDetails.amount);
    dispatch(action)
    setFormDetails({id:"",name:"",amount:""})
  }

  const handelChange=(event)=>{
    var {name,value} = event.target;
    setFormDetails({...formDetails,[name]:value})
  }


  return (
    <div className="App">
      <DisplayData></DisplayData>
      <hr size="3px" color="orange"></hr>
      <form style={{}}>
        <br></br> <br></br>
        Id:    <input type="text" name="id" id="id" value={formDetails.id} onChange={handelChange}></input> <br></br> <br></br>
        Name:   <input type="text" name="name" id="name" value={formDetails.name} onChange={handelChange}></input> <br></br> <br></br>
        Amount: <input type="text" name="amount" id="amount" value={formDetails.amount} onChange={handelChange}></input> <br></br><br></br>
        <button type="button" name="btn" id="btn" onClick={bookTicket}>Book Ticket</button> &nbsp; &nbsp; &nbsp; &nbsp;
        <button type="button" name="btn1" is="btn1" onClick={cancelTicket}>Cancel Ticket</button>
      </form>
    </div>
  );
}

export default App;
