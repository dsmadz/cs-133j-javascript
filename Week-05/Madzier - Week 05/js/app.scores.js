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
  let totalScore = 0;
  let average = 0;
  let bestScore = 0;
  let worstScore = 100;

  // Sets window.document.getElementById to variable getId.
  function $(getId) {
    return window.document.getElementById(getId);
  }
  // Calls function on button click.
  btn.onclick = function () {
    do {
      // Prompts for a number, if Nan then if else alerts.
      enteredScore = parseInt(prompt('Enter a test score, or enter 999 to end.', 999));

      // Checks if response is a number from 0 through 100.
      if (enteredScore >= 0 && enteredScore <= 100) {
        console.log('Score: ', enteredScore);

        // Counts the total number of scores entered.
        scoreCount += 1;
        console.log('Score count: ', scoreCount);

        // Calculates the total of all scores.
        totalScore += enteredScore;
        console.log('Total scores value: ', totalScore);

        // Calculates the average score.
        average = parseInt(totalScore / scoreCount);
        console.log('Average: ', average);

        // Calculates the best and worst scores.
        let bestWorst = enteredScore;
        if (bestWorst > bestScore) {
          bestScore = bestWorst;
        }
        if (bestWorst < worstScore) {
          worstScore = bestWorst;
        }
        // Checks output of best and worst.
        console.log('Best score:', bestScore);
        console.log('Worst score:', worstScore);

        // Outputs data to index.html.
        spnCount.innerHTML = `<h2>There were: ${scoreCount} scores entered.</h2>`;
        spnTotal.innerHTML = `<h2>The total of all scores is: ${totalScore}</h2>`;
        spnAverage.innerHTML = `<h2>The average score is: ${average}</h2>`;
        spnWorst.innerHTML = `<h2>The worst score is: ${worstScore}</h2>`;
        spnBest.innerHTML = `<h2>The best score is: ${bestScore}</h2>`;
        spnScore.innerHTML = `<h2>The last score entered is: ${enteredScore}</h2>`;

        // Alerts if entered data is Nan or out of range.
      } else if (enteredScore != 999) {
        alert('The score must be a valid number from 0 through 100!');
      }

      // Continues loop while score is not 999.
    } while (enteredScore != 999);
  };
};
