var i = 0;
var x = 0;
var y = 0;
var txt0 = 'ari'; /* The text */
var txt1 = 'titan.'
var txt2 = 'she/her, they/them'
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt0.length) {
    document.getElementById("irlName").innerHTML += txt0.charAt(i);
    i++;
  }
  if (x < txt1.length) {
    document.getElementById("userName").innerHTML += txt1.charAt(x);
    x++;
  }
  if (y < txt2.length) {
    document.getElementById("pronouns").innerHTML += txt2.charAt(y);
    y++;
  }
  setTimeout(typeWriter, speed);
}