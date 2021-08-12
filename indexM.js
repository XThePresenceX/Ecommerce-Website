let carts = document.querySelectorAll('.buy-btn');
let setFromDelete = false;
let setFromlowQ = false;
// let remover = document.getElementsByClassName("fas fa-window-close");
// let lower = document.getElementsByClassName("fas fa-chevron-circle-left");

// for(let i=0; i < lower.length; i++){
//     lower[i].addEventListener('click', ()=>{
//         console.log("here");
//     })
// }
let products = [
    {
        name: 'Brown Jacket',
        tag: 'e',
        price: 60,
        inCart: 0
    },
    {
        name: 'Blue Suit',
        tag: 'q',
        price: 120,
        inCart: 0
    },
    {
        name: 'Grey Suit',
        tag: 'w',
        price: 120,
        inCart: 0
    },
    {
        name: 'White Tshirt',
        tag: 'r',
        price: 15,
        inCart: 0
    },
    {
        name: 'Yellow Full',
        tag: 'd1',
        price: 60,
        inCart: 0
    },
    {
        name: 'Black Full',
        tag: 'd2',
        price: 60,
        inCart: 0
    },
    {
        name: 'While Full',
        tag: 'd3',
        price: 60,
        inCart: 0
    },
    {
        name: 'Grey Full',
        tag: 'd4',
        price: 60,
        inCart: 0
    },
    {
        name: 'Silver Black',
        tag: 'ww1',
        price: 80,
        inCart: 0
    },
    {
        name: 'Digital W',
        tag: 'ww2',
        price: 40,
        inCart: 0
    },
    {
        name: 'Silver Blue',
        tag: 'ww3',
        price: 80,
        inCart: 0
    },
    {
        name: 'Black Gold',
        tag: 'ww4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Brown Shoes',
        tag: 'as5',
        price: 50,
        inCart: 0
    },
    {
        name: 'Sport Shoes',
        tag: 'as6',
        price: 70,
        inCart: 0
    },
    {
        name: 'Jenil Shoes',
        tag: 'as1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Road Shoes',
        tag: 'as7',
        price: 20,
        inCart: 0
    }
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
};

// for(let i=0; i < remover.length; i++){
//     remover[i].addEventListener('click', function(event){
//         console.log(event);
//     }
//     )
// }

function updateQuantity(){
    var span = document.getElementById("cartVal");
    span.textContent = "X";
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.nav-item span').textContent = productNumbers;
    }
}

function checkCart(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
    }
    else{
        let ele = document.getElementById('addhere');
        ele.innerHTML += '<h4>Your Cart is Empty</h4>';
        ele.innerHTML += '<h5><a href="shop.html" style="color:coral">Add Items</a></h5>';
    }
}

function cartNumbers(product){
    if(setFromlowQ || setFromDelete){
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + product.inCart);
            document.querySelector('.nav-item span').textContent = productNumbers + product.inCart;
        }else{
            localStorage.setItem('cartNumbers',product.inCart);
            document.querySelector('.nav-item span').textContent = product.inCart;
        }
    }
    else{
        //console.log("The product is ", product);
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.nav-item span').textContent = productNumbers + 1;
        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.nav-item span').textContent = 1;
        }

        setItems(product);
    }
}

function highQ(product){
    setFromlowQ = true;
    //console.log("here");  
    nameThis = "";    
    for (var i = 0; i < product.childNodes.length; i++) {
        if(product.childNodes[i].className == "nameHere"){
          
            //console.log(product.childNodes[i].textContent);
            nameThis = product.childNodes[i].textContent;
        }
    }        
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    count = Object.keys(cartItems).length;
    for(var x=0; x < count; x++){
        if(Object.values(cartItems)[x].name == nameThis){
            //console.log(Object.values(cartItems)[x]);
            Object.values(cartItems)[x].inCart = Object.values(cartItems)[x].inCart + 1;
            //console.log(Object.values(cartItems)[x]);
        }
        allClear();
        for(var i=0; i<count; i++){
            cartNumbers(Object.values(cartItems)[i]);
            setItems(Object.values(cartItems)[i]);
            totalCost(Object.values(cartItems)[i]);
        }
    }
    setFromlowQ = false;
}

function lowQ(product){
    setFromlowQ = true;
    //console.log("here");  
    nameThis = "";    
    for (var i = 0; i < product.childNodes.length; i++) {
        if(product.childNodes[i].className == "nameHere"){
          
            //console.log(product.childNodes[i].textContent);
            nameThis = product.childNodes[i].textContent;
        }
    }        
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    count = Object.keys(cartItems).length;
    for(var x=0; x < count; x++){
        if(Object.values(cartItems)[x].name == nameThis){
            //console.log(Object.values(cartItems)[x]);
            if(Object.values(cartItems)[x].inCart==1){
                return
            }
            Object.values(cartItems)[x].inCart = Object.values(cartItems)[x].inCart -1;
            //console.log(Object.values(cartItems)[x]);
        }
        allClear();
        for(var i=0; i<count; i++){
            cartNumbers(Object.values(cartItems)[i]);
            setItems(Object.values(cartItems)[i]);
            totalCost(Object.values(cartItems)[i]);
        }
    }
    setFromlowQ = false;
}


function deleteItem(product){
    setFromDelete = true;
    deleteThis = "";
    //console.log(product);
    for (var i = 0; i < product.childNodes.length; i++) {
        //console.log(product.childNodes);
        if(product.childNodes[i].className == "nameHere"){
          
            console.log(product.childNodes[i].textContent);
            deleteThis = product.childNodes[i].textContent;
        }
    }        
  
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    //console.log(deleteThis);
    // for(var prop in cartItems){
    //     console.log(prop);
    // }
    // Object.values(cartItems).forEach()
     console.log(Object.values(cartItems));
    // console.log(cartItems);
    // console.log(typeof cartItems);
    count = Object.keys(cartItems).length;
    for(var x=0; x < count; x++){
        //console.log("here");
        // console.log(JSON.stringify(cartItems));
        // console.log(Object.keys(cartItems));
        if(Object.values(cartItems)[x].name == deleteThis){
            //console.log("removed");
            //console.log(Object.values(cartItems));
            //console.log(Object.values(cartItems)[x])
            //Object.values(cartItems).splice(x,1);
            if(x==0){
             newList = Object.values(cartItems).slice(x+1,count);
             //console.log(Object.values(newList));
             newcount = Object.values(newList).length;
             allClear();
             for(var i=0; i<newcount; i++){
                 cartNumbers(Object.values(newList)[i]);
                 setItems(Object.values(newList)[i]);
                 totalCost(Object.values(newList)[i]);
             }
             //localStorage.setItem('cartNumbers',newcount);
            }else{

               // console.log("else triggered");
                flist = Object.values(cartItems).slice(0,x);
                slist = Object.values(cartItems).slice(x+1,count);
                fcount = Object.values(flist).length;
                scount = Object.values(slist).length;
                allClear();
                for(var i=0; i<fcount; i++){
                    cartNumbers(Object.values(flist)[i]);
                    setItems(Object.values(flist)[i]);
                    totalCost(Object.values(flist)[i]);
                }
                for(var i=0; i<scount; i++){
                    cartNumbers(Object.values(slist)[i]);
                    setItems(Object.values(slist)[i]);
                    totalCost(Object.values(slist)[i]);
                }
                //localStorage.setItem('cartNumbers',(fcount+scount));
                //console.log(Object.values(flist));
                //console.log(Object.values(slist));
            }
            //console.log(Object.values(cartItems));
            //localStorage.removeItem(Object.values(cartItems)[x]);
            //onLoadCartNumbers();
            break;
        }
    }
    setFromDelete = false;
}

// function setCartValue(){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){

//     }
// }

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    //console.log(product);
    //console.log(product.tag);

    if(cartItems != null){

        if(cartItems[product.tag]==undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        if(!setFromDelete && !setFromlowQ){
            cartItems[product.tag].inCart += 1;
        }
    }else{
        if(!setFromlowQ){ 
        product.inCart = 1;
        }
        cartItems={
            [product.tag]:product
        };
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost =  localStorage.getItem('totalCost');

    if(cartCost != null){
        if(setFromlowQ){
            cartCost = parseInt(cartCost);
            localStorage.setItem('totalCost', cartCost + (product.price * product.inCart));
        }else{
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
        }
    }else{
        localStorage.setItem("totalCost",product.price * product.inCart);
    }

    console.log("my cartcost", cartCost);
}

function allClear(){
    localStorage.clear();
    window.localStorage.clear();
    location.reload()
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-window-close" onClick="deleteItem(this.parentElement)"></i>
                <img class="w-25 h-100 m-2" src="images/rt/${item.tag}.jpg">
                <span class="nameHere">${item.name}</span>
            

            <div class="price">
                $${item.price}
            </div>

            <div class="quantity">
                <i class="fas fa-chevron-circle-left" onClick="lowQ(this.parentElement.parentElement)"></i>
                <span class="cartVal">${item.inCart}</span>
                <i class="fas fa-chevron-circle-right" onClick="highQ(this.parentElement.parentElement)"></i>
            </div>

            <div class="total">
                $${item.inCart * item.price}.00
            </div>

            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total:
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}.00
                </h4>
            </div>
        `;

        productContainer.innerHTML += `
        <div class="AC">
            <button type="submit" onclick="allClear()">Clear</button>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();