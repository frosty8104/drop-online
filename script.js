const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
canvas.width = document.querySelector(".canvas").style.width = 80%;
canvas.height = 80%;
ctx.beginPath();
ctx.fillStyle = "#60affe";
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fill();