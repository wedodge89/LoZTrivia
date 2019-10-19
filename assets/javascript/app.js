$(document).ready(function() {
    
    // Defining initial variables
    let number = 30;
    let intervalId
    let questionNum = 0;
    let correctNum = 0;
    let wrongNum = 0;
    let unansweredNum = 0;
    let gameStart = false;

    function clearAll() {
        $("#timer").empty()
        $("#question").empty()
        $("#allAnswers").empty()
    }
    
    function startTimer() {
        intervalId = setInterval(countdown, 1000) 
        $("#timer").html(`<p class="zeldaFont2">${number} seconds remain...</p>`)
    }

    function countdown() {
        number --
        $("#timer").html(`<p class="zeldaFont2">${number} seconds remain...</p>`)
    }

    $("#start-button").on("click", function() {
        clearAll()
        startTimer()
        // quizStart()
        // 
        // console.log(quiz[0].question)
    })














    });