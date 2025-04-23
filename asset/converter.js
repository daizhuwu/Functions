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
  