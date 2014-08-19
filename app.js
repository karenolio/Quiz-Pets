$(document).ready(function() {

$(".box").hide();
$(".answers").hide();
$("#makeyourguess").hide();
$(".submitButton").hide(); 

//Intro PAGE
$('#start').on('click', function(){
      console.log("start button functions");
      var getStarted = $('#getStarted');
      $('#getStarted').hide();
      q1Appear();
  
});

//When user clicks on an answer, ".selectedAnswer" class is appended to that answer. 
//If the user changes the answer they've selected (before submiting), the class is removed from the previous answer and added to the newly selected answre
$(".answer").on('click', function(){
console.dir(this);
$('.answer').removeClass('selectedAnswer');
$(this).addClass('selectedAnswer');
});

function clearScreen() {
    $(".box").css({'opacity':'0'});
    $(".box").hide();
    $(".answers").hide();
    $(".submitButton").hide();
    $("#makeyourguess").hide();
};

function q1Appear(){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#firstQuestion").show();
    //$(".answers").show(); 
    $("#q1").show();
    $(".submitButton").show();
    $("#makeyourguess").show();

};

function q1Clear(){
    $("#firstQuestion").hide();
    $('.answer').removeClass('selectedAnswer'); 
    $(".box").hide(); 
};

function q2Appear(){
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#secondQuestion").show();
    $(".q2").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q2Clear() {
    console.log("in q2Clear"); // not sure if it'll do anything for me
    $("#secondQuestion").hide();
    //$(".q2").hide();
    $('.answer').removeClass('selectedAnswer'); 
    //no need for hiding box here?
};

function q3Appear () {
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#thirdQuestion").show();
    $(".q3").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q3Clear() {
    //console.log("in q3Clear"); // not sure if it'll do anything for me
    $("#thirdQuestion").hide();
    //$(".q3").hide();
    $('.answer').removeClass('selectedAnswer'); 
    //no need for hiding box here?
};

function q4Appear () {
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#fourthQuestion").show();
    $(".q4").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q4Clear() {
    //console.log("in q3Clear"); // not sure if it'll do anything for me
    $("#fourthQuestion").hide();
    //$(".q3").hide();
    $('.answer').removeClass('selectedAnswer'); 
    //no need for hiding box here?
};

function q5Appear () {
    $(".box").css({'opacity':'1'});
    $(".box").show(); 
    $("#fifthQuestion").show();
    $(".q5").show(); 
    $(".submitButton").show();
    $("#makeyourguess").show();
};

function q5Clear() {
    //console.log("in q3Clear"); // not sure if it'll do anything for me
    $("#fifthQuestion").hide();
    //$(".q3").hide();
    $('.answer').removeClass('selectedAnswer'); 
    //no need for hiding box here?
};

function checkAnswer(question, answer) { //can i also use function checkAnswer () {} or do i have to name the parameter here?
    console.log("in checkAnswer " + question + " " + answer);

    if (question == "q1" && answer == "Corbin") {
        console.log("You're Right!");
        clearScreen();
        q1Clear();
        $('#correct').css({'display':'inline-block'});    
    }
    
    else if (question == "q1" && answer !== "Corbin") {
        console.log("Answer 1 - You're Wrong!");
        clearScreen();
        q1Clear();
        $("#incorrect").css({'display':'inline-block'});    
    }    
    
    else if(question =="q2" && answer == "Maru") {
        console.log("You're Right!");
        clearScreen();
        q2Clear();
        $('#correct').css({'display':'inline-block'});    
    }

    else if (question == "q2" && answer !== "Maru") {
        console.log("Answer 2 - You're Wrong!");
        clearScreen();
        q2Clear();
        $("#incorrect").css({'display':'inline-block'});  
    }

    else if(question =="q3" && answer == "Boo") {
        console.log("You're Right!");
        clearScreen();
        q3Clear();
        $('#correct').css({'display':'inline-block'});    
    }

    else if (question == "q3" && answer !== "Boo") {
        console.log("Answer 3 - You're Wrong!");
        clearScreen();
        q3Clear();
        $("#incorrect").css({'display':'inline-block'});  
    }

    else if(question =="q4" && answer == "Grumpy") {
        console.log("You're Right!");
        clearScreen();
        q4Clear();
        $('#correct').css({'display':'inline-block'});    
    }

    else if (question == "q4" && answer !== "Grumpy") {
        console.log("Answer 4 - You're Wrong!");
        clearScreen();
        q4Clear();
        $("#incorrect").css({'display':'inline-block'});  
    }

    else if(question =="q5" && answer == "Biddy") {
        console.log("You're Right!");
        clearScreen();
        q5Clear();
        $('#correct').css({'display':'inline-block'});    
    }

    else if (question == "q5" && answer !== "Biddy") {
        console.log("Answer 5 - You're Wrong!");
        clearScreen();
        q5Clear();
        $("#incorrect").css({'display':'inline-block'});  
    }

    else {

    }
};

$("#submitButton").on('click', function(){ //don't get this 100%
    console.log("in submit");
    
    $(this).css({'background-color':'#445155'})

    console.dir($('.selectedAnswer')[0]);

    var questionNumber = $('.selectedAnswer')[0].parentElement.id;
    var questionAnswer = $('.selectedAnswer')[0].getAttribute("name");
    
    checkAnswer(questionNumber, questionAnswer);
});

//$(".continue").click(function(){
//    $('#incorrect').css({'display':'none'});
//    $('#correct').css({'display':'none'});
//
//    var progressPercent = ((5 -($('.unAnswered').length))/5)*100;
//    var progressUpdate = "<br>" + progressPercent + "% Complete";
//    var goodbyeMessage = "You got " + (5 - $('.wrongAnswer').length) + " out of 5 questions right.<br>To retake the quiz, just click below."
//
//    $('#progressUpdate').empty().append(progressUpdate);
//
//    if ($('.unAnswered').length == 4){
//        q2Appear();
//    }

//    else if ($('.unAnswered').length == 3){
//        q3Appear();
//    }

//    else if ($('.unAnswered').length == 2){
//        q4Appear();
//    }
//   else if ($('.unAnswered').length == 1){
//        q5Appear();
//    }

//    else {

//    }

//};  

});    



