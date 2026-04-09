let refsheet1 = "clothed"
function changeRef() {
	let img = document.getElementById("refsheet1")
	if (refsheet1 == "clothed"){ 
		img.src = "/art/ari/ref_sheet_ari.png"
		img.alt = "ari's reference sheet (unclothed alt (NOT NSFW))"
		refsheet1 = "unclothed"
	}
	else if (refsheet1 == "unclothed") {
		img.src = "/art/ari/ref_sheet_ari_clothes_alt.png"
		img.alt = "ari's reference sheet (clothed alt)"
		refsheet1 = "clothed"
	}
}	
