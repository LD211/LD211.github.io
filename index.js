var introMessage = true;
let startwordle = false;
let wordleanswer = "";
let wordleCount = 0;
var intervalId = 5;
var wordbombTicker = false;
var wordleTicker = false;
var incorrect = false;
var maxInteger = 2000;
var randomNumber = getRandomInteger(0, maxInteger);
var prompt;
var wordbombIntroprompt = true;
var cache = "";
var wordBombCount = 0;
const originalInput = document.getElementById("userInput");
const customInput = document.createElement("div");
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.type = "sawtooth";
let frequency = 440;
oscillator.connect(audioContext.destination);
customInput.className = "custom-input";
customInput.innerText = document.getElementById("userInput");
//originalInput.insertAdjacentElement('afterend',customInput);
const cursor = document.createElement("div");
cursor.className = "cursor";
customInput.appendChild(cursor);
function introduction() {
  const hello =
    "\r\n\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\r\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\nFor a list of commands, type 'commands'";
  const asciiArt = "For a list of commands, type 'commands'\n";
  fasterText(hello);
  // const introText = "For a list of commands, type 'commands'\n";
  // slowText(introText,null);
}
introduction();

window.addEventListener("touchstart", () => {
  document.getElementById("userInput").focus();
});

window.addEventListener("click", () => {
  document.getElementById("userInput").focus();
});
function inputs() {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userInput").addEventListener("input", () => {
      document.getElementById("terminal").innerText =
        document.getElementById("userInput").value;
    });
    var consoleInput = document.getElementById("userInput");
    const terminal = document.getElementById("terminal");
    consoleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (
          document.getElementById("userInput".value == "wordbomb") ||
          document.getElementById("userInput").value == "word bomb" ||
          wordbombTicker == true
        ) {
          DCL("wordbomb");
          wordbombTicker = true;
          WordBomb();
        } else if (
          document.getElementById("userInput").value.toUpperCase() ==
            "WORDLE" || wordleTicker === true
        ) {
          wordleTicker = true;
          wordle();
        } else {
          userInput();
        }
      }
    });
  });
}
inputs();
function userInput() {
  var inputValue = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";
  document.getElementById("terminal").innerText = "";
  var output = document.getElementById("output");
  var displayText = "";
  var link = document.createElement("a");

  //now entering cases for the terminal
  if (inputValue == "instagram") {
    DCL("instagram");
    console.log("what");
    displayText = "my instagram account: ";
    link.href = "https://instagram.com/LD";
    link.target = "_blank";
    link.innerHTML = "@ld";
  } else if (inputValue == "twitter") {
    DCL("twitter");
    displayText = "my twitter account: ";
    link.href = "https://twitter.com/untitled";
    link.target = "_blank";
    link.innerHTML = "@untitled";
  } else if (inputValue == "twitch") {
    displayText = "my twitch account: ";
  } else if (inputValue == "monkeytype") {
    DCL("monkeytype");
    displayText = "my monkeytype account: ";
    link.href = "https://monkeytype.com/profile/ld_";
    link.target = "_blank";
    link.innerHTML = "@LD_";
  } else if (inputValue == "vim") {
    DCL("vim");
    window.open("https://LD211.github.io/jim");
  } else if (inputValue == "btc") {
    DCL("btc");
    var dataString = "";
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    )
      .then((response) => response.json())
      .then((data) => {
        dataString = JSON.stringify(data);

        slowText(dataString);
      })
      .catch((error) => console.error(error));
  } else if (inputValue == "xrp") {
    DCL("xrp");
    var dataString = "";
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd",
    )
      .then((response) => response.json())
      .then((data) => {
        dataString = JSON.stringify(data);

        slowText(dataString);
      })
      .catch((error) => console.error(error));
  } else if (inputValue.search(new RegExp("background")) !== -1) {
    DCL("background");
    const bckgrnd = inputValue.split(" ");
    if (bckgrnd[1] == "matrixrain") {
      document.body.style.backgroundImage = "url('matrixrain.gif')";
    } else if (bckgrnd[1] == "gold") {
      output.innerHTML = "";
      var audio = new Audio("yeat.mp3");
      audio.volume = .1;
      audio.play();
      document.body.style.backgroundImage = "url('goldcoindim.png')";
      const ascii = document.getElementById("ascii").innerHTML;
      document.getElementById("ascii").classList.add("visible");
    }
  } else if (inputValue == "commands") {
    DCL("commands");
    displayText =
      "\n'typehero': play my typehero game\n'vim': open my version of vim on the browser\n'instagram': displays instagram\n'twitter': displays twitter\n'secret': unknown\n'goto': type goto examplewebsite.com to enter a new website\n'word bomb': play word bomb\n'monkeytype': displays monkeytype profile\nxrp': display xrp price\n'btc': display btc price\n'clear': clears the terminal\n'background ____': changes background, options: 'matrixrain'";
    fasterText(displayText);
    displayText = "";
  } else if (inputValue == "secret") {
    DCL("secret");
    displayText =
      "there are a few secret commands in this terminal, see if you can find them all";
  } else if (
    inputValue.charAt(0) == "g" && inputValue.charAt(1) == "o" &&
    inputValue.charAt(2) == "t" && inputValue.charAt(3) == "o"
  ) {
    DCL("goto");
    displayText = "You should be redirected to the intended website.";
    var linkToGoTo = "";
    for (var n = 5; n < inputValue.length; n++) {
      linkToGoTo += inputValue.charAt(n);
    }
    link.href = "https://" + linkToGoTo + "";
    link.target = "_blank";

    window.open(link);
  } else if (inputValue == "clear") {
    DCL("clear");
    output.innerHTML = "";
    displayText = "terminal cleared.";
  } else if (inputValue.toLowerCase() == "typehero") {
    window.open("https://LD211.github.io/typehero");
  } else {
    noText();
    displayText = "Unknown command, please type a command in 'commands'";
  }
  //now going to display the text slowly
  slowText(displayText, link);
}

function noText() {
  clearInterval(intervalId);
}

function DCL(textadded) {
  document.querySelector(".userpath").textContent = textadded;
}

function slowText(strValue, link) { //function to display text slowly, kinda like a cool terminal like chatgpt
  let j = 0;
  if (strValue.length === 0) return;
  var interval = setInterval(() => {
    if (j < strValue.length) {
      if (strValue.charAt(j) === "\n") {
        output.innerHTML += "<br>";
        j++;
      } else {
        output.innerHTML += strValue.charAt(j);
        j++;
      }
    } else {
      clearInterval(intervalId);
      if (link != null) {
        output.appendChild(link);
      }
    }
  }, 50);
  intervalId = interval;
  if (strValue != "") output.innerHTML += "<br><br>";
}

function fasterText(strValue) {
  if (strValue.length === 0) return;
  var j = 0;
  var interval = setInterval(() => {
    if (j < strValue.length) {
      if (strValue.charAt(j) === "\n") {
        output.innerHTML += "<br>";
        j++;
      } else {
        output.innerHTML += strValue.charAt(j);
        j++;
      }
    } else {
      clearInterval(intervalId);
      output.innerHTML += "<br><br>";
    }
  }, 10);
  intervalId = interval;
}

function wordBombInput(prompt) {
  noText();
  document.getElementById("terminal").innerText = "";
  if (introMessage == true) {
    document.getElementById("output").innerHTML = "";
    var wordbombtext =
      "Welcome to the word bomb state, your goal is to fit the word in with the prompt given";
    var wordBombIntro =
      "\r\n\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2003\u2003\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\r\n\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2003\u2003\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\r\n\u2591\u255A\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2003\u2003\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255D\r\n\u2591\u2591\u2588\u2588\u2588\u2588\u2554\u2550\u2588\u2588\u2588\u2588\u2551\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2003\u2003\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\r\n\u2591\u2591\u255A\u2588\u2588\u2554\u255D\u2591\u255A\u2588\u2588\u2554\u255D\u2591\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2003\u2003\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255D\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u255A\u2550\u255D\u2591\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2566\u255D\r\n\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2003\u2003\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\nWelcome to the word bomb state, your goal is to fit the word in with the prompt given";
    fasterText(wordBombIntro);
    introMessage = false;
    document.getElementById("userInput").value = "";
    return;
  }

  var inputValue = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";
  var output = document.getElementById("output");
  var displayText = "";

  fetch("words.txt")
    .then((response) => response.text())
    .then((text) => {
      const wordList = text.trim().split("\n");
      const inputValueToUpperCase = inputValue.toUpperCase().trim();
      const promptValue = prompt.trim();

      const matches = wordList.some((word) =>
        word == inputValue.toUpperCase() &&
        inputValueToUpperCase.search(new RegExp(promptValue)) !== -1
      );

      if (matches == true) {
        document.getElementById("output").innerHTML = "";
        displayText = "correct, good job!";
        fasterText(displayText);

        //displayText = "correct, good job!!";
        randomNumber = getRandomInteger(0, maxInteger);
        //slowText(getWord(randomNumber),null);

        wordBombCount++;
        if (wordBombCount == 9) {
          wordBombCount = 0;
          document.getElementById("output").innerHTML = "";
        }
        incorrect = false;
        WordBomb();
      } else {
        incorrect = true;
      }
    });
  if (inputValue.search(new RegExp("!solve")) !== -1) {
    const prompt = inputValue.split(" ");

    fetch("words.txt")
      .then((response) => response.text())
      .then((text) => {
        const wordSolution = text.trim().split("\n");

        const solution = wordSolution.find((word) =>
          word.search(new RegExp(prompt[1].toUpperCase())) !== -1
        );

        if (solution) {
          displayText = "the answer is " + solution;
          slowText(displayText, null);
        } else {
          displayText = "Word cannot be found";
          slowText(displayText, null);
        }
      });
  }
  if (inputValue.search(new RegExp("!set")) !== -1) {
    const setter = inputValue.split(" ");
    if (setter[1] > 8522) {
      setter[1] = 8522;
    }
    maxInteger = setter[1];
  }
  if (inputValue.search(new RegExp("!longest")) !== -1) {
    const promptLongest = inputValue.split(" ");
    fetch("words.txt")
      .then((response) => response.text())
      .then((text) => {
        const longestSolution = text.trim().split("\n");
        const longestAnswer = [];
        longestSolution.forEach((element) => {
          if (
            element.search(new RegExp(promptLongest[1].toUpperCase())) !== -1
          ) {
            longestAnswer.push(element);
          }
        });
        var answer = "";

        longestAnswer.forEach((solution) => {
          if (solution.length > answer.length) {
            answer = solution;
          }
        });

        displayText = answer;
        slowText(displayText);
      });
  }
  if (inputValue.search(new RegExp("!list")) !== -1) {
    const promptLongest = inputValue.split(" ");
    fetch("words.txt")
      .then((response) => response.text())
      .then((text) => {
        const theList = text.trim().split("\n");
        const theArrayList = [];
        theList.forEach((element) => {
          if (
            element.search(new RegExp(promptLongest[1].toUpperCase())) !== -1
          ) {
            theArrayList.push(element);
          }
        });
        theArrayList.sort((a, b) => {
          return b.length - a.length;
        });

        fasterText(
          "\n" + theArrayList.length + " solutions " +
            theArrayList.toString().replaceAll(/,/g, " "),
        );
      });
  }
  if (inputValue.search(new RegExp("!define")) !== -1) {
    const dictionaryWord = inputValue.split(" ");
    fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + dictionaryWord[1],
    )
      .then((response) => response.json())
      .then((data) => {
        const definition = data[0].meanings[0].definitions[0].definition;
        console.log(definition);
        dataString = JSON.stringify(definition);
        slowText(dataString);
      });
  }
  if (inputValue == "clear") {
    output.innerHTML = "";
  } else if (inputValue == "quit") {
    displayText = "exited word bomb, now back to the original state";
    wordbombTicker = false;
  }
  slowText(displayText, null);
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrompt() {
  return fetch("wordprompt.txt")
    .then((responses) => responses.text())
    .then((text) => {
      const promptList = text.trim().split("\n");
      const prompt = promptList[randomNumber].trim();
      regex = new RegExp("(\\b|\\W)" + prompt + "(\\b|\\W),'i'");

      displayPrompt = promptList[randomNumber] + "";
      //slowText(displayPrompt,null);
      if (incorrect == false) {
        if (wordbombIntroprompt == true) {
          cache = displayPrompt;
          setTimeout(function () {
            slowText(displayPrompt, null);
            wordbombIntroprompt = false;
          }, 7000);
        } else {
          if (displayPrompt != cache) {
            setTimeout(function () {
              cache = displayPrompt;
              slowText(displayPrompt, null);
            }, 500);
          }
        }
      }

      return displayPrompt;
    });
}

function WordBomb() {
  generatePrompt().then((prompt) => {
    wordBombInput(prompt);
  });
}

function getWord(randomnum) {
  fetch("wordprompt.txt")
    .then((response) => response.text())
    .then((text) => {
      const promptlist = text.trim().split("\n");
      const retValue = promptlist[randomnum];
      return retValue;
    });
}

async function wordle() {
  if (startwordle === false) {
    wordleanswer = await generateWordle();
    startwordle = true;
  }
  var validWordle = false;
  let wordleInput = document.getElementById("userInput").value;
  document.getElementById("terminal").innerText = "";
  document.getElementById("userInput").value = "";
  let realtext;
  if (wordleInput.length != 5) {
    output.innerHTML += "<br>";
    fasterText("you must type a word containing exactly 5 characters");
    return;
  }
  fetch("wordle.txt")
    .then((response) => response.text())
    .then((text) => {
      const wordleList = text.trim().split("\n");
      realtext = wordleList[38];
      const alidWordle = wordleList.some((wordlerd) =>
        wordleInput.trim().toLowerCase() == wordlerd.trim().toLowerCase()
      );
      if (alidWordle) {
        let wordleAnswer = "";
        for (let i = 0; i < wordleInput.length; i++) {
          if (wordleInput[i] == wordleanswer[i]) {
            wordleAnswer += correctChar(wordleInput[i]);
          } else if (wordlecontains(wordleInput[i], wordleanswer)) {
            wordleAnswer += semicorrectChar(wordleInput[i]);
          } else {
            wordleAnswer += wordleInput[i];
          }
        }
        output.innerHTML += "<br>" + wordleAnswer;
        wordleCount++;
        if (wordleanswer === wordleInput) {
          slowText("nice job! solved in " + wordleCount + " attempts");
          wordleTicker = false;
        }
      } else {
        output.innerHTML += "<br>";
        fasterText(
          wordleInput + " is not a valid word.",
        );
        return;
      }
    });
}

function wordlecontains(characterInput, answerWordle) {
  for (let i = 0; i < answerWordle.length; i++) {
    if (characterInput == answerWordle[i]) {
      return true;
    }
  }
  return false;
}

async function generateWordle() {
  DCL("wordle");
  return await fetch("wordle.txt")
    .then((response) => response.text())
    .then((text) => {
      const wordleList = text.trim().split("\n");
      let wordleNumber = getRandomInteger(0, wordleList.length);
      return wordleList[wordleNumber].trim();
    });
}

function correctChar(character) {
  return "<span class='green'>" + character + "</span>";
}

function semicorrectChar(character) {
  return "<span class='yellow'>" + character + "</span>";
}
