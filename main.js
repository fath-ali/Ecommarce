let bars = document.querySelector('.bars');
let link = document.querySelector('.link');
let close1 = document.querySelector('.close');
bars.addEventListener('click',function(){
    link.classList.toggle('active')
})
close1.addEventListener('click',function(){
    link.classList.remove('active')
})

let service = [
    {
        id:0,
        image:"img/features/f1.png",
        btn:'login',
    },
    {
        id:1,
        image:"img/features/f2.png",
        btn:'login'
    },
    {
        id:2,
        image:"img/features/f3.png",
        btn:'login'
    },
    {
        id:3,
        image:"img/features/f4.png",
        btn:'login'
    },
    {
        id:4,
        image:"img/features/f5.png",
        btn:'login'
    },
    {
        id:5,
        image:"img/features/f6.png",
        btn:'login'
    },
]
let container = document.querySelector('.servicecontainer');
console.log(container);

let services = [...new Set(service.map(function(item){
    let result = item;
    return result;
}))];

container.innerHTML = services.map(function(item){
    let {image,btn} = item;
    return (
        `<div class='imageservice'>
           <img src =${image} >
           <button class='btn'>${btn}</button>`+
           "<h1>Select One Of Thme</h1>    </div>"
     

    )
})

let product =[
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
    }
]
let productContainer = document.querySelector('.product-container');
window.addEventListener('DOMContentLoaded',function(){
    let display = product.map(function(item){
        let i =0;
        return (
            `<div class='productbox'>
              <div class='product-image'>
               <img src=${item.image}>
              </div>
              <a>${item.link}</a>
              <h3>${item.text}</h3>
              <div class='product-icon'>
               <i>${item.icon}</i>
              </div>
               <p>${item.price}$</p>` +
                "<button class='btn'>Apply</button>     </div>"
        
            
            
        )
    })
    display =display.join("");
    productContainer.innerHTML = display;
})



let new1 =[
    {
        id:0,
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
        id:1,
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
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
        image:"img/products/n6.jpg",
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
        image:"img/products/n7.jpg",
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
        image:"img/products/n8.jpg",
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
let containernew =document.querySelector(".newcontainer");
window.addEventListener('DOMContentLoaded',function(){
    let display = new1.map(function(item){
        return (
            `<div class='newbox'>
              <div class='new-image'>
               <img src=${item.image}>
              </div>
              <a>${item.link}</a>
              <h3>${item.text}</h3>
              <div class='new-icon'>
               <i>${item.icon}</i>
              </div>
               <p>${item.price}$</p>` +
                "<button class='btn'>Apply</button> </div>"
            
        )
    })
    display =display.join("");
    containernew.innerHTML = display;
})

let free =[
    {
        id:0,
        heaing:'Crazy Deals',
        title:'buy 1 get 1 free',
        para:'Lorem ipsum dolor sit amet consectetur.',
        button:"learn more",
    },
    {
        id:1,
        heaing:'Crazy Deals',
        title:'buy 1 get 1 free',
        para:'Lorem ipsum dolor sit amet consectetur.',
        button:"learn more",
    }
];
let freecontainer = document.querySelector(".free1");
let frees = [...new Set(free.map(function(item){
    return item;
}))]
freecontainer.innerHTML = frees.map(function(item){
    let {heaing,title,para,button} = item;
    return (
        `<div class='freebox'>
        <div class='contentfree'>
          <h5>${heaing}</h5>
          <h2>${title}</h2>
          <p>${para}</p>
          <button>${button}</button>
          </div>
        </div>`
    )
})

let free3 =[
   {
    id:0,
    heading:'SEASONAL SAL',
    para:'Winter Collection',
   },
   {
    id:1,
    heading:'SEASONAL SAL',
    para:'Winter Collection',
   },
   {
    id:2,
    heading:'SEASONAL SAL',
    para:'Winter Collection'
   },
];
let free3box = document.querySelector(".free2");
let freeboxes = [...new Set(free3.map(function(item){
    return item;
}))]
free3box.innerHTML = freeboxes.map(function(item,index){

    const {heading,para,image } = item;
    return (
         `
         <div class='boxes'>
          <div class='boxescontent'>
        <h1>${heading}</h1>
         <p>${para}</p>
          </div> 
        </div>
        `
    )
})

// ------------------------------------------Shoping------------------------------------

let showcontent = document.querySelector('.shop-content');
let showbtn = document.querySelectorAll('.container-btn .btn');
let content =document.querySelectorAll('.content');
showcontent.addEventListener('click',function(e){
    let id = e.target.dataset.id;
    if(id){
        showbtn.forEach(function(btn){
             btn.classList.remove('active')
            e.target.classList.add("active")
        });
        content.forEach(function(art){
            art.classList.remove('active')
        })
        let display = document.getElementById(id);
        display.classList.add("active");
        console.log(display);
        
    }
})
// -----------------------------------------------------------------------------------------
// ---------------------------Form validation-------------------------------------------
let form = document.querySelector('form');
let username = document.querySelector("#username");
let email = document.querySelector('#Email');
let pass = document.querySelector('#password');
let repass = document.querySelector('#repassword');
let small = document.querySelectorAll('#text')
console.log(small.textContent);

form.addEventListener('submit',function(e){
    e.preventDefault();
  inputcheck();
})

function inputcheck(message){
    let usernamevalue = username.value.trim()
    let emailvalue = email.value.trim()
    let passvalue = pass.value.trim()
    let repassvalue = repass.value.trim();
    if(usernamevalue =='' && emailvalue =='' && passvalue =='' && repassvalue ===''){
        confirm("please Fill The blanck")
    }else{
       if(usernamevalue){
        small.classList.add('active')
       }
    }
}

// ----------------------------

let card = document.getElementById('modalbody');
let card1 = document.getElementById('card')
let re1 = document.getElementById('radio1')
let re2 = document.getElementById('radio2')
let modal1   = document.querySelector("#modal1");
re1.checked = true;
modal1.addEventListener('click',function(e){
    if(re2.checked ===true){
        card1.classList.add('show');
        card.classList.add('active')
        re1.checked = false
    }else if(re2.checked ===false){
        card1.classList.remove('show');
        card.classList.remove('active');
        re2.checked = false;
    }
})



