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
  
const taskData = {
chatgpt: [
	{ label: "📝 Generate an essay", value: 0.015 },
	{ label: "📄 Summarize article", value: 0.01 },
	{ label: "🧠 Answer 5 questions", value: 0.008 },
	{ label: "✍️ Generate story", value: 0.02 }
],
imagegen: [
	{ label: "🖼️ Generate image", value: 0.02 },
	{ label: "🎨 Stylize image", value: 0.018 },
	{ label: "🔍 Enhance resolution", value: 0.025 },
	{ label: "🪄 Remove background", value: 0.017 }
],
videoai: [
	{ label: "🎥 Generate video", value: 0.03 },
	{ label: "📽️ Upscale video", value: 0.028 },
	{ label: "🔤 Add subtitles", value: 0.012 },
	{ label: "🎬 Trim and merge", value: 0.016 }
]
};

function updateTasks() {
const model = document.getElementById("aiModel").value;
const container = document.getElementById("taskContainer");
container.innerHTML = "";
taskData[model].forEach(task => {
	const div = document.createElement("div");
	div.className = "task";
	div.textContent = `${task.label} (${task.value}kg)`;
	div.onclick = () => setEmission(task.value);
	container.appendChild(div);
});
}

function updateInputMode() {
	const mode = document.getElementById("inputMode").value;
	document.getElementById("commonInput").style.display = mode === "common" ? "block" : "none";
	document.getElementById("timeInput").style.display = mode === "time" ? "block" : "none";
	document.getElementById("promptInput").style.display = mode === "prompt" ? "block" : "none";
  }
  
  function calculateCarbon() {
	const mode = document.getElementById("inputMode").value;
	if (mode === "time") {
	  const hours = parseFloat(document.getElementById("hoursInput").value);
	  if (!isNaN(hours)) {
		setEmission(hours * 0.02);
	  }
	} else if (mode === "prompt") {
	  const prompt = document.getElementById("promptText").value.trim();
	  if (prompt.length > 0) {
		const tokenCount = Math.ceil(prompt.split(/\s+/).length * 1.5);
		const estimatedEmission = tokenCount * 0.00002;
		setEmission(estimatedEmission);
	  }
	}
  }

const offsetItems = {
tree: { value: 0.01, count: 0 },
walk: { value: 0.005, count: 0 },
recycle: { value: 0.002, count: 0 }
};

function adjustOffset(type, delta) {
const item = offsetItems[type];
const newCount = item.count + delta;
if (newCount < 0) return;
const deltaValue = delta * item.value;
const remaining = totalEmission - offsetTotal;
if (delta > 0 && remaining <= 0) {
	alert("🎉 You've already fully offset your emissions!");
	return;
}
if (delta > 0 && deltaValue > remaining) {
	alert("🌿 You're trying to offset more than your emissions.");
	return;
}
item.count = newCount;
offsetTotal += deltaValue;
document.getElementById(type + 'Count').innerText = item.count;
updateSummary();
}

  