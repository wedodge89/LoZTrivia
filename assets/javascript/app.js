$(document).ready(function() {
    
    // Defining initial variables
    let number = 30;
    let questionNum = -1;
    let correctNum = 0;
    let wrongNum = 0;
    let unansweredNum = 10;
    let gameStart = false;
    let intervalId;
    let answer = ""

    // Clearing initial values from main divs.
    function clearAll() {
        $("#intro-text").empty()
        $("#intro-image").remove()
        $("#start").empty()
        $("#timer").empty()
        $("#question").empty()
        $(".answer").empty()
        clearInterval(intervalId)
    }
    
    // Beginning the 30-second countdown timer
    function startTimer() {
        clearInterval(intervalId)
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
        $("#allAnswers").empty()
    }

    // Set the game to started and print next question.
    function nextQuestion() {
        questionNum ++
        if (questionNum === quiz.length) {
            quizEnd()
        }
        gameStart = true;
        number = 30
        clearAll()
        startTimer()
        $("#question").html(`<p class="question">${quiz[questionNum].question}</p>`)
        $("#answer0").html(`<p class="answer">${quiz[questionNum].answers[0]}</p>`)
        $("#answer1").html(`<p class="answer">${quiz[questionNum].answers[1]}</p>`)
        $("#answer2").html(`<p class="answer">${quiz[questionNum].answers[2]}</p>`)
        $("#answer3").html(`<p class="answer">${quiz[questionNum].answers[3]}</p>`)
}

    // Start button functionality
    $("#start-button").on("click", function() {
        clearAll()
        startTimer()
        nextQuestion()
    })

    // Answer button functionality
    $(".answer-btn").on("click", function() {
        let answer = parseInt($(this).attr("value"));
        console.log(answer)
        answerCheck()
    })

    // Correct guess function
    function correctAnswer() {
        clearAll()
        correctNum ++
        unansweredNum --
        $("#question").html(`<p class="question">Correct!</p><hr><img src=${quiz[questionNum].correctGif}>`)
        setTimeout(nextQuestion, 3000)
    }

    // Incorrect guess function
    function wrongAnswer() {
        clearAll()
        wrongNum ++
        unansweredNum --
        $("#question").html(`<p class="question">Sorry, the correct answer is ${quiz[questionNum].answers[quiz[questionNum].correct]}!</p><hr><img src=${quiz[questionNum].wrongGif}>`)
        setTimeout(nextQuestion, 3000)
    }

    // Check answer chosen vs. correct answer
    function answerCheck() {
        console.log(quiz[questionNum].correct)
        if (answer = quiz[questionNum].correct) {
            correctAnswer()
        } else {
            wrongAnswer()
        }
    }

    // Display scores at the end of the game
    function quizEnd() {
        clearAll()
        $("#timer").remove()
        $(".main").append(`<p class="answer">Correct: ${correctNum}/10<hr>`)
        $(".main").append(`<p class="answer">Incorrect: ${wrongNum}/10<hr>`)
        $(".main").append(`<p class="answer">Unanswered: ${unansweredNum}/10<hr>`)
    }
















    });