// Loading page animation

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("page-content").style.display = "block";
}

window.onload = async function () {
	showPage();
};
