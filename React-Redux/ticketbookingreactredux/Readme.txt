React-redux 

React redux is a library which allows to store data at central storage.
To use this library we need to install : redux and react-redux

Redux uses following component.
1. Action - It is a Object which has 2 property type & payload 
2. Reducers - These are functions which manges the state, these functions receives oldState and action it converts old state into new state
3. Store - It store the state


1. Action 
Action is a JS object that contains informations for the store. 
Action have 2 property type & payload 
type : tells what kind of action to perform 
payload : contains the data or information to be updated

The function that retruns action are called as Action Creators functions.


2. Reducers - 
Reducers are pure functions that takes old state and action as input and returns new state and tell store how to perform the given action 

3. Store - 
The store is the object which holds the state of the application.
Function associated with store :
createStore() - To create a store 
dispatch(action) - To chnage the state
getState() - To get the current state of store 

Simple demonstration of Ticket Booking Application to understanding react-redux working 

Having 2 Actions -
1. new_booking - To book a new ticket
2. cancle_booking - To cancel a ticket 

So project folder structure will be as shown below : 

src 
    redux 
        reducer
            reservationReducre.js :- this file contains reducers functions which return new state based on action perform 
                                    ( i.e in this function it will return reservationList, cancellationList, updated amount), 
                                    example of functions (manageReservationList(), manageCancellationList(), manageAMount())
            index.js :- this file contain combineReducre function which combines state into a one Object ( railwaystore)
        action 
            bookingAction.js :- this file contains action creators functions ( example : new_booking, cancel_booking)
        store.js  :- this file contain function to create a new store     
    components 
        Note :- component file name must start with capital letter , if it start with small letter react will treat that as tag not component 
        DisplayData.js :- to display data in proper format (display reservation booking list in table, cancle booking tickets in table, amount)
    app.js :- this file contains form which take inputs - id,name,amount and action ( book a ticket , cancel a ticket )


<Provider>
It is a special component provided by react redux library that wraps entire react application. 
This Provider component ensures that all components inside your app can access the Redux store and its state without having to pass it down manually through component props.