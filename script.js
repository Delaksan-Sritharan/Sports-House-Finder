document.addEventListener("DOMContentLoaded", function () {
    const studentIdInput = document.getElementById("StudentID");
    const form = document.querySelector("form");
    const resultDisplay = document.getElementById("result");

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        const StudentID = studentIdInput.value;
        resultDisplay.textContent = "";

        if (StudentID.length !== 8 || isNaN(StudentID)) {
            // alert("Please enter a valid 8-digit Student ID.");
            resultDisplay.textContent = "Please enter a valid 8-digit Student ID.";
            resultDisplay.style.color = "red";
            return;
        }
        const lastTwpDigits = parseInt(StudentID.slice(-2));
        const reminder = lastTwpDigits % 4;

        let sportsHouse = "";
        if (reminder === 0) {
            sportsHouse = "Gamini House"
            resultDisplay.textContent = "Your Sports House is: Gamini House";
            resultDisplay.style.color = "blue";
        } else if (reminder === 1) {
            sportsHouse = "John House"
            resultDisplay.textContent = "Your Sports House is: John House";
            resultDisplay.style.color = "green";
        } else if (reminder === 2) {
            sportsHouse = "Peter House"
            resultDisplay.textContent = "Your Sports House is: Peter House";
            resultDisplay.style.color = "red";
        } else if (reminder === 3) {
            sportsHouse = "Steve House"
            resultDisplay.textContent = "Your Sports House is: Steve House";
            resultDisplay.style.color = "orange";
        }

        // alert(`Your Sports House is: ${sportsHouse}`);
        console.log(`Student ID: ${StudentID}, Sports House: ${sportsHouse}, Last Two Digits: ${lastTwpDigits}, Reminder: ${reminder}`);
    })
});