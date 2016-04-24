const context = new (window.AudioContext || window.webkitAudioContext)();
const osc = context.createOscillator();
osc.connect(context.destination);
osc.frequency.value = 440;
// osc.start();

document.onmousemove = function(event) {
  const x = event.pageX / window.innerWidth;
  const y = event.pageY / window.innerHeight;
  console.log(`x: ${x}, y: ${y}`);
}
