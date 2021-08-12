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
        name: 'Red Hoodie',
        tag: 'rh',
        price: 40,
        inCart: 0
    },
    {
        name: 'Blue Jumper',
        tag: 'bj',
        price: 35,
        inCart: 0
    },
    {
        name: 'Aqua Tshirt',
        tag: 'at',
        price: 25,
        inCart: 0
    },
    {
        name: 'Orange Full',
        tag: 'd5',
        price: 70,
        inCart: 0
    },
    {
        name: 'Blue Full',
        tag: 'd6',
        price: 80,
        inCart: 0
    },
    {
        name: 'Pink Full',
        tag: 'd7',
        price: 40,
        inCart: 0
    },
    {
        name: 'Pink Full',
        tag: 'd7',
        price: 40,
        inCart: 0
    },
    {
        name: 'Blue Top',
        tag: 'btr',
        price: 35,
        inCart: 0
    }, 
    {
        name: 'Thread Top',
        tag: 'thr',
        price: 40,
        inCart: 0
    },
    {
        name: 'Red Top',
        tag: 'rtr',
        price: 30,
        inCart: 0
    },
    {
        name: 'Flora Top',
        tag: 'gtr',
        price: 70,
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
        price: 90,
        inCart: 0
    },
    {
        name: 'Jean Pant',
        tag: 'jb',
        price: 35,
        inCart: 0
    },
    {
        name: 'Flora Cozy',
        tag: 'fla',
        price: 40,
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




onLoadCartNumbers();