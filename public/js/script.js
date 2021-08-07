// credit: https://stackoverflow.com/questions/14434604/i-want-to-delay-a-link-for-a-period-of-500-with-javascript

// delaying a redirect (for letting animations on mobile run before redirecting)
function delay(URL) {
	setTimeout(function () {
		window.open(URL, "_blank"); // this is changed from the SO answer
	}, 500);
}
