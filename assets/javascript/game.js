$(document).ready(function() {
    //Intro variables held pretty much forever.
    var gameChosen = true;
    var heroChosen = "";
    // starts the game, also can be used to reset. 
    function initializeGame(){
        $(".hero").on('click' , function(){
            heroChosen = $(this).attr("value");
            this.detach().appendTo('#heroClassDiv')
            console.log(heroChosen)

            if(heroChosen === "Rouge"){
            }

            
        });
    }
    initializeGame();

})