//  function to add items to cart using local storage 

function addItem(){
    var selectedOption = document.getElementById('items').value;
    var itemData = selectedOption.split(',');

    var itemId = itemData[0];
    var itemName = itemData[1];
    var itemPrice = parseFloat(itemData[2]);

    
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var newItem ={
        id:itemId,
        name : itemName,
        price : itemPrice
    };

    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!!');
}

// function to add items to cart using session storage 

function addItemsSession(){
    var selectedOption = document.getElementById('items').value;
    var itemData = selectedOption.split(',');

    var itemId = itemData[0];
    var itemName = itemData[1];
    var itemPrice = parseFloat(itemData[2]);

    var sessionCart = JSON.parse(sessionStorage.getItem('sessionCart')) || [];

    var newItem = {
        id:itemId,
        name:itemName,
        price : itemPrice
    };

    sessionCart.push(newItem);
    sessionStorage.setItem('sessionCart',JSON.stringify(sessionCart));

    alert("Item added to cart ( session storage cart ) !");
}

// function to view cart contents 
function viewCart(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartSession = JSON.parse(sessionStorage.getItem('sessionCart')) || [];

    if(cart.length===0){
        alert('cart is empty!!');
        return;
    }

    var cartContents = 'Cart Contents (Local Storage): \n';
    for(var i=0;i<cart.length;i++){
        cartContents +=`Id: ${cart[i].id}, Name : ${cart[i].name}, Price : ${cart[i].price}\n`
    }

    if(cartSession.length===0){
        alert('Cart is empty (session storage)');
        return;
    }
    else{
        cartContents += '\n \nCart Contents (session Strogae) : \n';
        for(var j=0;j<cartSession.length;j++){
            cartContents +=`Id: ${cartSession[j].id}, Name : ${cartSession[j].name}, Price : ${cartSession[j].price}\n`

        }
    }

    alert(cartContents);
   
}