// Loading page animation

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("page-content").style.display = "block";
}

// param @1: time to sleep in ms
const sleep = async (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// making sure the animation runs at least twice (animation time 1.2sec)
// this might be useless and might be removed later.
const loadTime = new Date().getTime();
const validateLoadTime = async () => {
	// this might be spaghetti code, but it works and I'm running on 3 hours sleep

	if (new Date().getTime() - loadTime > 2399) {
		return showPage();
	}

	await sleep(2400 - (new Date().getTime() - loadTime)).then(() => {
		return showPage();
	});
};

document.addEventListener("DOMContentLoaded", async () => {
	await validateLoadTime();
});
