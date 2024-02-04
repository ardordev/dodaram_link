getBroadcastDays();

function getBroadcastDays() {
	var firstBroadcast = new Date(2018, 6-1, 28);
	var now = new Date();
	var gap = now.getTime() - firstBroadcast.getTime();
	var result = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1;
	document.querySelector("#nick").title = "방송한지 " + result + "일";
}

document.querySelector("#seeMoreArea").addEventListener("click", function(e) {
	document.querySelector("#optionArea").style.display = "block";
	document.querySelector("#seeMoreArea").style.display = "none";
});

document.querySelector("#chat_viewer").addEventListener("click", function(e) {
	window.open("https://chzzk-api.ddutto.com/chat/5a091442f87b638efb3e1fbb53643e95?setting=twitch:ddraming,font:Inter,no-anim,darkmode,left,platform-badge-2,orig-color,font-size:13,scroll", "chat_viewer", "width=375, height=900");
});

document.querySelector("#chatting").addEventListener("click", function(e) {
	chrome.storage.local.get("chat_option", function(data) {
		if(data.chat_option === "chzzk"){
			window.open("https://chzzk.naver.com/live/5a091442f87b638efb3e1fbb53643e95/chat?popout=dodaram", "chzzk_chatting", "width=375, height=145");
		}
		else{
			window.open("https://www.twitch.tv/popout/ddraming/chat?popout=dodaram", "twitch_chatting", "width=375, height=140");
		}
	});
});

chrome.storage.local.get("chat_option", function(data) {
	if(data.chat_option === "chzzk"){
		document.querySelector("#chat_chzzk").checked = true;
	}
	else{
		document.querySelector("#chat_twitch").checked = true;
	}
});

document.querySelector("#chat_twitch").addEventListener("click", function() {
	chrome.storage.local.set({"chat_option": "twitch"});
});

document.querySelector("#chat_chzzk").addEventListener("click", function() {
	chrome.storage.local.set({"chat_option": "chzzk"});
});