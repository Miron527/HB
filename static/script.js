// ==========================
// ПЕРЕМЕЩЕНИЕ ПО ЭКРАНАМ
// ==========================


let currentScreen = 0;


const screens = document.querySelectorAll(".screen");





function nextScreen(){


    if(currentScreen < screens.length - 1){


        currentScreen++;


        screens[currentScreen]
        .scrollIntoView({

            behavior:"smooth"

        });


        createGlow();


    }


}







// ==========================
// ОТКРЫТИЕ ПОДАРКА
// ==========================


function openGift(){



    // музыка

    let music =
    document.getElementById("music");


    if(music){

        music.play();

    }





    // салют

    fireworks();



    // конфетти

    createConfetti();




    setTimeout(()=>{


        nextScreen();


    },1200);



}







// ==========================
// КОНФЕТТИ
// ==========================


function createConfetti(){



    for(let i=0;i<120;i++){



        let item =
        document.createElement("div");



        item.className="confetti";



        item.style.left =
        Math.random()*100+"vw";



        item.style.background =
        randomColor();




        item.style.animationDuration =

        (2 + Math.random()*4)+"s";



        item.style.transform =

        "rotate("+
        Math.random()*360+
        "deg)";




        document.body.appendChild(item);




        setTimeout(()=>{


            item.remove();


        },5000);



    }



}








// ==========================
// САЛЮТ
// ==========================


function fireworks(){



    for(let i=0;i<80;i++){



        let star =
        document.createElement("div");



        star.className="firework";



        star.style.left="50%";

        star.style.top="45%";



        star.style.background =
        randomColor();




        let x =
        (Math.random()-0.5)*700;



        let y =
        (Math.random()-0.5)*700;



        star.style.setProperty(
        "--x",
        x+"px"
        );



        star.style.setProperty(
        "--y",
        y+"px"
        );





        document.body.appendChild(star);





        setTimeout(()=>{


            star.remove();


        },1500);



    }


}







// ==========================
// ЗОЛОТЫЕ ЧАСТИЦЫ
// ==========================


function createGlow(){



    for(let i=0;i<25;i++){



        let glow =
        document.createElement("div");



        glow.className="glow";



        glow.style.left =
        Math.random()*100+"vw";



        glow.style.top =
        Math.random()*100+"vh";



        document.body.appendChild(glow);




        setTimeout(()=>{


            glow.remove();


        },4000);



    }



}







// ==========================
// СЕРДЕЧКИ ФИНАЛ
// ==========================


function hearts(){



    for(let i=0;i<40;i++){



        let heart =
        document.createElement("div");



        heart.innerHTML="❤️";


        heart.className="heart";



        heart.style.left =
        Math.random()*100+"vw";



        heart.style.animationDuration =

        (3+Math.random()*3)+"s";



        document.body.appendChild(heart);




        setTimeout(()=>{


            heart.remove();


        },6000);



    }


}





// включаем сердечки,
// когда дошли до финала


window.addEventListener(
"scroll",
()=>{


let final =
document.querySelector(".final");


let position =
final.getBoundingClientRect().top;



if(// =====================================
// 🎂 САЙТ ДЕНЬ РОЖДЕНИЯ ПАПЫ
// =====================================


let currentScreen = 0;


const screens = document.querySelectorAll(".screen");



// =====================================
// 🎁 Открыть поздравление
// =====================================

function openGift(){


    const music = document.getElementById("music");


    if(music){

        music.volume = 0.5;

        music.play().catch(()=>{

            console.log("Музыка ждёт взаимодействия");

        });

    }


    nextScreen();


}




// =====================================
// ➡️ Следующий экран
// =====================================

function nextScreen(){


    if(currentScreen < screens.length - 1){


        currentScreen++;


        screens[currentScreen].scrollIntoView({

            behavior:"smooth",

            block:"start"

        });


    }


}



// =====================================
// 🎵 Запуск музыки после первого клика
// =====================================

document.addEventListener("click",()=>{


    const music = document.getElementById("music");


    if(music && music.paused){


        music.play().catch(()=>{});


    }


},{once:true});




// =====================================
// ✨ Появление элементов при прокрутке
// =====================================


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.2

});



document.querySelectorAll(".screen > *").forEach(el=>{


    observer.observe(el);


});





// =====================================
// 🔥 Защита от ошибок старых эффектов
// =====================================


// если остался старый код сердечек,
// он больше ничего не ломает

function randomColor(){


    return "#ffd86b";


}