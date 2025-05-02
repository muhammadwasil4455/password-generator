
var passwordInput = document.getElementById("input");
var inputRange = document.getElementById("range");
var rangeValue = document.getElementById("rangeValue");

var upperCheck = document.getElementById("upper");
var lowerCheck = document.getElementById("Lower");
var numberCheck = document.getElementById("Number");
var specialCheck = document.getElementById("special");

var upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()";


inputRange.addEventListener("input", function () {
    rangeValue.textContent = inputRange.value;
});

function autoGenrate() {
    var upperCase = upperCheck.checked;
    var lowerCase = lowerCheck.checked;
    var number = numberCheck.checked;
    var special = specialCheck.checked;
    var length = parseInt(inputRange.value);

    var allChars = "";

    if (upperCase) {
        allChars += upperCaseChars;
    }
    if (lowerCase) {
        allChars += lowerCaseChars;
    }
    if (number) {
        allChars += numbers;
    }
    if (special) {
        allChars += specialChars;
    }

    if (allChars === "") {
        alert("Please select at least one option.");
        return;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
    }

    passwordInput.value = password;
}

