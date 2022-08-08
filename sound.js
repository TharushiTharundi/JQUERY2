let click = 1;
let isplaying = false;
let audio =  new Audio("sounds/mixkit-game-show-suspense-waiting-667.wav");
let audio1 = new Audio("sounds/Blooming-Melody.mp3");
let audio2 = new Audio("sounds/Calm-and-Peaceful.mp3");
let audio3 = new Audio("sounds/Spring-Flowers.mp3");
let audio4 = new Audio("sounds/Otjanbird-Pt.-II.mp3");
let audio5 = new Audio("sounds/Spring-Flowers.mp3 ");



$(':button').click(function (){
  
    var index = $(this).index(':button');
   
    

    switch(index){
        case 0 :
           
            // click++
            // audio.pause();
            // audio.currentTime = 0;

            if(index == 0 && click == 1){
                click++;
                audio.play();
            }else{
                audio.pause();
                audio.currentTime = 0;
           
            }
            
            break;




        case 1 :
           // audio1.play();
            if(index == 1 && click == 2){
                click++;
                    audio1.play();
                   
            }else{
                audio1.pause();
                audio1.currentTime = 0;
           
            }
            
          break;


            
        case 2 :
            
            if (index == 2 &&  click == 3) {
                click++;
                audio2.play();

            } else {
                audio2.pause();
                audio2.currentTime = 0;
                
            }
       
          break; 





         case 3 :
            if (index == 3 && click == 4) {
                click++;
                audio3.play();

            } else {
                audio3.pause();
                audio3.currentTime = 0;
                
            }
          
            break; 



         case 4 :
            if (index == 4 && click == 5) {
                click++;
                audio4.play();

            } else {
                audio4.pause();
                audio4.currentTime = 0;
                
            }

            break;

            
            
         case 5 :
            if (index == 5 && click == 6) {
                click++;
                audio5.play();

            } else {
                audio5.pause();
                audio5.currentTime = 0;
                
            }
                break;
    }
   
});







