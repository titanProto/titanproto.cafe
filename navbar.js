const navbar = document.getElementById("navigation");
navbar.innerHTML = `
<a href="/" id="home">home</a>
| 
<a href="/projects/" id="projects">projects</a>
| 
<a href="/identity/" id="identity">identity</a>
| 
<a href="/characters/" id="characters">characters</a>
`;

console.log(window.location.pathname);

let page = window.location.pathname
if (page == "/") {
	document.getElementById("home").className = "active";
} else if ( page.search("/projects/") != -1 ) {
	document.getElementById("projects").className = "active";
} else if ( page.search("/characters/") != -1 ) {
	document.getElementById("characters").className = "active";
} else if ( page.search("/identity/") != -1 ) {
	document.getElementById("identity").className = "active";
} ;
