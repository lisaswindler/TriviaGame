$(document).ready(function() {
    //Create starting variables
    var correct = 0;
    var incorrect = 0;
    var timer = 10;
    var unanswered = 0;

    //Create trivia objects;
    var questionAnswer = {
        questions: {
            1: "What is the official name of coronavirus?",
            2: "In what city was covid-19 first diagnosed?",
            3: "What does corona mean?",
            4: "What was the deadliest pandemic in history?",
            5: "Ibuprofen is proven to make symptoms of Covid-19 worse:",
            6: "How many people died in the Spanish flu of 1918?",
            7: "What is the longest time coronavirus is known to survive on hard surfaces?",
            8: "What animal was primarily responsible for spreading the bubonic plague to humans?",
            9: "How much higher is the mortality rate of coronavirus compared to the seasonal flu?",
            10: "When did germ theory begin to develop?"
        },
        allChoices: {
            1: ["SARS-CoV-2", "Cov-19", "CoV-SARS-2", "Nov-Covid-19"],
            2: ["Hong Kong", "Wuhan", "Shenzhen", "Wenzhou"],
            3: ["beer", "crown", "contagious", "sun"],
            4: ["The Spanish flu", "Black Death", "The Plague of Justinian", "New World Smallpox Outbreak"],
            5: ["true", "false"],
            6: ["100-150 million", "40-50 million", "20-30 million", "80-100 million"],
            7: ["72 hours", "24 hours", "36 hours", "96 hours"],
            8: ["pigs", "bats", "fleas", "mice"],
            9: ["2 times", "5 times", "10 times", "20 times"],
            10: ["1820s", "1840s", "1860s", "1880s"]
        },
        correctchoice: {
            1: "false",
            2: "Wuhan",
            3: "crown",
            4: "The Black Death",
            5: "false",
            6: "40-50 million",
            7: "72 hours",
            8: "fleas",
            9: "10 times",
            10: "1860s"
        }
    };
    

    //Start button on click function
    $("#start-button").on('click', function() {
        $("#start-button").hide();

        for (var i = 0; i < 11; i++) {
            $("#question").html(questionAnswer.questions[i]);
        };

    });
        
    //Timer starts counting down
    //at same time
    //Question comes on screen
    //User clicks on choice/s
    //Only one choice allowed

    //Click submit
    //if correct
    //congratulate player
    //After a few seconds, display next question without user input
    // else if incorrect 
    //notify
    //display correct answer
    //wait a few seconds, display next question
    
    //if timer reaches 0 
    //tell player that time is up
    //display correct answer
    //wait a few seconds, go to next question    
    
    //Final screen:
    //Good job/Better luck next time
    //Correct answers
    //Incorrect answers:
    //Unanswered:
    
    function endGame() {
    $("#results").html(
    '<p>Correct: '+ correct +'</p>'+
    '<p>Incorrect: '+ incorrect +'</p>'+
    '<p>Unanswered: '+ unanswered +'</p>');
    };

    //restart button
    $("#reset").on("click", function() {
        location.reload();
    });
});