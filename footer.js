const footer = document.createElement("template");

footer.innerHTML = `
    <div id="contacts">
        <br><br><hr>
        <span class="contactButtons copyable" id="email" onclick="navigator.clipboard.writeText('ari@titanproto.cafe'); this.classList.remove('copyable'); this.classList.add('copied')" onmouseover="this.classList.add('copyable'); this.classList.remove('copied');">email</span>
        <span> | </span>
        <span class="contactButtons copyable" id="discord" onclick="navigator.clipboard.writeText('titanproto'); this.classList.remove('copyable'); this.classList.add('copied')" onmouseover="this.classList.add('copyable'); this.classList.remove('copied');">discord</span>
        <span> | </span>
        <a href="https://t.me/TitanProto" target="_blank" class="contactButtons">telegram</a>
        <span> | </span>
        <a href="https://github.com/titanProto" target="_blank" class="contactButtons">github</a>
        <span> | </span>
        <a href="https://steamcommunity.com/id/TitanProto/" target="_blank" class="contactButtons">steam</a>
        <span> | </span>
        <a href="https://www.last.fm/user/titanproto" target="_blank" class="contactButtons">last.fm</a>
    </div>
    <div id="version">
        <p><a href="/">titanproto.cafe</a> 2.0.1</p>
		<p><i>this website and <br>
		all of my projects past, present and future <br>
		are made by a real human<br>
		without the usage of ai/generative tools</i><br>	
		</p>
    </div>
    <div id="badgeDiv">
        <a href="https://ari.titanproto.cafe"><img class="badges" src="/badges/titanproto.gif"></a>
        <img class="badges" src="/badges/PBL_big.gif">
        <a href="https://archlinux.org" target="_blank"><img class="badges" src="/badges/archlinux.gif" title="arch btw"></a>
        <img class="badges" src="/badges/queerpride.gif" title="queer asf">
        <img class="badges" src="/badges/nonbinary.gif" title="eeeenbyyy asf">
        <img class="badges" src="/badges/transnow2.gif" title="trans rights are human rights">
        <img class="badges" src="/badges/tyg.gif" title=":3">
        <img class="badges" src="/badges/paws.gif" title=":3c">
        <a href="https://cyber.dabamos.de/88x31/index.html" target="_blank"><img class="badges" src="/badges/88x31.gif" title="badges ^w^"></a>
        <img class="badges" src="/badges/antinazi.gif">
        <img class="badges" src="/badges/piracy.gif" title="sailing the high seas">
		<img class="badges" src="/badges/anti-ai.gif" title="if you use ai, you're a piece of shit, idgaf abt your 'use-case' fuck you :3">
        <img class="badges" src="/badges/antinft.gif">
        <a href="https://jellyfin.org" target="_blank"><img class="badges" src="/badges/jellyfin.gif"></a>
    </div>
	<p id="license">
		<i>this site is licensed under the GNU GPL v3.0</i><br>
		<i>additionally, NONE of the content on,
		this site, all subdomains, and all of my projects
		are permitted to be used in the training of or manipulated by
		ai/generative tools of any kind</i>
	</p>
`;

document.body.appendChild(footer.content);
