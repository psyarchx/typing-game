var inputField = $(".input");

$(function(){
   var words = phraseWordCounter();
   console.log(words);
   settingTimer(words);
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

