let carts = document.querySelectorAll('.buy-btn');
let setFromDelete = false;
let setFromlowQ = false;

let products = [
    {
        name: 'Green Shirt',
        tag: 'grs',
        price: 20,
        inCart: 0
    },
    {
        name: 'Red Hoodie',
        tag: 'rh',
        price: 38,
        inCart: 0
    },
    {
        name: 'Blue Jumper',
        tag: 'bj',
        price: 45,
        inCart: 0
    },
    {
        name: 'Aqua Tshirt',
        tag: 'at',
        price: 10,
        inCart: 0
    },
    {
        name: 'Orange Top',
        tag: 'd5',
        price: 70,
        inCart: 0
    },
    {
        name: 'Blue Top',
        tag: 'd6',
        price: 80,
        inCart: 0
    },
    {
        name: 'Pink Top',
        tag: 'd7',
        price: 30,
        inCart: 0
    },
    {
        name: 'Pink Top',
        tag: 'd7',
        price: 30,
        inCart: 0
    },
    {
        name: 'Blue Trans',
        tag: 'btr',
        price: 30,
        inCart: 0
    }, 
    {
        name: 'Threaded Top',
        tag: 'thr',
        price: 30,
        inCart: 0
    },
    {
        name: 'Red Trans',
        tag: 'rtr',
        price: 30,
        inCart: 0
    },
    {
        name: 'Green Trans',
        tag: 'gtr',
        price: 30,
        inCart: 0
    },
    {
        name: 'Green Tank',
        tag: 'grl',
        price: 30,
        inCart: 0
    },
    {
        name: 'Jean Full',
        tag: 'jf',
        price: 30,
        inCart: 0
    },
    {
        name: 'Jean Bottom',
        tag: 'jb',
        price: 30,
        inCart: 0
    },
    {
        name: 'Green Flora',
        tag: 'fla',
        price: 30,
        inCart: 0
    }
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
};


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
    //console.log(productNumbers);
    if(productNumbers){

    }
    else{
        let ele = document.getElementById('addhere');
        ele.innerHTML += '<h5 style="color:#343A40">Your Cart is Empty</h5>';
        ele.innerHTML += '<h4><a href="shop.html" style="color:coral">Add Items</a></h4>';
        let elem = document.getElementById('addherere');
        elem.innerHTML = ''
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
    let currVal = 0;
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

    Object.values(cartItems).map(e=>{
        if(e.name == nameThis){
            currVal = e.inCart;
        }
    })

    //console.log(currVal);
    if(currVal<=1){}
    else{
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
    }
    setFromlowQ = false;
}


function deleteItem(product){
    let distag = ""
    setFromDelete = true;
    deleteThis = "";
    console.log(product);
    for (var i = 0; i < product.childNodes.length; i++) {
        //console.log(product.childNodes);
        if(product.childNodes[i].className == "nameHere"){
          
            console.log(product.childNodes[i]);
            deleteThis = product.childNodes[i].textContent;
        }
    }        
    //console.log(deleteThis);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    Object.values(cartItems).map(e=>{
        if(e.name == deleteThis){
            distag = e.tag;
        }
    })

    console.log(distag)
    delete cartItems[distag];
    console.log(cartItems);
    //console.log(Object.keys(cartItems).length);
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    localStorage.setItem('cartNumbers', parseInt(Object.keys(cartItems).length));

    location.reload();
    // for(var i=0; i<cartItems.length; i++){
    //     cartNumbers(Object.values(cartItems)[i]);
    //     setItems(Object.values(cartItems)[i]);
    //     totalCost(Object.values(cartItems)[i]);
    // }
    //localStorage.setItem('productsInCart',cartItems);
    //console.log(deleteThis);
    // for(var prop in cartItems){
    //     console.log(prop);
    // }
    // Object.values(cartItems).forEach()
    //  console.log(Object.values(cartItems));
    // // console.log(cartItems);
    // // console.log(typeof cartItems);
    // count = Object.keys(cartItems).length;
    // for(var x=0; x < count; x++){
    //     //console.log("here");
    //     // console.log(JSON.stringify(cartItems));
    //     // console.log(Object.keys(cartItems));
    //     if(Object.values(cartItems)[x].name == deleteThis){
    //         //console.log("removed");
    //         //console.log(Object.values(cartItems));
    //         //console.log(Object.values(cartItems)[x])
    //         //Object.values(cartItems).splice(x,1);
    //         if(x==0){
    //          newList = Object.values(cartItems).slice(x+1,count);
    //          //console.log(Object.values(newList));
    //          newcount = Object.values(newList).length;
    //          allClear();
    //          for(var i=0; i<newcount; i++){
    //              cartNumbers(Object.values(newList)[i]);
    //              setItems(Object.values(newList)[i]);
    //              totalCost(Object.values(newList)[i]);
    //          }
    //          //localStorage.setItem('cartNumbers',newcount);
    //         }else{

    //            // console.log("else triggered");
    //             flist = Object.values(cartItems).slice(0,x);
    //             slist = Object.values(cartItems).slice(x+1,count);
    //             fcount = Object.values(flist).length;
    //             scount = Object.values(slist).length;
    //             allClear();
    //             for(var i=0; i<fcount; i++){
    //                 cartNumbers(Object.values(flist)[i]);
    //                 setItems(Object.values(flist)[i]);
    //                 totalCost(Object.values(flist)[i]);
    //             }
    //             for(var i=0; i<scount; i++){
    //                 cartNumbers(Object.values(slist)[i]);
    //                 setItems(Object.values(slist)[i]);
    //                 totalCost(Object.values(slist)[i]);
    //             }
    //             //localStorage.setItem('cartNumbers',(fcount+scount));
    //             //console.log(Object.values(flist));
    //             //console.log(Object.values(slist));
    //         }
    //         //console.log(Object.values(cartItems));
    //         //localStorage.removeItem(Object.values(cartItems)[x]);
    //         //onLoadCartNumbers();
    //         break;
    //     }
    // }
    // setFromDelete = false;
}


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
    //console.log("my cartcost", cartCost);
}

function setCheckout(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers > 0){
    let cartCost =  localStorage.getItem('totalCost');
    document.getElementById('final').innerHTML = '$' + cartCost;
    document.getElementById('check-amt').innerHTML =  '$' + Number((parseInt(cartCost) + 2.99).toFixed(2));
    document.getElementById('finalT').innerHTML = '$' +Number((parseInt(cartCost) + 2.99).toFixed(2));
    }
}

function successfulCheckout(){
    localStorage.clear();
    window.localStorage.clear();
    alert('Thank you for buying with Jenil B!');
    window.location.href='index.html';
}


function allClear(){
    localStorage.clear();
    window.localStorage.clear();
    //window.scrollTo(0,0);
    //window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    location.reload();
    // var scrollToTop = window.setInterval(function() {
    //     var pos = window.pageYOffset;
    //     if ( pos > 0 ) {
    //         window.scrollTo( 0, 0 ); // how far to scroll on each step
    //     } else {
    //         window.clearInterval( scrollToTop );
    //     }
    // }, 16); 
    //window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // //document.location.href = "#top";
    // scrollToTop();
}

function displayCart(){

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);


    if(productNumbers){
        let totalll =0;
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        //console.log(cartItems)
    
        let productContainer = document.querySelector(".products");
        Object.values(cartItems).map(item => {
            totalll += (item.price * item.inCart)
        })
        
        localStorage.setItem('totalCost', parseInt(totalll));

        let cartCost = localStorage.getItem('totalCost');


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
            if(productNumbers !=0){
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
    }   
}

onLoadCartNumbers();
displayCart();
checkCart();
setCheckout();