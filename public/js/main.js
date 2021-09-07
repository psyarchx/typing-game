var inputField = $(".input-field");

$(function(){
   var words = phraseWordCounter();
   console.log(words);
   settingTimer(words);
   fieldInputCounter();
});

function phraseWordCounter () {
    var phrase = $(".phrase").text();
    var wordsCount = phrase.split(" ").length;
    var element = $("#phrase-length");
    element.text(wordsCount);
    return wordsCount;
}

function settingTimer(words){
    var time = words * 1.2;
    console.log(time);
    $("#timer").text(time);
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
