// event listener
document.getElementById("btn").addEventListener("click", btnClicked);

// HTML variables
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let output = document.getElementById("output");

// Function

function btnClicked() {
  let score = 0;
  let ans1 = document.getElementById("q1").value.toLowerCase();
  let ans2 = document.getElementById("q2").value.toLowerCase();
  let ans3 = document.getElementById("q3").value.toLowerCase();
  let ans4 = document.getElementById("q4").value.toLowerCase();
  // question 1
  if (ans1 === "false") {
    score++;
    output1.innerHTML = "Correct";
    output1.style = "color:green;";
  } else {
    output1.innerHTML = "Incorrect";
    output1.style = "color:red;";
  }

  // question 2
  if (ans2 === "false") {
    score++;
    output2.innerHTML = "Correct";
    output2.style = "color:green;";
  } else {
    output2.innerHTML = "Incorrect";
    output2.style = "color:red;";
  }

  // question 3
  if (ans3 === "true") {
    score++;
    output3.innerHTML = "Correct";
    output3.style = "color:green;";
  } else {
    output3.innerHTML = "Incorrect";
    output3.style = "color:red;";
  }
  // question 4
  if (ans4 === "css" || ans4 === "cascading style sheets") {
    score++;
    output4.innerHTML = "Correct";
    output4.style = "color:green;";
  } else {
    output4.innerHTML = "Incorrect";
    output4.style = "color:red;";
  }

  // grade

  percentage = (score / 4) * 100;
  output.innerHTML = `${score}/4 (${percentage}%)`;
}
