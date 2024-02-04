var hostname = window.location.hostname;

if(hostname.includes("chzzk-api.ddutto.com")) {
	var link = document.createElement("link");
	link.rel = "shortcut icon";
	link.href = "https://i.ibb.co/nBZ0HCZ/dodaram-circle.png";
	document.head.appendChild(link);
	document.title = "도다람 채팅";
}