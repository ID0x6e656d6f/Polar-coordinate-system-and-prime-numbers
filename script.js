const canvas = document.getElementById('polarCanvas');
const ctx = canvas.getContext('2d');
const centerX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)/2;
const centerY = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)/2;
const radiusMultiplier = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function drawPolarPoint(angle, radius, i) {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillText(i, x, y+50)
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function drawPolarGraph() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 1; i <= 100000; i++) {
    if (isPrime(i)) {
      const angle = (i / 500) * 2 * Math.PI;
      const radius = i * radiusMultiplier;
      drawPolarPoint(angle, radius, i);
    }
  }
}

drawPolarGraph();