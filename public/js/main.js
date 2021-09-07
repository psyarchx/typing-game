var inputField = $(".input");

$(function(){
    phraseWordCounter();
});

function phraseWordCounter () {
    var phrase = $(".phrase").text();
    var wordsCount = phrase.split(" ").length;
    var element = $("#phrase-length");
    element.text(wordsCount);
}