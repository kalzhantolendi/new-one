
        



// video task 2


// function addAnimation() {
//     var imgElement = document.getElementById("img");
//     var textElement = document.getElementById("main");

//     imgElement.classList.add("slide-down");
//     textElement.classList.add("slide-down");

//     setTimeout(() => {
//         imgElement.classList.remove("slide-down");
//         textElement.classList.remove("slide-down");
//     }, 1000);
// }

// $("#img").animate({left:'+=100px', opacity:'0'},   "slow");
//     $("#img").animate({left:'-=100px', opacity:'1'}, "slow");
//     $("#main").animate({left:'+=100px', opacity:'0'},   "slow");
//     $("#main").animate({left:'-=100px', opacity:'1'}, "slow");



// function change(element){
//     var a = element.innerHTML;
//     switch(a){
        
//         case"Coffee":
//         document.getElementById("img").src ="png-clipart-instant-coffee-caffe-mocha-espresso-irish-coffee-coffee-cafe-coffee-thumbnail-fotor-bg-remover-20250204192553.png";
//          document.getElementById("text").innerHTML = "Hey this is coffee with chocolate";
//          addAnimation();
//         break;


//         case"Order Online":
//         document.getElementById("img").src= "Screenshot 2025-02-04 193336-fotor-bg-remover-2025020419344.png";
//          document.getElementById("text").innerHTML = "This is coffee with hot chocolate!";
//          addAnimation();
//         break;


//         case"About Us":
//         document.getElementById("img").src= "cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX2NvZmZlZV9pc29sYXRlX29uX3doaXRlX2JhY2tncm91bmRfNGViMWYxNzMtZWQzMS00NTI5LWEyYWEtYzlmZjY1YTBhMjhjLnBuZw-fotor-bg-remover-20250204193914.png";
//         document.getElementById("text").innerHTML = "This is coffee with milk!";
//         addAnimation();
//         break;


//         case"Contacts":
//         document.getElementById("img").src= "image-fotor-bg-remover-20250204194248.png";
//          document.getElementById("text").innerHTML = "Do you like this ICE-coffee? :)";
//          addAnimation();
//         break;



//     }
     
   
// }
// function big(element){
//     element.style. fontSize = "40px";
// }



// function small(element){
//    element.style. fontSize = "30px";
// }




















// // TASK1


// let a;
// a = document.getElementById("soz");
// a.innerHTML = "Sourse Java script";

// document.getElementById('container').style.display = "flex";
// document.getElementById('me').style.width = "400px";
// document.getElementById('container').style.justifyContent = "space-around";
// document.getElementById('me').style.borderRadius = "50%";

// let btnPrev = document.getElementById("btnPrev");
// let btnNext = document.getElementById("btnNext");
// let me = document.getElementById("me"); // Image element

// let img1 = "hIdELG4.png";
// let img2 = "images (1).jpeg";
// let img3 = "Rectangle 26.png";
// let img4 = "Ellipse 3 (2).png";

// const images = [img1, img2, img3, img4];

// let i = 0;


// function changeImg() {
//     i--;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     me.src = images[i];

//     let width = me.offsetWidth;
//     me.style.width = width - 20 + "px";
    
 
// }

// function changeImg2() {
//     i++;
//     me.src = images[i % images.length];
//     let width = me.offsetWidth;
//     me.style.width = width + 20 + "px";

// }

// btnPrev.onclick = changeImg;
// btnNext.onclick = changeImg2;







const images = [];
for (let i = 1; i <= 9; i++) {
    images[i] = document.getElementById(`img${i}`);
}


function resetImages() {
    for (let i = 1; i <= 9; i++) {
        images[i].src = "./js_task3_FACE/тіке.jpg";
    }
}


images[1].addEventListener("mouseover", () => {
    resetImages();
    images[1].src = "./js_task3_FACE/тіке.jpg";
    images[2].src = "./js_task3_FACE/оң.jpg";
    images[3].src="./js_task3_FACE/оң.jpg";
    images[4]. src="./js_task3_FACE/төбе.jpg";
    images[5]. src="./js_task3_FACE/оңжоғары.jpg";
    images[6]. src="./js_task3_FACE/оңжоғары.jpg";
    images[7]. src="./js_task3_FACE/төбе.jpg";
    images[8]. src="./js_task3_FACE/оңжоғары.jpg";
    images[9]. src="./js_task3_FACE/оңжоғары.jpg";
});

images[2].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/сол.jpg";
    images[2]. src="./js_task3_FACE/тіке.jpg";
    images[3]. src="./js_task3_FACE/оң.jpg";
    images[4].  src="./js_task3_FACE/солжоғары.jpg";
    images[5]. src="./js_task3_FACE/төбе.jpg";
    images[6]. src="./js_task3_FACE/оңжоғары.jpg";
    images[7]. src="./js_task3_FACE/солжоғары.jpg";
    images[8]. src="./js_task3_FACE/төбе.jpg";
    images[9]. src="./js_task3_FACE/оңжоғары.jpg";
});

images[3].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/сол.jpg";
    images[2]. src="./js_task3_FACE/сол.jpg";
    images[3]. src="./js_task3_FACE/тіке.jpg";
    images[4]. src="./js_task3_FACE/солжоғары.jpg";
    images[5]. src="./js_task3_FACE/солжоғары.jpg";
    images[6]. src="./js_task3_FACE/төбе.jpg";
    images[7]. src="./js_task3_FACE/солжоғары.jpg";
    images[8]. src="./js_task3_FACE/солжоғары.jpg";
    images[9]. src="./js_task3_FACE/төбе.jpg";
});

images[4].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/асты.jpg";
    images[2]. src="./js_task3_FACE/оңтөмен.jpg";
    images[3]. src="./js_task3_FACE/оңтөмен.jpg";
    images[4]. src="./js_task3_FACE/тіке.jpg";
    images[5]. src="./js_task3_FACE/оң.jpg";
    images[6]. src="./js_task3_FACE/оң.jpg";
    images[7]. src="./js_task3_FACE/төбе.jpg";
    images[8]. src="./js_task3_FACE/оңжоғары.jpg";
    images[9]. src="./js_task3_FACE/оңжоғары.jpg";
});

images[5].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/солтөмен.jpg";
    images[2]. src="./js_task3_FACE/асты.jpg";
    images[3]. src="./js_task3_FACE/оңтөмен.jpg";
    images[4]. src="./js_task3_FACE/сол.jpg";
    images[5]. src="./js_task3_FACE/тіке.jpg";
    images[6]. src="./js_task3_FACE/оң.jpg";
    images[7]. src="./js_task3_FACE/солжоғары.jpg";
    images[8]. src="./js_task3_FACE/төбе.jpg";
    images[9]. src="./js_task3_FACE/оңжоғары.jpg";
});

images[6].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/солтөмен.jpg";
    images[2]. src="./js_task3_FACE/солтөмен.jpg";
    images[3]. src="./js_task3_FACE/асты.jpg";
    images[4]. src="./js_task3_FACE/сол.jpg";
    images[5]. src="./js_task3_FACE/сол.jpg";
    images[6]. src="./js_task3_FACE/тіке.jpg";
    images[7]. src="./js_task3_FACE/солжоғары.jpg";
    images[8]. src="./js_task3_FACE/солжоғары.jpg";
    images[9]. src="./js_task3_FACE/төбе.jpg";
});

images[7].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/асты.jpg";
    images[2]. src="./js_task3_FACE/оңтөмен.jpg";
    images[3]. src="./js_task3_FACE/оңтөмен.jpg";
    images[4]. src="./js_task3_FACE/асты.jpg";
    images[5]. src="./js_task3_FACE/оңтөмен.jpg";
    images[6]. src="./js_task3_FACE/оңтөмен.jpg";
    images[7]. src="./js_task3_FACE/тіке.jpg";
    images[8]. src="./js_task3_FACE/оң.jpg";
    images[9]. src="./js_task3_FACE/оң.jpg";
});

images[8].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/солтөмен.jpg";
    images[2]. src="./js_task3_FACE/асты.jpg";
    images[3]. src="./js_task3_FACE/оңтөмен.jpg";
    images[4]. src="./js_task3_FACE/солтөмен.jpg";
    images[5]. src="./js_task3_FACE/асты.jpg";
    images[6]. src="./js_task3_FACE/оңтөмен.jpg";
    images[7]. src="./js_task3_FACE/сол.jpg";
    images[8]. src="./js_task3_FACE/тіке.jpg";
    images[9]. src="./js_task3_FACE/оң.jpg";
});

images[9].addEventListener("mouseover", () => {
    resetImages();
    images[1]. src="./js_task3_FACE/солтөмен.jpg";
    images[2]. src="./js_task3_FACE/солтөмен.jpg";
    images[3]. src="./js_task3_FACE/асты.jpg";
    images[4]. src="./js_task3_FACE/солтөмен.jpg";
    images[5]. src="./js_task3_FACE/солтөмен.jpg";
    images[6]. src="./js_task3_FACE/асты.jpg";
    images[7]. src="./js_task3_FACE/сол.jpg";
    images[8]. src="./js_task3_FACE/сол.jpg";
    images[9]. src="./js_task3_FACE/тіке.jpg";
});
