// Splash screen transition
document
    .getElementById("enter-btn")
    .addEventListener("click", function () {
        const splash = document.getElementById("splash");
        const mainContent = document.getElementById("main-content");

        splash.style.opacity = "0";

        setTimeout(function () {
            splash.style.display = "none";
            mainContent.style.opacity = "1";
        }, 500);
    });

// Main form logic
document
    .getElementById("houseForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const studentId = document.getElementById("StudentID").value;
        const resultDisplay = document.getElementById("result");

        // Validate input
        if (studentId.length !== 8 || isNaN(studentId)) {
            resultDisplay.textContent =
                "Please enter a valid 8-digit Student ID";
            resultDisplay.style.display = "block";
            resultDisplay.style.background = "#fff0f0";
            resultDisplay.style.borderLeft = "4px solid #c73a3a";
            return;
        }

        const lastTwoDigits = parseInt(studentId.slice(-2));
        const reminder = lastTwoDigits % 4;

        let house, houseClass, houseColor;

        switch (reminder) {
            case 0:
                house = "Gamini House";
                houseClass = "gamini";
                houseColor = "Blue";
                break;
            case 1:
                house = "John House";
                houseClass = "john";
                houseColor = "Teal";
                break;
            case 2:
                house = "Peter House";
                houseClass = "peter";
                houseColor = "Red";
                break;
            case 3:
                house = "Steve House";
                houseClass = "steve";
                houseColor = "Gold";
                break;
        }

        // Display result
        resultDisplay.innerHTML = `
                <div class="house-name">${house}</div>
                <div>Your color: ${houseColor}</div>
                <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                    Based on the last two digits of your ID: ${lastTwoDigits}
                </div>
            `;
        resultDisplay.className = houseClass;
        resultDisplay.style.display = "block";
    });