var inputField = $(".input-field");
var initialTime;

$(function(){
   var words = phraseWordCounter();
   settingTimer(words);
   fieldInputCounter();
   stopwatch();
   inputTracker();
   $("#restart-game").click(restartGame);
});



function phraseWordCounter () {
    var phrase = $(".phrase").text();
    var wordsCount = phrase.split(" ").length;
    var element = $("#phrase-length");
    element.text(wordsCount);
    return wordsCount;
}

function settingTimer(words){
    var time = words;
    $("#timer").text(time);
    initialTime = words;
}

function fieldInputCounter() {
    inputField.on("input", function () {
        var content = inputField.val();

        var words = content.split(/\S+/).length - 1;
        $("#word-count").text(words);

        var characterCount = content.length;
        $("#character-count").text(characterCount);
    });
}

function stopwatch(){
    timeRemaining = $("#timer").text();
    inputField.one("focus" , function(){
        var stopwatchID = setInterval(function () {
            timeRemaining--;
            $("#timer").text(timeRemaining);
            if (timeRemaining < 1) {
                inputField.attr("disabled", true);
                clearInterval(stopwatchID);
                inputField.css("background-color", "lightgray");
            }
        }, 1000);
    });
}

function inputTracker() {
    var phrase = $(".phrase").text();
    inputField.on("input", function() {
        var typed = inputField.val();
        var comparison = phrase.substr(0 , typed.length);

        if(typed == comparison) {
            inputField.addClass("green-border");
            inputField.removeClass("red-border");
        } else {
            inputField.addClass("red-border");
            inputField.removeClass("green-border");
        }
    });
}


function restartGame() {
    inputField.attr("disabled", false);
    inputField.val("");
    
    $("#word-count").text("0");
    $("#character-count").text("0");
    $("#timer").text(initialTime);
    stopwatch()
    inputField.css("background-color", "white");
}
