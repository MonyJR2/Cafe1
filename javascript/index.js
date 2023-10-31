const img = document.querySelector(".pic");
const menu = document.querySelector(".menu");
const item = document.querySelector(".item-all");
const select = document.querySelector("selected");
const show = document.querySelector(".add");
const search = document.querySelector(".search");
const header = document.querySelector("header");
const profile2 = document.querySelector(".profile");
const pro_img=document.querySelector(".pro-img")
const icon_footer=document.querySelectorAll(".icon-footer")
const alet=document.querySelector(".alet-buy");
const alet_footer=document.querySelector(".alet-footer")
const alet_card=document.querySelector(".alet-card")


import { profile,pro } from "./index2.js";


const fun_aa = () => {
    profile2.innerHTML = profile
        .map(
            (p) => `
        <div class="pro-head">
            <span id="back3"><i id="back4" class="fa-solid fa-chevron-down fa-xl"></i></span>
            <h2>Profile</h2>
            <span id="sit"><i class="fa-solid fa-circle-info fa-xl"></i></span>
        </div>
        <div class="pro-img">
            <img src="${p.img}" alt="">
            <h1>${p.name}</h1>
            <div class="pro-sex">
                <h3>${p.sex}</h3>
                <h3>${p.phone}</h3>
            </div>
            <h3>Address:${p.add}</h3>
        </div>
        <div class="money">
            <div class="money-1">
                <h4>Your Walet</h4>
                <h4>${p.money}$</h4>
                <h4>Show history</h4>
            </div>
            <div class="money-2">
                <span id="card"><i class="fa-regular fa-credit-card fa-2xl"></i></span>
            </div>

        </div>
        `
        )
        .join("");
};


    item.innerHTML = pro
.map(
    (pro) =>
        `<div class="box">
        <h2 id="h2_pro">${pro.id}</h2>
<img src="${pro.img}" alt="${pro.img}">
<h1>${pro.name}</h1>

<h1>${pro.price}$</h1>
</div>`
)
.join("");





img.addEventListener("click", () => {
    img.classList.add("aa");
    fun_aa();
    if (img.classList.contains("aa")) {
        item.style.marginLeft = "-200%";
        menu.style.marginTop = "-200%";
        profile2.style.display = "flex";
        header.style.display = "none";
        pro_img.style.display="block";
        show.style.display="none"
    }
    const back3 = document.querySelector("#back3");
    const i = document.querySelector("#back4");
    const card=document.querySelector("#card")

    card.addEventListener("click",()=>{
        alet_card.style.display="flex";
    })
    back3.addEventListener("click", (e) => {
        if (e.target == i) {
            img.classList.remove("aa");
            item.style.marginLeft = "0%";
            menu.style.marginTop = "0%";
            profile2.style.display = "flex";
            header.style.display = "flex";
            show.style.display="grid"
            profile2.innerHTML = "";
            set_ul.style.marginLeft='-100%'
            
        }
        
        })
    const sitt=document.querySelector("#sit");
    const set=document.querySelector(".setting")
    const set_ul=document.querySelector(".ul-set")
    sitt.addEventListener("click",()=>{
        set_ul.classList.toggle("a2")
        if(set_ul.classList.contains("a2"))
        {
            set_ul.style.marginLeft='37%'
        }else{
            set_ul.style.marginLeft='-100%'
        }
        
            
    });
    
});
const arr = [];

const find_all = (ID) => {
    const find = pro.find((item) => item.id == ID);
    if (find) {
        arr.push(find);
        show.innerHTML = arr
            .map(
                (item) =>
                    `<div class="select">
    <span class="lack"><i class="fa-solid fa-arrow-left fa-xl"></i></span>
            <div class="box-img1">
        <img src="${item.img}" alt="${item.img}">
        </div>
        <h1>${item.name}</h1>
        <p>${item.title}</p>
        <h1>${item.price}$</h1>
        <div class="buyer">
        <span class="heart"><i id="heat" class="fa-regular fa-heart fa-xl"></i></span>
        <span class="like"><i id="like" class="fa-regular fa-thumbs-up fa-xl"></i></span>
        <button id="Buy">BUY NOW</button>
    </div>
    </div>`
            )
            .join("");
    }
    arr.length =0;
    arr1.length=0;

};


var element = document.querySelector(".title-java");
  
  // Store the original text
  var originalText = element.textContent;
  
  // Function to type the text and erase it indefinitely
  function typeAndEraseText() {
    var index = 0;
    var direction = 1; // 1 for typing, -1 for erasing

    function animateText() {
      element.textContent = originalText.substring(0, index);

      if (direction === 1) {
        index++;
        if (index > originalText.length) {
          direction = -1;
          setTimeout(animateText, 1000); // Wait for a second before erasing
        } else {
          setTimeout(animateText, 100); // Typing speed
        }
      } else {
        if (index === 0) {
          direction = 1;
          setTimeout(animateText, 1000); // Wait for a second before typing
        } else {
          index--;
          setTimeout(animateText, 50); // Erasing speed
        }
      }
    }

    animateText();
  }

  typeAndEraseText();




const work_click =()=>{
    const box1 = document.querySelectorAll(".box");
    box1.forEach((box) => {
        box.addEventListener("click", () => {
            const boxName = box.querySelector("h2").textContent;
            find_all(boxName);
            item.style.display = "none";
            menu.style.display = "none";
            header.style.display = "none";
            const box_footer=document.querySelector(".box-footer");
            box_footer.style.display ="none";
            const back1 = document.querySelector(".lack");
            console.log(back1);
            back1.addEventListener("click", () => {
                item.style.display = "grid";
                menu.style.display = "flex";
                header.style.display = "flex";
                show.innerHTML = "";
                arr.length = 0;
                arr1.length=0;
                box_footer.style.display ="flex";
                alet.style.display="none";
            });
    
            const like = document.querySelector(".like");
            const heart = document.querySelector(".heart");
            const i = document.querySelector("#heat");
            const i2 = document.querySelector("#like");
            console.log(like, heart);
            heart.addEventListener("click", (e) => {
                if (e.target == i) {
                    i.classList.replace("fa-regular", "fa-solid");
                    i2.classList.replace("fa-solid","fa-regular"); 
                }
            });
            like.addEventListener("click", (e) => {
                if (e.target == i2) {
                    i2.classList.replace("fa-regular", "fa-solid"); 
                    i.classList.replace("fa-solid","fa-regular"); 
                }
                
            });
            const buy_btn=document.querySelector("#Buy");
        buy_btn.addEventListener("click",()=>{
            alet.style.display="flex";
        });
            console.log(buy_btn);
        });
    });
}

work_click();

const arr1=[];
const filter_item=(name)=>{
    const finder=pro.filter((pp)=>pp.name===name);
    if (finder.length > 0) {
        arr1.push(...finder);
        
        show.innerHTML = arr1.map((pro) => (
            `<div class="box">
            <h2 id="h2_pro">${pro.id}</h2>
                <img src="${pro.img}" alt="${pro.img}">
                <h1>${pro.name}</h1>
                <h1>${pro.price}$</h1>
            </div>`
        )).join("");
            arr1.length=0
    }
    work_click()
}
    
   menu.addEventListener("click",(e)=>{  
   if(e.target.innerHTML==="Show All"){
    menu.classList.toggle("bar-under")
    show.innerHTML = pro
    .map(
        (pro) =>
            `<div class="box">
            <h2 id="h2_pro">${pro.id}</h2>
    <img src="${pro.img}" alt="${pro.img}">
    <h1>${pro.name}</h1>
    <p>${pro.title}</p>
    <h1>${pro.price}$</h1>
    </div>`
    )
    .join("");
    item.style.display="grid"
    show.innerHTML=""
    arr1.length=0
    arr.length=0

   }  
   else if(e.target.innerHTML=="Coffee"){ 
    menu.classList.toggle("bar-under")
    const name = "coffee"
    filter_item(name) 
    item.style.display="none"
    arr1.length=0
    }
   else if(e.target.innerHTML=="Green Tea"){ 
    const name="Green tea"
    filter_item(name) 
    item.style.display="none"
    arr1.length=0;
    }
   else if(e.target.innerHTML=="Cake"){ 
    const name="Cake"
    filter_item(name)
    item.style.display="none"
    arr1.length=0;
    }
    else if(e.target.innerHTML=="Coca"){ 
        const name="Coca"
        filter_item(name)
        item.style.display="none"
        arr1.length=0;
    }
    else if(e.target.innerHTML=="Sting"){ 
            const name="Sting"
            filter_item(name)
            item.style.display="none"
            arr1.length=0;
    }
   
})

console.log(icon_footer);

const run_footer = () => {

    icon_footer.forEach((icon) => {
        icon.addEventListener("click", () => {
            const iconClass = icon.querySelector('i').classList;
            if (iconClass.contains('fa-house')) {
                img.classList.remove("aa");
                item.style.marginLeft = "0%";
                menu.style.marginTop = "0%";
                profile2.style.display = "flex";
                header.style.display = "flex";
                show.style.display="grid"
                profile2.innerHTML = "";
                set_ul.style.marginLeft='-100%'


            } else if (iconClass.contains('fa-message')) {
                alet_footer.style.display="flex";
            }else if (iconClass.contains('fa-cart-plus')) {
                alet_footer.style.display="flex";
            }else if (iconClass.contains('fa-gear')) {
                alet_footer.style.display="flex";
            }
        });
    });
};

run_footer();

const x_alet=document.querySelector("#x-alet");
x_alet.addEventListener("click",()=>{
    alet.style.display="none";
})
const x_alet1=document.querySelector("#x-alet1");
x_alet1.addEventListener("click",()=>{
    alet_footer.style.display="none";
})
const x_alet2=document.querySelector("#x-alet2");
x_alet2.addEventListener("click",()=>{
    alet_card.style.display="none";
})