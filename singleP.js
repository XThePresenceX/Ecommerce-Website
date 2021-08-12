let carts = document.querySelectorAll('.buy-btn');
let setFromDelete = false;
let setFromlowQ = false;
let isFirst = false;

var MainImg = document.getElementById('MainImg');
var currImg = [MainImg.src.substr(-7,3)];
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick =()=>{
    MainImg.src= smallimg[0].src;
    //console.log(MainImg.src);
    currImg.push(MainImg.src.substr(-7,3));
    console.log(currImg, typeof currImg);
}

smallimg[1].onclick = ()=>{
    MainImg.src= smallimg[1].src;
    //console.log(MainImg.src);
    currImg.push(MainImg.src.substr(-7,3));
    console.log(currImg, typeof currImg);
}

smallimg[2].onclick = ()=>{
    MainImg.src= smallimg[2].src;
    //console.log(MainImg.src);
    currImg.push(MainImg.src.substr(-7,3));
    console.log(currImg);
}

smallimg[3].onclick = ()=>{
    MainImg.src= smallimg[3].src;
    //console.log(MainImg.src);
    currImg.push(MainImg.src.substr(-7,3));
    console.log(currImg);
}

// let remover = document.getElementsByClassName("fas fa-window-close");
// let lower = document.getElementsByClassName("fas fa-chevron-circle-left");

// for(let i=0; i < lower.length; i++){
//     lower[i].addEventListener('click', ()=>{
//         console.log("here");
//     })
// }
var thisNum = 1;
let products=[];
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        thisNum = document.getElementById("quants").value;
        thisNum = parseInt(thisNum);
        console.log(thisNum);
        let products = [
            {
                name: 'Proper Shirt',
                tag: currImg[currImg.length-1],
                price: 20,
                inCart: 0
            },
            {
                name: 'Blue Dress',
                tag: 'bb',
                price: 90,
                inCart: 0
            },
            {
                name: 'Jean Full',
                tag: 'jf',
                price: 90,
                inCart: 0
            },
            {
                name: 'Green Black',
                tag: 'gb',
                price: 45,
                inCart: 0
            },
            {
                name: 'Jade Blue',
                tag: 'jbm',
                price: 30,
                inCart: 0
            }
        ];
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
};

// function triggerthis(){
//     first = [
//         {
//         name: 'Proper Shirt',
//         tag: currImg[currImg.length-1],
//         price: 20,
//         inCart: 0
//         }
//     ];
//     products = [first, ...products];
//     console.log(products);
// }

// for(let i=0; i < remover.length; i++){
//     remover[i].addEventListener('click', function(event){
//         console.log(event);
//     }
//     )
// }

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.nav-item span').textContent = productNumbers;
    }
}


function cartNumbers(product){
    if(product.name == "Proper Shirt"){isFirst=true; console.log("true here")}
    if(!isFirst){
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.nav-item span').textContent = productNumbers + 1;
        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.nav-item span').textContent = 1;
        }
    }
    else{
        //console.log("The product is ", product);
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);
        thisNum = parseInt(thisNum);
        console.log(typeof productNumbers, typeof thisNum);
        if(productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + thisNum);
            document.querySelector('.nav-item span').textContent = productNumbers + thisNum;
        }else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.nav-item span').textContent = thisNum;
        }
    }
    setItems(product);
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
    thisNum = parseInt(thisNum);
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
            if(isFirst){
            cartItems[product.tag].inCart += thisNum;}
            else{
                cartItems[product.tag].inCart += 1;
            }
        }
    }else{
        if(isFirst){ 
        product.inCart = thisNum;
        }
        else{
            product.inCart = 1;
        }
        cartItems={
            [product.tag]:product
        };
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    isFirst = false;
    console.log("false here");
}

function totalCost(product){
    let cartCost =  localStorage.getItem('totalCost');

    if(cartCost != null){

        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + (product.price * product.inCart));

    }else{
        localStorage.setItem("totalCost",product.price * product.inCart);
    }

    //console.log("my cartcost", cartCost);
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