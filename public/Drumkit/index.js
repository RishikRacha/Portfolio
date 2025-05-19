
for(i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonHtml = this.innerHTML;
        
        switch(buttonHtml){
            case 'w':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

            case 'a':
                var tom1 = new Audio('sounds/tom-2.mp3');
                tom1.play();
                break;

            case 's':
                var tom1 = new Audio('sounds/tom-3.mp3');
                tom1.play();
                break;
            
            case 'd':
                var tom1 = new Audio('sounds/tom-4.mp3');
                tom1.play();
                break;

            case 'j':
                var tom1 = new Audio('sounds/snare.mp3');
                tom1.play();
                break;

            case 'k':
                var tom1 = new Audio('sounds/crash.mp3');
                tom1.play();
                break;

            case 'l':
                var tom1 = new Audio('sounds/kick-bass.mp3');
                tom1.play();
                break;

            default:
                break;
        }
        console.log(buttonHtml);
        buttonAnimation(buttonHtml);
    });

}


document.addEventListener("keydown", function(event) {
    // console.log(event);
    let buttonHtml = event.key;
    
        switch(buttonHtml){
            case 'w':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                // console.log(event);
                break;

            case 'a':
                var tom1 = new Audio('sounds/tom-2.mp3');
                tom1.play();
                break;

            case 's':
                var tom1 = new Audio('sounds/tom-3.mp3');
                tom1.play();
                break;
            
            case 'd':
                var tom1 = new Audio('sounds/tom-4.mp3');
                tom1.play();
                break;

            case 'j':
                var tom1 = new Audio('sounds/snare.mp3');
                tom1.play();
                break;

            case 'k':
                var tom1 = new Audio('sounds/crash.mp3');
                tom1.play();
                break;

            case 'l':
                var tom1 = new Audio('sounds/kick-bass.mp3');
                tom1.play();
                break;

            default:
                // var tom1 = new Audio('sounds/tom-1.mp3');
                // tom1.play();
                console.log(buttonHtml);
                break;

        }
        buttonAnimation(buttonHtml);
}


)

function buttonAnimation(buttonHtml){
    let activeButton = document.querySelector('.' + buttonHtml);
    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}