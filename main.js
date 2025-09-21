const canvas = document.getElementById('effect'); 
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const amongUsImage = new Image();
amongUsImage.src = './images/among-us.png';

const amongUsCharacters = [];

function initStars() {
  for (let i = 0; i < 1500; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1 
    });
  }
}

function initAmongUs() {
  for (let i = 0; i < 3; i++) {
    amongUsCharacters.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      size: Math.random() * 50 + 30,
      angle: 0,
      rotationSpeed: Math.random() * 0.05 + 0.01
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white'; 
    ctx.fill();
    ctx.closePath();
    star.x += star.speed;
    if (star.x > canvas.width) {
      star.x = 0;
    }
  }
}

function drawAmongUs() {
  for (const character of amongUsCharacters) {
    character.angle += character.rotationSpeed;
    ctx.save();
    ctx.translate(character.x + character.size / 2, character.y + character.size / 2);
    ctx.rotate(character.angle);
    ctx.drawImage(amongUsImage, -character.size / 2, -character.size / 2, character.size, character.size);
    ctx.restore();
    character.x += character.dx;
    character.y += character.dy;
    if (character.x < 0 || character.x + character.size > canvas.width) {
      character.dx *= -1;
    }
    if (character.y < 0 || character.y + character.size > canvas.height) {
      character.dy *= -1;
    }
  }
}

function animate() {
  drawStars();
  drawAmongUs();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
  initAmongUs();
});

initStars();
initAmongUs();
animate();
