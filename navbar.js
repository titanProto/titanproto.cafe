const navbar = document.getElementById("navigation");
navbar.innerHTML = `
<a href="/" id="home">home</a>
| <a href="/projects/" id="projects">projects</a>
| <a href="/comingout/" id="comingout">coming out</a>
| <a href="/characters/" id="characters">characters</a>
`;

console.log(window.location.pathname);

let page = window.location.pathname
if (page == "/") {
	document.getElementById("home").className = "active";
} else if (page == "/projects/") {
	document.getElementById("projects").className = "active";
};
