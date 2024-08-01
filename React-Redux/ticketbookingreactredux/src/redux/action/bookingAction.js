// action creator function 

// 1. function to create new_booking action 
export const new_booking=(id,name,amount)=>{
    return{
        type:"new_booking",
        payload:{id:id,name:name,amount:amount}
    }
}

// 2. function to cancel_booking action 
export const cancel_booking=(id,name,amount)=>{
    return{
        type:"cancel_booking",
        payload:{id:id,name:name,amount:amount}
    }
}