//startfunction

function start(){

    //document getelement start button

    document.getElementById("startButton").disabled = true;
    alert("you have pushed start");

    //document getelement stop button

    document.getElementById("stopButton").disabled = false;
    
    }
    function stop(){
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
        alert("you have pushed the stop button")
        
    }
   
    function playstation() {

        //mysound start *//
    
        mysound = new sound("spacesound-7547.mp3");
    
        //my sound + play *//
    
        mysound.play();
    
    
    
    }
    
    //function begining
    
    function sound(src) {
    
        //audio play *//
    
        this.sound = document.createElement("audio");
    
        //add src to sound *//
    
        this.sound.src =src;
    
        //setattribute *//
    
        this.sound.setAttribute("preload","auto");
    
        // control for sound *//
    
        this.sound.setAttribute("controls","none");
    
        // style for sound *//
    
        this.sound.style.display = "none";
    
        //document body *//
    
        document.body.appendChild(this.sound)
    
        //play fuction *//
    
        this.play = function() {
    
            // sound. play *//
    
             this.sound.play();
    
           
    
        }
    
        //stop function *//
    
        this.stop = function() {
    
            //pause function *//
    
            this.sound.pause();
    
        }}
