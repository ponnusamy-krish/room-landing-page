let resnavbtn = document.querySelector(".resnavbtn")
let resnavbar = document.querySelector(".res-nav-bar")
let closebtn = document.querySelector(".closebtn")
let bgopacity = document.querySelector(".bgopacity")




resnavbtn.addEventListener("click",()=>{
  resnavbar.style.transform= "translateY(1%)"
  bgopacity.style.zIndex = 1
})


closebtn.addEventListener("click", ()=>{
  resnavbar.style.transform= "translateY(-100%)"
  bgopacity.style.zIndex = -5

 
})





let contents = [  ` <div class="dynamic-content">
<div>
<h1>Discover innovative ways to decorate</h1>
</div>


<div>
<p> We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.</p>
</div>

<div>
<h4 style="display: inline;">SHOP NOW</h4> <img src="./images/icon-arrow.svg" class="arrow" >
</div>
</div>

</div>`,


` <div class="dynamic-content">
<div>
<h1>We are available all across the globe</h1>
</div>


<div>
<p> With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.</p>
</div>

<div>
<h4 style="display: inline;">SHOP NOW</h4> <img src="./images/icon-arrow.svg" class="arrow" >
</div>
</div>

</div>`,
` <div class="dynamic-content">
<div>
<h1>Manufactured with the best materials</h1>
</div>


<div>
<p> Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.</p>
</div>

<div>
<h4 style="display: inline;">SHOP NOW</h4> <img src="./images/icon-arrow.svg" class="arrow" >
</div>
</div>

</div>`

]




let images;

images = ["./images/desktop-image-hero-1.jpg",
"./images/desktop-image-hero-2.jpg" ,
"./images/desktop-image-hero-3.jpg"]
if(window.innerWidth>786){


}

else if(window.innerWidth<786){
 images = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
]
}
 //<div class=" item1 " style="background-image: url(./images/desktop-image-hero-1.jpg);"></div>
 
let datum = [

    {}
    
]




let leftBtn = document.querySelector(".angle-left")
let rightBtn = document.querySelector(".angle-right")
let image = document.querySelector(".item1")

i = 0
j = 0


if(window.innerWidth<786){
image.style.backgroundImage = `url("./images/mobile-image-hero-1.jpg")`

}

let dynamicContents = document.querySelector(".item2") 

let dynamicInnerContents = document.querySelector(".dynamic-content")



rightBtn.addEventListener("click" , () => {
  
  
    console.log("right");
    i++
    j++
   image.style.backgroundImage = `url(${images[i]})`

    dynamicContents.innerHTML = contents[j]
   
    console.log(i);

   if(i>=2 || j >= 2){
    i = -1
    j=-1
   }

  })

  
console.log(i);
  leftBtn.addEventListener("click" , () => {
    if(i <= 0 || j <= 0){
      i=2
      j=2
    }
    console.log("left");
    i--
    j--
   image.style.backgroundImage = `url(${images[i]})`
   console.log(i);

   dynamicContents.innerHTML = contents[j]
  


  

  })
 
