const A0 = 27.5;
const C8 = 4186;

const context = new (window.AudioContext || window.webkitAudioContext)();
const osc     = context.createOscillator();
const mouseGain  = context.createGain();
const toggleGain = context.createGain();

osc.connect(mouseGain);
mouseGain.connect(toggleGain);
toggleGain.connect(context.destination);

toggleGain.gain.value = 0;
osc.frequency.value = 440;
osc.start();

document.onmousemove = function(event) {
  const y = 1 - event.pageY / window.innerHeight;
  mouseGain.gain.value = y;
}

document.onmousedown = function() { toggleGain.gain.value = 1; }
document.onmouseup   = function() { toggleGain.gain.value = 0; }
