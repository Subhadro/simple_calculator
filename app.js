window.onload = () => {
	let screen = document.querySelector("#print");
	screen.value = null;
	let buttons = document.querySelectorAll(".button");
	let equals = document.querySelector(".equals");

	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			if (e.target.innerHTML == "C") {
				setTimeout(() => {
					screen.value = null;
				}, 200);
			} else {
				if (e.target.innerHTML != "=")
					screen.value += e.target.innerHTML;
			}
		});
	});

	equals.addEventListener("click", () => {
		if (!screen.value) {
			screen.value = "print any number";
			setTimeout(() => {
				screen.value = null;
			}, 2000);
		} else {
			try {
				let result = eval(screen.value);
				screen.value = result;
			} catch (error) {
				screen.value = "Invalid Expression";
				setTimeout(() => {
					screen.value = null;
				}, 2000);
			}
		}
	});
};
