document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    var icons = document.querySelector(".icons");

    button.addEventListener("click", function() {
        if (button.classList.contains("hide")) {
            button.classList.remove("hide");
        } else {
            button.classList.add("hide");
        }
        icons.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    var inputs = document.querySelectorAll(".form-input");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", validateInputs);
    }

    function validateInputs() {
        var allInputsFilled = true;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                allInputsFilled = false;
                break;
            }
        }

        if (allInputsFilled) {
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "disabled");
        }
    }

    var form = document.querySelector(".form-wrapper");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});