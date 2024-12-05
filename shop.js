let shop = [
    {
        id:0,
        image:"img/products/f1.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:1,
        image:"img/products/f2.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:2,
        image:"img/products/f3.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:3,
        image:"img/products/f4.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:4,
        image:"img/products/f5.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:5,
        image:"img/products/f6.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:6,
        image:"img/products/f7.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:7,
        image:"img/products/f8.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:8,
        image:"img/products/n1.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:9,
        image:"img/products/n2.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:10,
        image:"img/products/n3.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:11,
        image:"img/products/n4.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:12,
        image:"img/products/n5.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:13,
        image:"img/products/n5.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:14,
        image:"img/products/n5.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },
    {
        id:15,
        image:"img/products/n5.jpg",
        link :"addidas",
        text:`Cotton shirts pure cotton`,
        icon:`<i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>
        <i class='fas fa-star'></i>`,
     price:78,
    },

];
let shopcont = document.querySelector(".containershop");
let shopes = [...new Set(shop.map(function(item){   
    return item; 
}))]

shopcont.innerHTML = shopes.map(function(item ,index){

    var{image,link,text,icon ,price} = item;
    let i =0;
    return (
        
            `<div class='productbox'>
              <div class='product-image'>
               <img src=${image}>
              </div>
              <a>${link}</a>
              <h3>${text}</h3>
              <div class='product-icon'>
               <i>${icon}</i>
              </div>
               <p>${price}$</p>` +
                "<button class='btn' onclick='add("+(i++,index)+")'>Apply</button></div>"
        )
}).join("");

let cart =[];
let buy = document.getElementById('buying');
function add(a){

 cart.push({...shopes[a]})
 displaycart()
 buy.classList.add("active");
}

function displaycart(a){
    let j = 0;
    let total = 0;
    if(cart.length ==0){
        document.querySelector('.root').innerHTML = 'Empty cart Now Bro';
        document.getElementById('total').innerHTML = '$'+0+"000";
    }
    else{
        document.querySelector('.root').innerHTML = cart.map(function(item){
            var{image,link,price,text,link} =item;
            total =total+price;
            document.getElementById('total').innerHTML = "$" +total;
            return (
        
                `<div class='productbox1'>
                  <div class='product-image1'>
                   <img src=${image}>
                  </div>
                  <a>${link}</a>
                  <h3>${text}</h3>
                   <p>${price}$</p>` +
                    "<i class='fa-solid fa-trash' onclick='delete1("+(j++)+") '></i></div>"
            )
            
        }).join(".")
        console.log(j);
        
        
    }
}

function delete1(a){
        cart.pop();
    displaycart()
}

let buy1 = document.querySelector('#buying');
let btnclose = document.querySelector(".buyicon");
btnclose.addEventListener('click',closebuy)
function closebuy(){
    buy1.classList.remove('active')
}







const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let x=0;
let timer=0;

prevEl.addEventListener("click",()=>{
    x = x + 55;
    // clearTimeout(timer);
    clearTimeout(timer)
    updateContainer();
})

nextEl.addEventListener("click",()=>{
    x = x - 45;
    clearTimeout(timer);
    updateContainer();
})

function updateContainer(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 2000);
}

updateContainer();


// ----------------------------form shoiing---------------------
let username = document.getElementById('username');
console.log(username);
