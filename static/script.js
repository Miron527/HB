let currentScreen = 0;

const screens = document.querySelectorAll(".screen");


// 🎁 Кнопка открыть поздравление

function openGift(){

    const music = document.getElementById("music");

    if(music){

        music.volume = 0.5;

        music.play().catch(()=>{});

    }


    nextScreen();

}



// ➡️ Дальше

function nextScreen(){


    if(currentScreen < screens.length - 1){


        currentScreen++;


        screens[currentScreen].scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    }


}