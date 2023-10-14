document.getElementById("convertButton").addEventListener("click", function () {
    // Get user input
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;

    // Check if input is a valid number
    if (isNaN(temperatureInput)) {
        document.getElementById("resultArea").textContent = "Please enter a valid number.";
        return;
    }

    // Convert temperature
    let result = "";

    if (unitSelect === "celsius") {
        result = (temperatureInput - 32) * 5/9 + " °C";
    } else if (unitSelect === "fahrenheit") {
        result = (temperatureInput * 9/5 + 32) + " °F";
    } else if (unitSelect === "kelvin") {
        result = (temperatureInput - 32) * 5/9 + 273.15 + " K";
    }

    document.getElementById("resultArea").textContent = `Converted temperature: ${result}`;
});
