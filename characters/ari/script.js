let refsheet1 = "clothed"
function changeRef() {
	let img = document.getElementById("refsheet1")
	if (refsheet1 == "clothed"){ 
		img.src = "/art/ari/ref_sheet_ari.png"
		img.alt = "ari's reference sheet (unclothed alt (NOT NSFW))"
		refsheet1 = "unclothed"
	} else if (refsheet1 == "unclothed") {
		img.src = "/art/ari/ref_sheet_ari_clothes_alt.png"
		img.alt = "ari's reference sheet (clothed alt)"
		refsheet1 = "clothed"
	}
}	

let headshot1 = "clothed"
function changeHeadshot() {
	let img = document.getElementById("headshot1")
	if (headshot1 == "clothed"){ 
		img.src = "/art/ari/headshot_ari.png"
		img.alt = "ari's headshot (unclothed alt (NOT NSFW))"
		headshot1 = "unclothed"
	} else if (headshot1 == "unclothed") {
		img.src = "/art/ari/headshot_ari_clothed_alt.png"
		img.alt = "ari's headshot (clothed alt)"
		headshot1 = "clothed"
	}
}

function changeJamboard(clicked) {
	console.log(clicked)
	let img = document.getElementById("jamboard1")
	if (clicked == "clothesJamboard") {
		img.src = "/art/ari/jamboards/jamboard_clothes.png"
		img.alt = "ari's clothes jamboard"
	} else if (clicked == "mainJamboard") {
		img.src = "/art/ari/jamboards/jamboard.png"
		img.alt = "ari's main jamboard"
	}
}
