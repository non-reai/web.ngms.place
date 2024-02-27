function openIncogWindow() {
	let win = window.open("about:blank")
	let iframe = win.document.createElement("iframe")
	win.document.body.style.margin = 0
	iframe.src = window.location.href
	iframe.style.border = "none"
	iframe.style.width = "100vw"
	iframe.style.height = "100vh"
	iframe.id = "page"
	win.document.body.appendChild(iframe)
	let back = document.createElement("input")
	back.type = "button"
	back.value = "Back"
	back.id = "back"
	back.style.position = "absolute"
	back.style.left = "5px"
	back.style.top = "5px"
	let forward = document.createElement("input")
	forward.type = "button"
	forward.value = "Forward"
	forward.id = "forward"
	forward.style.position = "absolute"
	forward.style.left = "calc(5px + 3rem)"
	forward.style.top = "5px"
	win.document.body.appendChild(back)
	// win.document.body.appendChild(forward)
	let script = document.createElement("script")
	script.src = "/incog.js"
	win.document.body.appendChild(script)
	window.location.replace("https://www.beanstack.com/")
}

async function getAuthCode() {
	let response = await fetch("https://web.ngmsplace.online/get-auth-code")
	let authCode = await response.text()
	document.querySelectorAll(".auth-code").forEach((element) => {
		element.innerText = authCode
	})
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

document.getElementById("user-id").innerText = readCookie("web-ngms-place-user-id")


document.getElementById("website-url").innerText = window.location.href

getAuthCode()