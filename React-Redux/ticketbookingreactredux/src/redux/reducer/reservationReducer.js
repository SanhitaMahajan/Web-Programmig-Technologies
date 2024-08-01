//  manageReservationList - it will take oldReservationList as input and based on type of action it will either add new list object or remove object from the list 
// it will return updatedReservationList
export const manageReservationList=(oldReservationList=[],action)=>{
    console.log("In manage reservation list")
    switch(action.type){
        case "new_booking" :
            return [...oldReservationList,{...action.payload}]
        case "cancel_booking" :
            return oldReservationList.filter(ob=>ob.id!=action.payload.id)
        default :
        return oldReservationList;    
    }
}

export const manageCancellationList=(oldCancellationList=[],action)=>{
    console.log("In manage cancellation list");
    switch(action.type){
        case "cancel_booking" :
            return [...oldCancellationList,{...action.payload}]
        default:
            return oldCancellationList;    
    }
}


export const manageAmount=(oldAmount=5000,action)=>{
    console.log("In manage amount");
    switch(action.type){
        case "new_booking":
            return oldAmount + parseInt(action.payload.amount)
        case "cancel_booking":
            return oldAmount - parseInt(action.payload.amount)    
        default :
        return oldAmount;    
    }
}