import {combineReducers} from 'redux'
import { manageCancellationList, manageReservationList,manageAmount } from './reservationReducer'

const railwayStore=combineReducers({
    amount : manageAmount,
    reservationList:manageReservationList,
    cancellationList : manageCancellationList
})

export default railwayStore;