$(document).ready(function() {
  $("#sortingForm").submit(function(event) {
    $("#quizResposes").show();
    var griffTally = 0;
    var huffTally = 0;
    var ravenTally = 0;
    var slythTally = 0;
    var arrayTally = [];

    $("input:checkbox[value=griff]:checked").each(function() {
      griffTally++;
    });
    $("input:checkbox[value=huff]:checked").each(function() {
      huffTally++;
    });
    $("input:checkbox[value=raven]:checked").each(function() {
      ravenTally++;
    });
    $("input:checkbox[value=slyth]:checked").each(function() {
      slythTally++;
    });
    arrayTally.push(griffTally, huffTally, ravenTally, slythTally);

    var largestTally = Math.max.apply(Math, arrayTally);
    var largestTallyIndex = arrayTally.indexOf(largestTally);
    arrayTally.splice(largestTallyIndex, 1);
  if  (arrayTally.includes(largestTally)) {
    $("#mug").show();
  } else if (largestTally === griffTally){
    $("#griff").show();
  } else if (largestTally === huffTally) {
    $("#huff").show();
  } else if (largestTally === ravenTally) {
    $("#raven").show();
  } else if (largestTally === slythTally) {
    $("#slyth").show();
  }



    //alert(arrayTally);

    event.preventDefault();
  });
});
