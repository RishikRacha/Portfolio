const array = ["green" , "red", "yellow", "blue"];
let answer = [];
let isWrong = false;
let seq = [];

    //  BUTTON CLICK
$('.btn').on('click', function() { 
    //Add to answer array
    let pressedButton = this;
    let color = this.id;
    console.log(this.id + " button pressed");
    answer.push(array.indexOf(color));
    console.log("pressed sequence: " + answer);
    checkAnswer();

    if(!isWrong){
            //Sound
        let audio = new Audio('./sounds/' + color + '.mp3');
        audio.play();
        
            //Animation
        this.classList.add('pressed');
        setTimeout(function() {pressedButton.classList.remove("pressed");}, 100);
        

}
    else { gameOver(); }
})

function clickButton(button) {
    $('#' + button).trigger('click');
}


    //gives sequence after clicking level name
$('h1').on('click', function() {
    levelUp();
})

function levelUp(){
    seq.push(Math.floor(Math.random() * 4));
    console.log("leveled up. seq: " + seq);
    $('h1').text("Level "+seq.length);
    setTimeout(() => {
    
    answer=[];
    animateQuestion(seq,0,seq.length)}, 1000);
}

    //animate sequence as question
function animateQuestion(seq,i,level) {
    if(i<level && !isWrong){
        $('#'+array[seq[i]]).addClass("pressed");
        setTimeout(() => {$('.btn').removeClass("pressed")},300);

        let audio = new Audio("./sounds/"+array[seq[i]]+".mp3");
        console.log(i+1 +" note played");
        audio.play();

        setTimeout(function() {
            animateQuestion(seq,i+1,level)
        }, 600)
    }

}

function gameOver(){
    console.log('Game Over! Your score is ' + (seq.length-1));
    
    $("body").addClass('game-over');
    $(".btn").addClass('pressed');
    let audio = new Audio('./sounds/wrong.mp3'); audio.play();
    $("h1").text("Game Over!")
}

function checkAnswer() {
    if(seq.length == 0) {
        levelUp();
        return;
    }

    for(let i=0; i<answer.length; i++){
        if(answer[i] != seq[i]){
            isWrong=true;
            gameOver();
            return;
        }

        else{
            console.log("correct so far");
        }
    }


    if(answer.length >= seq.length && !isWrong) levelUp();
    else console.log("correct so far");
        
}

