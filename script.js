var i = 0;
var x = 0;
var y = 0;
var txt0 = 'ari'; /* The text */
var txt1 = 'titan.'
var txt2 = 'she/her, they/them'
var speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  document.getElementById("eevee").src = eeveelutionsFiles[currentEevee]; /* to fix eevee */
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

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let b = 0; b <ca.length; b++) {
    let c = ca[b];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// const eeveelutions = [
//   ['eevee', '/icons/eeveelutions/eevee.png'], 
//   ['vapoureon', '/icons/eeveelutions/vapoureon.png'], 
//   ['jolteon', '/icons/eeveelutions/jolteon.png'], 
//   ['flareon', '/icons/eeveelutions/flareon.png'], 
//   ['espeon', '/icons/eeveelutions/espeon.png'], 
//   ['umbreon', '/icons/eeveelutions/umbreon.png'], 
//   ['leafeon', '/icons/eeveelutions/leafeon.png'], 
//   ['glaceon', '/icons/eeveelutions/glaceon.png'], 
//   ['sylveon', '/icons/eeveelutions/sylveon.png']
// ];
const eeveelutions = [
  'eevee',
  'vapoureon',
  'jolteon',
  'flareon',
  'espeon',
  'umbreon',
  'leafeon', 
  'glaceon', 
  'sylveon',
];
const eeveelutionsFiles = {
  'eevee': '/icons/eeveelutions/eevee.png', 
  'vapoureon': '/icons/eeveelutions/vapoureon.png', 
  'jolteon': '/icons/eeveelutions/jolteon.png', 
  'flareon': '/icons/eeveelutions/flareon.png', 
  'espeon': '/icons/eeveelutions/espeon.png', 
  'umbreon': '/icons/eeveelutions/umbreon.png', 
  'leafeon': '/icons/eeveelutions/leafeon.png', 
  'glaceon': '/icons/eeveelutions/glaceon.png', 
  'sylveon': '/icons/eeveelutions/sylveon.png'
};
if (getCookie('eeveeCookie') != '') {
  var currentEevee = getCookie('eeveeCookie')
} else {
  setCookie('eeveeCookie', 'eevee')
  var currentEevee = getCookie('eeveeCookie')
}
var v = (eeveelutions.indexOf(currentEevee));

function changeImage() {
  if (v >= 8) {
    v = 0;
  } else {
    v++;
  }
  currentEevee = eeveelutions[v]
  document.getElementById("eevee").src = eeveelutionsFiles[currentEevee];
  setCookie('eeveeCookie', currentEevee)
}
function spin3D(clicked_id) {
  element = document.getElementById(clicked_id)
  element.classList.add("spin3D")
  element.addEventListener("animationend", animationListener, once=true, false)
}

function spin2D(clicked_id) {
  element = document.getElementById(clicked_id)
  element.classList.add("spin2D")
  element.addEventListener("animationend", animationListener, once=true, false)
}

function animationListener(event) {
  switch (event.type) {
    case "animationend":
      element.classList.remove("spin3D")
      element.classList.remove("spin2D")
  }
}