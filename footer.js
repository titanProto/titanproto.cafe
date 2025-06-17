const footer = document.createElement('template');

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
        <p><a href="/">titanproto.cafe</a> 1.3.1</p>
    </div>
    <div id="badgeDiv">
        <a href="https://ari.titanproto.cafe"><img class="badges" src="https://ari.titanproto.cafe/badges/titanproto.gif"></a>
        <img class="badges" src="https://ari.titanproto.cafe/badges/PBL_big.gif">
        <a href="https://archlinux.org" target="_blank"><img class="badges" src="https://ari.titanproto.cafe/badges/archlinux.gif" title="arch btw"></a>
        <img class="badges" src="https://ari.titanproto.cafe/badges/queerpride.gif" title="queer asf">
        <img class="badges" src="https://ari.titanproto.cafe/badges/nonbinary.gif" title="eeeenbyyy asf">
        <img class="badges" src="https://ari.titanproto.cafe/badges/transnow2.gif" title="trans rights are human rights">
        <img class="badges" src="https://ari.titanproto.cafe/badges/tyg.gif" title=":3">
        <img class="badges" src="https://ari.titanproto.cafe/badges/paws.gif" title=":3c">
        <a href="https://cyber.dabamos.de/88x31/index.html" target="_blank"><img class="badges" src="https://ari.titanproto.cafe/badges/88x31.gif" title="badges ^w^"></a>
        <img class="badges" src="https://ari.titanproto.cafe/badges/antinazi.gif">
        <img class="badges" src="https://ari.titanproto.cafe/badges/piracy.gif" title="sailing the high seas">
        <img class="badges" src="https://ari.titanproto.cafe/badges/antinft.gif">
        <a href="https://jellyfin.org" target="_blank"><img class="badges" src="https://ari.titanproto.cafe/badges/jellyfin.gif"></a>
    </div>
`;

document.body.appendChild(footer.content);