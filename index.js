/* SCRIPTING BEGINS HERE */

// GET ALL ELEMENTS
let fahrenInput = document.getElementById("fahren-input")
let celsiusInput = document.getElementById("celsius-input")
let kelvinInput = document.getElementById("kelvin-input")


// FAHRENHEIT CONVERSION

fahrenInput.addEventListener("input", function() {
    value = parseFloat(fahrenInput.value) 

    celsiusInput.value = parseFloat(((value - 32) / 1.8).toFixed(3))
    kelvinInput.value = parseFloat((((value - 32) / 1.8) + 273.15).toFixed(3))

    if (fahrenInput.value === "") {
        celsiusInput.value = "Enter"
        kelvinInput.value = "Enter"
    }
    
})


// CELSIUS CONVERSION

celsiusInput.addEventListener("input", function(value) {

    value = parseFloat(celsiusInput.value) 

    fahrenInput.value = parseFloat(((value * 1.8) + 32).toFixed(3))
    kelvinInput.value = parseFloat((value + 273.15).toFixed(3))

    if (celsiusInput.value === "") {
        fahrenInput.value = "Enter"
        kelvinInput.value = "Enter"
    }
})

// KELVIN CONVERSION

kelvinInput.addEventListener("input", function(value) {
    value = parseFloat(kelvinInput.value) 

    celsiusInput.value = parseFloat((value - 273.15).toFixed(3))
    fahrenInput.value = parseFloat((((value - 273.15) * 1.8) + 32).toFixed(3))

    if (kelvinInput.value === "") {
        celsiusInput.value = "Enter"
        fahrenInput.value = "Enter"
    }
})