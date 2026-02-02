// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const flowerImg = document.getElementById("flowers");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },40);
});
let c = 1;
noBtn.addEventListener("mousever", () => {
    if (c >= 1 && c <= 10000){
        noBtn.style.transition = "transform 0.2s ease";
        noBtn.style.transform = `translate(${100}px, ${0}px)`;
        c++;

    }else if(c >= 50 && c <= 200){
    const min = 100;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.8s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

  
});
let moveCount = 1;
let step = 80;
let posX = 0;
let posY = 0;

noBtn.addEventListener("mouseover", () => {
    moveCount++;
  
    if (moveCount <= 6) {
      // 1–3 → right
      posX += step;
  
    } else if (moveCount <= 12) {
      // 4–6 → up
      posY -= step;
  
    } else if (moveCount <= 24) {
      // 7–9 → left
      posX -= step;
  
    } else if (moveCount <= 32) {
      // 10–12 → down
      posY += step;
    } else if (moveCount <= 39) {
    // 7–9 → right
    posX += step;
    } else if (moveCount <= 41) {
        // 4–6 → up
        posY -= step;
    } else {
        moveCount = 1;
    }
  
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${posX}px, ${posY}px)`;
  });
  
// Logic to move the NO btn



// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

let count=1;
noBtn.addEventListener("click", () => {

if(count===1){
    const messages = [
        "are you suree 🥺",
      ];
      
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMsg);
      yesScale += 1.2;
      count = count + 1;
      if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";
         yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
       }else{
          yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        }
}else if(count==5){
    window.location.href = "gjd.html";
}else{

yesScale += 1.4;
count = count + 1;
const messages = [
    "try againnn",
    "coba lg lol 💔"
  ];
  
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMsg);

 if (yesBtn.style.position !== "fixed") {
  yesBtn.style.position = "fixed";
   yesBtn.style.top = "50%";
   yesBtn.style.left = "50%";
  yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
 }else{
    yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
  }

}
 });

// YES is clicked

yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
    title.textContent = "lollll";

    catImg.src = "gif.gif";

    document.querySelector(".letter-window").classList.add("final");
    flowerImg.src = "flower.png";
    buttons.style.display = "none";
    finalText.style.display = "block";
});
