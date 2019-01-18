//var numberButton = document.getElementById("number-button");
var codeContainer = document.getElementById("code-container");
var numberButtons = document.getElementsByClassName("buttonNumber");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var interval = 0;
var blink = setInterval;

function enableButtons() {
    for(i=0; i < numberButtons.length; i++){
        numberButtons[i].removeAttribute('disabled');
    }
}

function getNumber(clickedButton) {
    clickCounter++;
    codeContainer.innerHTML += clickedButton.value;
    if (clickCounter == 1) {
        numberOne = clickedButton.value;
        codeContainer.innerHTML = numberOne;
    }else if (clickCounter == 2){
        numberTwo = clickedButton.value;
    }else{
        numberThree = clickedButton.value;
    }
    
    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
    if (numberOne == 3 && numberTwo == 1 && numberThree ==1) {
        window.alert("Almost as good as SCHWERER PANZERSPÄHWAGEN SIEBEN KOMMA FÜNF ZENTIMETER SONDERKRAFTFAHRZEUG ZWEIHUNDERTVIERUNDDREISSIG / VIER PANZERABWEHRKANONENWAGEN");
        codeContainer.innerHTML = "Was ist dein code";
        clickCounter = 0;
        numberOne = undefined;
        numberTwo = undefined;
        numberThree = undefined;
        for(i=0; i < numberButtons.length; i++){
            numberButtons[i].setAttribute('disabled', 'disabled');
        }
        var blink = setInterval(function() {
            interval++;
        
            if (codeContainer.style.backgroundColor == 'green') {
                codeContainer.style.backgroundColor = 'white';
            }else {
                codeContainer.style.backgroundColor = 'green';
            }
        
            if (interval == 10) {
                clearInterval(blink);
                interval = 0;
                enableButtons();
            }
        }, 500);
       
        
    }
    else if (clickCounter == 3) {
        window.alert("The Führer would be disapointed")
        codeContainer.innerHTML = "Was ist dein code";
        clickCounter = 0;
        numberOne = undefined;
        numberTwo = undefined;
        numberThree = undefined;
        for(i=0; i < numberButtons.length; i++){
            numberButtons[i].setAttribute('disabled', 'disabled');
        }
        var blink = setInterval(function() {
            interval++;
        
            if (codeContainer.style.backgroundColor == 'red') {
                codeContainer.style.backgroundColor = 'white';
            }else {
                codeContainer.style.backgroundColor = 'red';
            }
        
            if (interval == 10) {
                clearInterval(blink)
                interval = 0;
                enableButtons();
            }
        }, 500);
    }
}