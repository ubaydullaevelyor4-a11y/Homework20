
function fireConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  document.getElementById("text").innerText = "Tabriklaymiz!!! 🎊";
}
confetti({
  particleCount: 200,
  spread: 90,
  colors: ['#ff0000', '#00ff00', '#0000ff']
});
setInterval(() => {
  confetti();
}, 500);