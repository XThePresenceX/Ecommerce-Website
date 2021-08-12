const searchBar = document.getElementById('searchBar');
let carts = document.querySelectorAll('.buy-btn');

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
    },
    {
        name: 'Green Shirt',
        tag: 'grs',
        price: 20,
        inCart: 0
    },
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

filteredList = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);

    const filteredCharacters = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchString)
        );
    });
    // console.log(typeof filteredCharacters, filteredCharacters);
     filteredList.push(Object.values(filteredCharacters));
    displayCart(filteredCharacters);
});

function displayCart(product){
    console.log(product);
    let productContainer = document.querySelector(".products");
        productContainer.innerHTML = '';
        Object.values(product).map(item =>{
            productContainer.innerHTML += `
            <div class="product">
                <button class="buy-btn" onclick="doThis(this.parentElement)">Add to Cart</button>
                <img class="w-25 h-100 m-2" src="images/rt/${item.tag}.jpg">
                <span class="nameHere">${item.name}</span>
            

            <div class="price">
                $${item.price}
            </div>

            </div>
            `
        });
}

function doThis(product){
    console.log(filteredList);
    newList = filteredList[filteredList.length-1];
    console.log(newList);
    console.log(product);

    for (var i = 0; i < product.childNodes.length; i++) {
        for(var j=0; j<newList.length; j++){
            //console.log(product.childNodes);
            if(product.childNodes[i].className == "nameHere"){
                if(product.childNodes[i].textContent == newList[j].name){
                console.log(product.childNodes[i].textContent);
                cartNumbers(newList[j]);
                totalCost(newList[j]);    
                }
            }
        }
    }        
    // for(let i=0; i < newList.length; i++){
    //     newList[i].addEventListener('click', ()=>{
    //         cartNumbers(newList[i]);
    //         totalCost(newList[i]);
    //     })
    // };
    
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.nav-item span').textContent = productNumbers;
    }
}

function cartNumbers(product){

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
        cartItems[product.tag].inCart += 1;
        
    }else{
        product.inCart = 1;
        
        cartItems={
            [product.tag]:product
        };
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost =  localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price * product.inCart);
    }

    console.log("my cartcost", cartCost);
}


onLoadCartNumbers();
//displayCart();