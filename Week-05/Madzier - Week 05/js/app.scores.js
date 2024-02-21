/*************************************
 * @auth    Doug Madzier
 * @date    Tuesday, February 20, 2024
 * @file    CS-133J Week 05 Homework
 *************************************/

window.onload = function () {
  let btn = $('btn');
  let spnScore = $('spnScore');
  let spnCount = $('spnCount');
  let spnTotal = $('spnTotal');
  let spnAverage = $('spnAverage');
  let spnBest = $('spnBest');
  let spnWorst = $('spnWorst');
  let enteredScore = 0;
  let scoreCount = 0;
  let totalScores = 0;
  let average = 0;
  let bestScore = 0;
  let worstScore = 0;

  /*
   *
   *
   *
   */
  function $(getId) {
    return window.document.getElementById(getId);
  }

  btn.onclick = function () {
    do {
      enteredScore = parseInt(prompt('Enter a test score, or enter 999 to end.', 999));

      if (enteredScore >= 0 && enteredScore <= 100) {
        console.log(enteredScore);

        scoreCount += 1;
        console.log(scoreCount);

        totalScores += enteredScore;
        console.log(totalScores);

        let average = parseInt(totalScores / scoreCount);

        console.log(average);
      } else if (enteredScore != 999) {
        alert('The score must be a valid number from 0 through 100!');
      }
    } while (enteredScore != 999);

    //   spnAverage.innerHTML += '<h2>Average score is ' + average + '</h2>';
    //   console.log(average);
  };
  spnAverage.innerHTML += '<h2>Average score is ' + average + '</h2>';
  console.log(average);
};
