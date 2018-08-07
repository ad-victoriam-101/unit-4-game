$(document).ready(function() {
    //Intro variables held pretty much forever.
    var heroPicked = false;
    var heroChosen = "";
    var rouge = {
        health: 100,
        speed: 15,
        strength: 3,
        ability: "Backstab"

    };
    var fighter = {
        health: 125,
        speed: 8,
        strength: 8,
        ability: "Stun"
    }
    var whiteMage = {
        health: 75,
        speed: 10,
        strength: 2,
        ability: "Heal"
    }
    var tank = {
        health: 175,
        speed: 5,
        strength: 5,
        ability: "Block"
    }
    var enemyType = {
        health: Math.floor(Math.random()*100)+50,
        speed: Math.floor(Math.random()*8)+5,
        strength: Math.floor(Math.random()*4)+5,
        ability: "shade"
    }
    console.log(enemyType)
    // starts the game, also can be used to reset. 
    function initializeGame(){
        $(".hero").on('click' , function(){
            heroChosen = $(this).attr("value");
            console.log(heroChosen)
            $(this).addClass("player").removeClass("hero")
            $(this).clone().appendTo("div.heroClassDiv")
            $(this).hide();
            
            $(".hero").hide(500);
            var $btn = $("<button>",{id:"button","class":"attack btn"});
            $btn.text("Attack!");
            
            $btn.click(function () {
                var roll = $('#button-str').val()
                var attack = Math.floor(Math.random()*10)+roll;
                console.log(attack)
            });
            $(".player").append($btn)
        });
        heroPicked = true;
    };
    console.log(heroPicked)
    if (heroPicked === true){
        var generateEnemy = function(){
            $(".player").clone().appendTo("enemyDiv")
            console.log(generateEnemy)
            };

        $(".attack").on('click', function(){
            if (enemyType.health === 0)
            alert("Enemy Beaten")
            else {
                console.log(enemyType.health-attack)
            }
             
        })
    }
generateEnemy();

initializeGame();

})