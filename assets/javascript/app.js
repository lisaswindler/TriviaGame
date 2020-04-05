$(document).ready(function() {
    //Create starting variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var myTimer;
    // var timer = 10;

    //hide submit and reset buttons
    $("#submit").hide();
    $("#reset").hide();

    //Create questions and answers
    var questionAnswer = [
        { question: "What is the official name of coronavirus?",
            answerChoices: [
                "SARS-CoV-2",
                "Cov-19",
                "CoV-SARS-2",
                "Nov-Covid-19"
            ],
            correctAnswer: "SARS-CoV-2"
        },
        { question: "In what city was COVID-19 first diagnosed?",
                answerChoices: [
                    "Hong Kong",
                    "Wuhan",
                    "Shenzhen",
                    "Wenzhou"
                ],
                correctAnswer: "Wuhan"
            },
        { question: "What was the deadliest pandemic in history?",
                answerChoices: [
                    "The Spanish Flu",
                    "The New World Smallpox Outbreak",
                    "Black Death",
                    "The Plague of Justinian"
                ],
                correctAnswer: "Black"
            },
        { question: "What does corona mean?",
            answerChoices: [
                "crown",
                "contagious",
                "sun",
                "beer"
            ],
            correctAnswer: "crown"
        },
        { question: "Ibuprofen is proven to make symptoms of COVID-19 worse:",
                answerChoices: [
                    "true",
                    "false"
                ],
                correctAnswer: "false"
            },
            { question: "How many people died in the Spanish flu of 1918?",
            answerChoices: [
                "20-30 million",
                "40-50 million",
                "80-100 million",
                "100-150 million"
            ],
            correctAnswer: "40-50"
        },
        { question: "How long is COVID-19 known to survive on hard surfaces?",
                answerChoices: [
                    "24 hours",
                    "36 hours",
                    "72 hours",
                    "96 hours"
                ],
                correctAnswer: "72"
            },
            { question: "What animal was primarily responsible for spreading the bubonic plague to humans?",
            answerChoices: [
                "pigs",
                "mice",
                "bats",
                "fleas"
            ],
            correctAnswer: "fleas"
        },
        { question: "How much higher is the mortality rate of coronavirus compared to the seasonal flu?",
            answerChoices: [
                "1.5 times",
                "3 times",
                "5 times",
                "10 times"
            ],
            correctAnswer: "10"
        },
        { question: "When did germ theory begin to develop?",
            answerChoices: [
                "1820s",
                "1840s",
                "1860s",
                "1880s"
            ],
            correctAnswer: "1860s"
        },
    ];
    
    function newQuestion() {
        if (questionAnswer.length < 1) {
            endGame();
            return;
        };
        timer = 3;
        clearInterval(myTimer);
        myTimer = setInterval(setTimer, 1000);
        var randomQuestion = questionAnswer[Math.floor(Math.random() * questionAnswer.length)];
        var questionIndex = questionAnswer.indexOf(randomQuestion);
        var answers = randomQuestion.answerChoices;
        correctChoice = randomQuestion.correctAnswer;
        $("#answers").empty();
        $("#questions").empty();
        $("#questions").html(randomQuestion.question);
            for (var i = 0; i < answers.length; i++) {
                $("#answers").append("<div><label><input type='radio' name='question' class='circle' id="+ answers[i] + ">" + "   " + answers[i] + "</label></div>");
            }; 
            $("#submit").show();
            questionAnswer.splice(questionIndex, 1);
            $(".circle").on('click', function() {
               userChoice = this.id;
                 
            });
    };

    $("#submit").on('click', function() {
        if (userChoice === correctChoice) {
            correct++;
            console.log("Right: " + correct);
        } else {
            incorrect++;
            console.log("Wrong: " + incorrect);
        };
        
        newQuestion();
    });  

    function setTimer() {
        timer--;
        $("#timer").html("Remaining time: " + timer);
        if (timer <= 0) {
            console.log("time");
            unanswered++;
            newQuestion();
        };
    };
    

     //Start button on click function
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        newQuestion(); 
    });
        
    

    function endGame() {
    $("#questions").empty();
    $("#answers").empty();
    clearInterval(myTimer);
    $("#submit").hide();
    $("#timer").hide();
    $("#reset").show();
    $("#results").html(
    '<p>Correct: '+ correct +'</p>'+
    '<p>Incorrect: '+ incorrect +'</p>'+
    '<p>Unanswered: '+ unanswered +'</p>');
    };    

    //reset button
    $("#reset").on("click", function() {
        location.reload();
    });
 
});