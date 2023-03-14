var introMessage = true;
var wordbombTicker = false;
var incorrect = false;
var randomNumber = getRandomInteger(0,9);
function introduction(){
    const hello = "\r\n\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\r\n\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\r\n\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u255D\u2591\nFor a list of commands, type 'commands'";
    const asciiArt = "For a list of commands, type 'commands'\n";
    fasterText(hello);
    // const introText = "For a list of commands, type 'commands'\n";
    // slowText(introText,null);
}
introduction();


function inputs(){document.addEventListener("DOMContentLoaded",function(){
    var consoleInput = document.getElementById("userInput");
    consoleInput.addEventListener("keydown", e =>{
        if(e.key==="Enter"){
            if(document.getElementById("userInput".value=="wordbomb")||document.getElementById("userInput").value=="word bomb"||wordbombTicker==true){
                wordbombTicker=true;
                WordBomb();
            } else{
                userInput();
            }
        }
    });
});
}
inputs();
function userInput(){
    var inputValue = document.getElementById("userInput").value;
    
    document.getElementById("userInput").value = "";
    var output = document.getElementById("output");
    var displayText = "";
    var link = document.createElement("a");

    //now entering cases for the terminal
    if(inputValue=="instagram"){
        displayText = "my instagram account: ";
        link.href = "https://instagram.com/LD";
        link.target = "_blank";
        link.innerHTML = "@ld";
    }
    else if(inputValue=="twitter"){
        displayText = "my twitter account: ";
        link.href = "https://twitter.com/untitled";
        link.target = "_blank";
        link.innerHTML = "@untitled";
    }
    else if(inputValue =="sphenopalatineganglioneuralgia"){
        displayText = "holy shit! a based word bomb player, very impressive.";
    }
    else if(inputValue == "wordbomb"|| inputValue== "word bomb"){
        console.log("i should not be here");
    }
    else if(inputValue=="commands"){
        displayText = "'instagram': displays instagram\n'twitter': displays twitter\n'secret': unknown\n'goto': type goto examplewebsite.com to enter a new website\n'word bomb': play word bomb";
    }
    else if(inputValue== "secret"){
        displayText = "there are a few secret commands in this terminal, see if you can find them all";
    }
    else if(inputValue.charAt(0)=='g'&&inputValue.charAt(1)=='o'&&inputValue.charAt(2)=='t'&&inputValue.charAt(3)=='o'){
        displayText = "You should be redirected to the intended website.";
        var linkToGoTo="";
        for(var n = 5; n<inputValue.length;n++){
            linkToGoTo+=inputValue.charAt(n);
        }
        console.log(linkToGoTo);    
        window.open(linkToGoTo,"_blank");
    }
    else if(inputValue=="clear"){
        output.innerHTML="";
        displayText = "terminal cleared.";
    } else {
        displayText = "Unknown command, please type a command in 'commands'";
    }
    //now going to display the text slowly
    slowText(displayText,link);
}

function slowText(strValue, link){//function to display text slowly, kinda like a cool terminal like chatgpt
    var j = 0;
    
    var interval = setInterval(() =>{
        if(j < strValue.length){
            if(strValue.charAt(j)==='\n'){
                output.innerHTML+="<br>";
                j++;
            } else {
                output.innerHTML+= strValue.charAt(j);
                j++;
            }
        } else {
            clearInterval(interval);
            if(link!=null){
                output.appendChild(link);
            }
            
        }
    },50);
    if(strValue!="")output.innerHTML+="<br><br>";
}

function fasterText(strValue){
    var j = 0;
    var interval = setInterval(() =>{
        if(j < strValue.length){
            if(strValue.charAt(j)==='\n'){
                output.innerHTML+="<br>";
                j++;
            } else {
                output.innerHTML+= strValue.charAt(j);
                j++;
            }
        } else {
            clearInterval(interval);
            output.innerHTML+="<br><br>";
        }
    },10);

}



function wordBombInput(prompt){
    
    if(introMessage==true){
        slowText("Welcome to the word bomb state, your goal is to fit the word in with the prompt given.",null);
        introMessage = false;
        document.getElementById("userInput").value = "";
        return;
    }
    var inputValue = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    var output = document.getElementById("output");
    var displayText = "";
    console.log(randomNumber);
    //var regex = /nothing/;
    //var displayPrompt="";
    // fetch('wordprompt.txt')
    //     .then(responses => responses.text())
    //     .then(text=>{
    //         const promptList = text.trim().split('\n');
    //         const prompt = promptList[randomNumber].trim();
    //         regex = new RegExp(prompt,'i');
    //         console.log(regex);
    //         displayPrompt = promptList[randomNumber]+"";
    //         //slowText(displayPrompt,null);
    //         slowText(displayPrompt,null);

    //     });

    const regex = new RegExp(prompt, 'i');
    
    fetch('words.txt')
        .then(response => response.text())
        .then(text => {
            const wordList = text.trim().split('\n');

            //slowText("type a word with cu in it");
            console.log("running to see if  is tested by " + regex + "and seen in "+inputValue);
            const matches = wordList.some(word => regex.test(word.toUpperCase()) && word.toUpperCase().includes(inputValue.toUpperCase()));
            console.log("matches should determine if "+ regex +"matches with"+ inputValue);
            console.log(inputValue);
            console.log(matches);
            if(matches == true){
                slowText("correct, good job!",null);
                displayText = "correct, good job!!";
                randomNumber = getRandomInteger(0,9);
                incorrect = false;
            } else {
                incorrect = true;
            }
        
    });

    if(inputValue=="clear"){
        output.innerHTML="";
    }
    else if(inputValue=="quit"){
        displayText = "exited word bomb, now back to the original state";
        wordbombTicker = false;
    }
    slowText(displayText,null);
}

function getRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
    
}

function generatePrompt(){
    fetch('wordprompt.txt')
    .then(responses => responses.text())
    .then(text=>{
        const promptList = text.trim().split('\n');
        const prompt = promptList[randomNumber].trim();
        regex = new RegExp(prompt,'i');
        console.log(regex);
        displayPrompt = promptList[randomNumber]+"";
        //slowText(displayPrompt,null);
        if(incorrect==false){
            slowText(displayPrompt,null);
        }
        
        return regex;
    });
}

function WordBomb(){
    var prompt;
    setTimeout(function(){
        prompt = generatePrompt(); 
    },5000);
    wordBombInput(prompt);


}