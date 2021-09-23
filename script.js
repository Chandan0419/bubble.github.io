var timerElem = document.querySelector('.timerElem')
var clickElem = document.querySelector('.clickElem')
var scoreElem = document.querySelector('.scoreElem')
var Bottom = document.querySelector('#bottom')



var timer = 60;
var score = 0;
var rnnum;



function initialization() {
    var count = "";
    for (var i = 1; i < 91; i++) {
        count += `<div id="bubble">
<h4>${Math.floor((Math.random())*10)}</h4>
</div>`;
    }
    Bottom.innerHTML = count;
}


function showingtimer() {
    setInterval(function() {
        if (timer <= 0) {
            Bottom.innerHTML = "Game Over  (Made By.CHANDAN)";
        } else {
            timer--;
            timerElem.textContent = timer;
        }
    }, 1500);
}

function Click() {
    rnnum = Math.floor(Math.random() * 10);
    clickElem.textContent = rnnum;
}

function Increment() {
    score = score + 10;
    scoreElem.textContent = score;
}


Bottom.addEventListener('click', function(val) {
    var num = Number(val.target.textContent);
    if (rnnum === num) {
        Increment();
    }
    initialization();
    Click();

})


initialization();
Click();
showingtimer();