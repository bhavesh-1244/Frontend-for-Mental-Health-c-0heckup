document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get all the questions
        const questions = quizForm.querySelectorAll(".question");
        let results = "";

        questions.forEach((question) => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');

            if (selectedOption) {
                // Display the selected answer
                results += `<div class="result"><h4>${question.querySelector("h3").innerText}</h4><p>Selected Answer: ${selectedOption.nextElementSibling.innerText}</p></div>`;
                // Add animation class
                selectedOption.parentElement.classList.add("selected-option");
            } else {
                results += `<div class="result"><h4>${question.querySelector("h3").innerText}</h4><p>No answer selected</p></div>`;
            }
        });

        // Create a result container to display the results
        const resultContainer = document.createElement("div");
        resultContainer.className = "results-container";
        resultContainer.innerHTML = `<h2>Your Results</h2>${results}`;
        document.body.appendChild(resultContainer);
    });
});
