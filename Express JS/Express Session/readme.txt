To use Express Session 

1. download express session library 
> npm i express-session --save 

2. import it in your application 
const session = require("express-session")

3. Set up the session 

app.use(session({
    // it store the secret key, which is used for encryption decryptin of session data 
    secret:'mySecretKey',
    // forces the session to be saved back to session storage 
    resave:true,
    //forces a sesion that is uninitalize to be save in the storage 
    uninitialized : true
}))

4. set value in the session 
req.session.uname = 'user1'

5. to get the value from the session 
var name = req.session.uname

6. to get the value from the session 
var name = req.session.uname

7. to destroy the session 
req.session.destroy(function(){
    console.log("session destroyed")
})


WebService Request

    Method      Meaning                          url                                                  query 
1.  get         read data                   /products , /products/product/10                       select query 
2.  post     add data to databse            /products/:id                                          insert query 
3. delete    delete data from database      /products/:id                                          delete query 
4.  put       update data                   /products/:id update query                             update query 


we use postman tool to test if our API's are working properly and giving result or not 