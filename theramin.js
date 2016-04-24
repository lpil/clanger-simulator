const context = new (window.AudioContext || window.webkitAudioContext)();
const osc = context.createOscillator();
osc.connect(context.destination);
osc.frequency.value = 440;
// osc.start();
