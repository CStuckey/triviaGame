//  This code will run as soon as the page loads.
window.onload = function() {

// Show the user the Start button to begin the quiz
$('#start').click(function(){
 $('#trivia').show().append(run);
 $('#start').hide();

  // Countdown Timer
  // $("#start").on("click", run);

// Set number counter to 90.
var number = 91;

// Variables that hold interval ID when the "run" function is executed.
var intervalId;


//  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() { 

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#showNumber").html(number);
      console.log(number);


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

});

 var textDisplay = "";
  var answers = new Array(5);
    answers[0] = "They make it wetter.";
    answers[1] = " warm tropical seas.";
    answers[2] = " is lush and green.";
    answers[3] = " wetter.";
    answers[4] = " stormy";
    answers[5] = " puffy mid-level cloud";

  var questionsM = new Array(5);
    questionsM[0] = "questionOne";
    questionsM[1] = "questionTwo";
    questionsM[2] = "questionThree";
    questionsM[3] = "questionFour";
    questionsM[4] = "questionFive";
    questionsM[5] = "questionSix";    
  


  function checkQuestions() {
    var question = document.getElementsByName("question.");
    var noOfRadios = question.length;

    for( var i = 0; i < noOfRadios; i++){
      if(questions[i].checked) {
        if(questions[i].value==="correct") {
          $("#correctAnswer").html(correct++);
        } else if (questions[i].value==="wrong") {
          $("#incorrectAnswer").html(wrong++);
        }
          else if(questions[i].value==="") {
            $("#unanswered").html(unanswered++)
          }
      }

    }


  }

  function checkAll() {
    for(var i = 0; i < questionsM.length; i++) {
      checkQuestions(questionsM[i]);
    }

  }

  console.log(checkQuestions());



  }

// Submit button to finish the quiz
  // $("#tallyScore").click(function() {
  //   $("#trivia", "#start").hide();
  //   $("#done").show().append(check);



