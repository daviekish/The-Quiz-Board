//User Interface logic
$(document).ready(function() {
  $("#test").click(function() {

    var score = 0;
    var answer = [];
    answer.push($("input:radio[name=questionOne]:checked").val());
    answer.push($("input:radio[name=questionTwo]:checked").val());
    answer.push($("input:radio[name=questionThree]:checked").val());
    answer.push($("input:radio[name=questionFour]:checked").val());
    answer.push($("input:radio[name=questionFive]:checked").val());
    $(".results").show();
    $("#form1").hide(function(event) {
      $("#results").html( "You scored " + parseInt((score / 5) * 100) + "%");
    });

    //Business logic
    if (answer[0] == "correct") {
      score++;
    }
    if (answer[1] == "correct") {
      score++;
    }
    if (answer[2] == "correct") {
      score++;
    }
    if (answer[3] == "correct") {
      score++;
    }
    if (answer[4] == "correct") {
      score++;
    }
  });
});

function reset() {
  location.reload();
}
