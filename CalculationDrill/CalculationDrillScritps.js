function checkSetting (questionNumber, digitMin, digitMax, limitTime) {
    errorMessageReset ();
    isInputError = false;
    if(!questionNumber) isInputError = inputError (document.getElementById("numberOfQuestionsNull"));
    if(questionNumber > 100) isInputError = inputError (document.getElementById("numberOfQuestionsIllegal"));
    if(!digitMin) isInputError = inputError (document.getElementById("minimumDigitsNull"));
    if(digitMin < 1) isInputError = inputError (document.getElementById("minimumDigitsIllegal"));
    if(digitMin > digitMax) isInputError = inputError (document.getElementById("minimumDigitsCompare"));
    if(!digitMax) isInputError = inputError (document.getElementById("maxDigitsNull"));
    if(digitMax > 4) isInputError = inputError (document.getElementById("maxDigitsIllegal"));
    if(digitMin > digitMax) isInputError = inputError (document.getElementById("minimumDigitsCompare"));
    if(document.getElementById("timeLimitSetting").checked && !limitTime) isInputError = inputError (document.getElementById("timeLimitNull"));
    if(isInputError) return;
    else{
        createDrill (questionNumber, digitMin, digitMax, limitTime);
        drillStart ();
    }
}
function createDrill (questionNumber, digitMin, digitMax, limitTime) {
    const parentList = document.getElementById("drillEntity");
    const prefix = "    ";
    if(parentList.getElementsByTagName("li").length > 0) parentList.innerHTML = "";
    let min = digitMin === 1 ? 0 : Math.pow(10, digitMin - 1);
    let max = Math.pow(10, digitMax) - 1;
    let arithmeticOperations = document.getElementById("useOperations").value.split(",");
    for(let i=0; i<questionNumber; i++){
        let leftSide = Math.floor(Math.random() * (max - min) + min);
        let leftSideString = (prefix + leftSide.toString(10)).slice(-4);
        let operationNum = Math.floor(Math.random() * arithmeticOperations.length);
        let questionOperation = arithmeticOperations[operationNum];
        let rightSide = Math.floor(Math.random() * (max - min) + min);
        let rightSideString = (prefix + rightSide.toString(10)).slice(-4);
        let answerValue = makeAnswer (leftSide, rightSide, operationNum);
        let questionlist = document.createElement("li");
        let questionEntity = document.createElement("span");
        let answerForm = document.createElement("input");
        answerForm.type = "number";
        answerForm.name = "answerForm";
        answerForm.className = "answerForm";
        let answerDisplay = document.createElement("input");
        answerDisplay.type = "number";
        answerDisplay.name = "answerDisplay";
        answerDisplay.className = "answerDisplay";
        questionEntity.innerText = leftSideString + " " + questionOperation + " " + rightSideString + " = ";
        answerDisplay.value = answerValue;
        questionlist.appendChild(questionEntity);
        questionlist.appendChild(answerForm);
        questionlist.appendChild(answerDisplay);
        parentList.appendChild(questionlist);
        document.getElementById("timeLimitCount").innerText = limitTime;
    }
    document.getElementById("questionCreateButton").disabled = "disabled";
    document.getElementById("endButton").style.display = "block";
}

function makeAnswer (left, right, operation) {
    let ans = 0;
    switch (operation) {
        case 0:
          ans = left + right;
          break;
        case 1:
          ans = left - right;
          break;
        case 2:
          ans = left * right;
          break;
        case 3:
          ans = left / right;
          break;
        default:
          break;
    }
    return ans;
}

function inputError (errMessage) {
    errMessage.style.display = "block";
    return true;
}

function errorMessageReset () {
    const errors = document.getElementsByClassName("errorMessage");
    const errorNum = errors.length;
    for (let j=0;j<errorNum;j++) {
        errors[j].style.display = "";
    }
}

function drillProgress (target, isEnd) {
    const curtain = target;
    const precount = parseInt(curtain.innerText);
    if (!precount) return;
    curtain.style.display = "block";
    let currentCount = precount;
    let timer = setInterval( function () {
        if (window.isInputError){
            curtain.innerText = precount.toString();
            curtain.style.display = "none";
            return;
        }
        currentCount--;
        curtain.innerText = currentCount.toString();
        if (isEnd && currentCount <= 5 && currentCount > 0){
            document.getElementById("timeLimitDisplay").classList.add("timeLimitRunningOut");
        } else if (currentCount <= 0){
            clearInterval(timer);
            curtain.innerText = precount.toString();
            curtain.style.display = "none";
            if (isEnd) drillEnd();
        } else if (isEnd && document.getElementById("drillEntity").getElementsByTagName("li")[0].getElementsByTagName("span").length > 1){
            clearInterval(timer);
            target.style.display = "none";
        }
    }, 1000);
}

function drillStart () {
    drillProgress(document.getElementById("countDown"), false);
    let drill = document.getElementById("drillEntity");
    drill.style.display = "none";
    let observer = new MutationObserver ( function (mutations) {
        if(document.getElementById("countDown").style.display === "none"){
            document.getElementById("timeLimitDisplay").style.display = "block";
            observer.disconnect();
            drill.style.display = "block";
            drillProgress(document.getElementById("timeLimitCount"), true);
        }
    });
    observer.observe( document.getElementById("countDown"), {
        attributes: true  
    })
}

function drillEnd () {
    document.getElementById("endButton").disabled = "disabled";
    document.getElementById("questionCreateButton").disabled = "disabled";
    let finishDisplay = document.getElementById("countDown");
    finishDisplay.style.display = "block";
    finishDisplay.innerText = "Finish!";
    setTimeout( function (){
        document.getElementById("timeLimitDisplay").style.display = "none";
        finishDisplay.style.display = "none";
        const questions = document.getElementById("drillEntity");
        const questionSub = questions.getElementsByTagName("li");
        const questionNumber = questionSub.length;
        let h = 0;
        let answered = setInterval( function () {
            if(h < questionNumber){
                let myAnswer = questionSub[h].getElementsByClassName("answerForm")[0];
                let correctAnswer = questionSub[h].getElementsByClassName("answerDisplay")[0];
                correctAnswer.style.display = "inline-block";
                if(myAnswer.value === correctAnswer.value){
                    let ok = document.createElement("span");
                    ok.innerText = "OK.";
                    questionSub[h].appendChild(ok);
                }else{
                    let ng = document.createElement("span");
                    ng.innerText = "NG.";
                    ng.style.color = "red";
                    questionSub[h].appendChild(ng);
                    myAnswer.style.color = "red";
                    myAnswer.style.backgroundColor =  "rgba(255, 1, 120, 0.2)";
                }
                
        }else{
            clearTimeout(answered);
            document.getElementById("reloadButton").style.display = "block";
        }
        h++;
        }, 500);
    }, 1000);
}