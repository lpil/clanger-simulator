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

function scaleFrequency(n) {
  var min = Math.log(A0);
  var max = Math.log(C8);
  var scale = max - min;
  return Math.exp(min + scale * n);
}

document.onmousemove = function(event) {
  const y = 1 - event.pageY / window.innerHeight;
  const x = event.pageX / window.innerWidth;
  osc.frequency.value  = scaleFrequency(x)
  mouseGain.gain.value = y;
}

document.onmousedown = function() { toggleGain.gain.value = 1; }
document.onmouseup   = function() { toggleGain.gain.value = 0; }
