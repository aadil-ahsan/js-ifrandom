// event listener

document.getElementById("8ball").addEventListener("click", btnClicked);

// html variables
let outputEl = document.getElementById("output");
let inputEl = document.getElementById("input");

function btnClicked() {
  let response = inputEl.value;
  let num = Math.random();
  if (response.length === 0) {
    outputEl.innerHTML = "Please ask a question...";
  } else if (response === "does a magic 8 ball actually work?") {
    outputEl.innerHTML = "How dare you doubt me!";
  } else if (response === "is javascript awesome?") {
    outputEl.innerHTML = "Of course!";
  } else if (num < 0.2) {
    outputEl.innerHTML = "Without a doubt.";
  } else if (num < 0.4) {
    outputEl.innerHTML = "As I see it, yes.";
  } else if (num < 0.6) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (num < 0.8) {
    outputEl.innerHTML = "Don't count on it.";
  } else if (num < 1) {
    outputEl.innerHTML = "Outlook not so good.";
  }
}
