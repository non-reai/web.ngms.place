let back = document.getElementById("back")
// let forward = document.getElementById("forward")
let page = document.getElementById("page")

let homepage = page.src

let history = []

page.addEventListener("load", ()=>{
	if (history[history.length] != page.contentWindow.location.href) {
		history.push(page.contentWindow.location.href)
	}
})

back.addEventListener("click", ()=>{
	history.pop()
	if (history.length == 0) {
		page.contentWindow.location.replace(homepage)
	} else {
		page.contentWindow.location.replace(history[history.length - 1])
	}
})

