const canvas = document.getElementById('effect'); 
const ctx = canvas.getContext('2d');

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store star positions
const stars = [];

// Function to initialize stars
function initStars() {
  for (let i = 0; i < 1500; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1 // Adjust the speed as needed
    });
  }
}

// Function to draw stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white'; // Star color
    ctx.fill();
    ctx.closePath();

    // Update star position for animation
    star.x += star.speed;

    // Reset star position when it goes beyond the canvas
    if (star.x > canvas.width) {
      star.x = 0;
    }
  }

  requestAnimationFrame(drawStars);
}

// Initialize stars and start the animation
initStars();
drawStars();

// Resize canvas when the window is resized
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
});
