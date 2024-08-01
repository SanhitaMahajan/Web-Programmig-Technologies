import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayData() {
    let reservationList = useSelector((state) => state.reservationList)
    let cancellationList = useSelector((state) => state.cancellationList)
    let amount = useSelector((state) => state.amount)



    return (
        <div>
            <h2>Reservation List</h2>
            <table border={2} style={{ marginLeft: 350, width: '50%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationList.map(ob => <tr key={ob.id}>
                        <td>{ob.id}</td>
                        <td>{ob.name}</td>
                        <td>{ob.amount}</td>
                    </tr>)}
                </tbody>
                </table>
                <br></br>
                {/* <hr size="3px" color="orange"></hr> */}
                 <br></br>
                <h2>Cancellation List</h2>
                <table border={2} style={{ marginLeft: 350, width: '50%' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cancellationList.map(ob => <tr key={ob.id}>
                            <td>{ob.id}</td>
                            <td>{ob.name}</td>
                            <td>{ob.amount}</td>
                        </tr>)}
                    </tbody>
                </table>
                <br></br> <br></br>
            <h3>Total Amount : {amount}</h3>
        </div>
    )
}