$(document).ready(function() {
    
    // Defining initial variables
    let number = 30;
    let questionNum = 0;
    let correctNum = 0;
    let wrongNum = 0;
    let unansweredNum = 0;
    let gameStart = false;

    // Clearing initial values from main divs.
    function clearAll() {
        $("#timer").empty()
        $("#question").empty()
        $("#allAnswers").empty()
    }
    
    // Beginning the 30-second countdown timer
    function startTimer() {
        intervalId = setInterval(countdown, 1000) 
        $("#timer").html(`<p class="zeldaFont2">${number} seconds remain...</p>`)
    }

    // Counting down...
    function countdown() {
        number --
        $("#timer").html(`<p class="zeldaFont2">${number} seconds remain...</p>`)
        if (number === 1) {
            $("#timer").html(`<p class="zeldaFont2">${number} second remains...</p>`)
        }
        if (number === 0) {
            timesUp()
            quizEnd()
        }
    }

    // On time-up, printing a specific gif before moving to endpage.
    function timesUp() {
        $("#question").html(`<img src="assets/images/timeOut-oot-owl.gif" />`)
        clearInterval(intervalId)
    }

    // Set the game to started and print first question.
    function quizStart() {
        gameStart = true;
        $("#question").html(quiz[questionNum].question)
    }

    // Start button functionality
    $("#start-button").on("click", function() {
        clearAll()
        startTimer()
        quizStart()
    })














    });