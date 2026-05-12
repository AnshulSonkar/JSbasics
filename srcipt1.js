// Select display
const display = document.getElementById("display");

// Select all buttons
const buttons = document.querySelectorAll("button");

// Store current input
let currentInput = "";

// Loop through buttons
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        // AC button
        if(value === "AC"){
            currentInput = "";
            display.innerText = "0";
        }

        // Equal button
        else if(value === "="){

            try{

                // Replace symbols
                let expression = currentInput
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/−/g, "-");

                // Calculate result
                currentInput = eval(expression).toString();

                display.innerText = currentInput;

            }

            catch{
                display.innerText = "Error";
                currentInput = "";
            }
        }

        // +/- button
        else if(value === "+/-"){

            if(currentInput){
                currentInput = (parseFloat(currentInput) * -1).toString();
                display.innerText = currentInput;
            }
        }

        // Percentage button
        else if(value === "%"){

            if(currentInput){
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.innerText = currentInput;
            }
        }

        // Other buttons
        else{

            currentInput += value;
            display.innerText = currentInput;
        }

    });

});