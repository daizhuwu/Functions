function displayResult() {
	const selector = document.getElementById("equivalentSelector");
	const value = selector.value;
	let result = "";
	switch (value) {
	  case "phone": result = "1 iPhone charge"; break;
	  case "bulb": result = "Use a 60W bulb for 1 hour"; break;
	  case "shower": result = "Take 1 hot shower"; break;
	  case "eggs": result = "Fry 1 egg"; break;
	  case "tea": result = "Brew 1 cup of tea"; break;
	  case "fan": result = "Run a fan for 1 hour"; break;
	}
	document.getElementById("equivalentResult").innerText = `♻️ Equivalent: ${result}`;
  }
  