let last_4_digits = "";

window.addEventListener("keydown", function (event) {
	// add event.key to last_4_digits
	last_4_digits += event.key;

	// if last_4_digits is 4 characters long, remove the first character
	if (last_4_digits.length > 4) {
		last_4_digits = last_4_digits.slice(last_4_digits.length - 4);
	}

	// if the 4 digits are equal to "dash", return
	if (last_4_digits === "dash") {
		return (window.location = "/blog/dashboard");
	} else if (last_4_digits === "blog") {
		return (window.location = "/blog");
	} else if (last_4_digits === "home") {
		return (window.location = "/");
	}
});
