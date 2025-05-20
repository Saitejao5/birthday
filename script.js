function startSurprise() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";

  // Start music
  const music = document.getElementById("bg-music");
  music.play().catch(() => {
    alert("Click the page to enable sound if blocked by browser.");
  });

  // Start floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.color = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff85c1"][Math.floor(Math.random() * 4)];
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 500);

  // 🎉 Confetti blast
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

const letterLines = [
  "My Dearest Raji, 💖",
  "From the moment our paths crossed, my world has been bathed in stardust.",
  "You are my calm in chaos, my poetry in silence, my joy in the everyday.",
  "I find myself smiling for no reason — then I remember, you're the reason.",
  "Each heartbeat whispers your name, and every star above reminds me of your sparkle.",
  "In this vast universe, I'm endlessly grateful that you are mine.",
  "Forever yours, with all my love,",
  "— Your Moonlight Poet 🌙✨"
];

const typewriterContainer = document.getElementById('love-letter');
typewriterContainer.style.maxWidth = '800px';
typewriterContainer.style.margin = '4rem auto';
typewriterContainer.style.fontFamily = "'Great Vibes', cursive";
typewriterContainer.style.fontSize = '1.8rem';
typewriterContainer.style.lineHeight = '2.4rem';
typewriterContainer.style.textAlign = 'center';

let currentLine = 0;

function typeNextLine() {
  if (currentLine >= letterLines.length) return;
  const p = document.createElement('p');
  p.textContent = '';
  typewriterContainer.appendChild(p);

  let charIndex = 0;
  const text = letterLines[currentLine];

  function typeChar() {
    if (charIndex < text.length) {
      p.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 70);
    } else {
      currentLine++;
      setTimeout(typeNextLine, 800);
    }
  }

  typeChar();
}

// Start typewriter after 1s delay once main content is visible
function startTypewriterEffect() {
  setTimeout(typeNextLine, 1000);
}

// Trigger after reveal
function startLoveStory() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('bg-music').play();
  startConfetti();
  startTypewriterEffect();
}
