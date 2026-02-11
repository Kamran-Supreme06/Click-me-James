const photos = document.querySelectorAll(".photos img");
let currentPhoto = 0;
const memories = document.getElementById("memories");

// Show memories AFTER intro text
setTimeout(() => {
  memories.style.opacity = 1;
}, 6500);


setInterval(() => {
  photos[currentPhoto].classList.remove("active");
  currentPhoto = (currentPhoto + 1) % photos.length;
  photos[currentPhoto].classList.add("active");
}, 3000);

const question = document.getElementById("question");

// Show question AFTER text finishes
setTimeout(() => {
  question.style.opacity = 1;
}, 8000);


const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let noClickCount = 0;

const noTexts = [
  "Are you sure? 🥺",
  "That would make me sad 💔",
  "You don’t want to click me 😭",
  "Think again 😳",
  "Okay but… why 😩"
 
];

noBtn.addEventListener("click", () => {
  // Change text
  noBtn.textContent = noTexts[noClickCount % noTexts.length];

  // Move NO button
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Grow YES button
  noClickCount++;
  let scale = 1 + noClickCount * 0.25;
  yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#1e3c72,#2a5298);
      color:white;
      text-align:center;
      padding:20px;
      gap:15px;">

      <img src="teddy.gif" alt="Teddy Bear Love" style="width:180px;">

      <h1>YAYYY 💖🎉</h1>
      <h2>You just made me the happiest girl in the world 😌</h2>
      <h2>I can't wait to spend Valentine’s Day with you my love 💕</h2>

    </div>
  `;
});







