var x = 0;
var y = 0;
var mctxt0 = 'betterThanHRT' /* The text */
var mctxt1 = 'mc.titanproto.cafe'
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (x < mctxt0.length) {
    document.getElementById("modpackName").innerHTML += mctxt0.charAt(x);
    x++;
  }
  if (y < mctxt1.length) {
    document.getElementById("serverName").innerHTML += mctxt1.charAt(y);
    y++;
    setTimeout(typeWriter, speed);
  }
}