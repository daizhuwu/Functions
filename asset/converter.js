
function calculateUsage() {
	const prompt = document.getElementById('prompt').value;
	const charCount = prompt.length;
	const tokenCount = Math.ceil(charCount / 4); // Rough estimate: 1 token ~ 4 characters
  
	const energyUsed = (tokenCount * 0.00027).toFixed(5); // Example conversion factor
	let equivalent = '';
  
	if (energyUsed < 0.001) {
	  equivalent = 'Run one light bulb for 5 minutes 💡';
	} else if (energyUsed < 0.005) {
	  equivalent = 'Charge your phone once 🔋';
	} else {
	  equivalent = 'Boil a bottle of water 🔥';
	}
  
	document.getElementById('charCount').textContent = `Characters: ${charCount}`;
	document.getElementById('tokenCount').textContent = `Tokens: ${tokenCount}`;
	document.getElementById('energy').textContent = `Energy: ${energyUsed} kWh`;
	document.getElementById('equivalent').textContent = `Equivalent: ${equivalent}`;
  }
  