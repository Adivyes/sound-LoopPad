
let allAudioDivs = ['futureFunk','stutterBreakbeats','BassWarwick','electricGuitar','StompySlosh','GrooveB','MazePolitics','PAS3GROOVE1','SilentStar'];


function padOnClick(param,secondParam) {

    let audio = document.getElementById(param);

    if(audio.paused == true){
        audio.loop = true;
        audio.load();
        audio.play();
       
        document.getElementById(secondParam).getElementsByTagName('SPAN')[0].innerHTML = `${'<span class="sound"><i class="far fa-play-circle" style="font-size: 30px"></i></span>'}`;
    }
    
    else if(audio.paused == !true){
        let audio = document.getElementById(param);
        audio.pause();
        audio.currentTime = 0;
        document.getElementById(secondParam).getElementsByTagName('SPAN')[0].innerHTML = `${'<span class="sound"><i class="far fa-stop-circle" style="font-size: 30px"></i></span>'}`;
    }

    
  }

  function stopAllSounds() {
  for (let i = 0; i < allAudioDivs.length; i++) {
    let soundStopBtn = document.getElementById(allAudioDivs[i]); 
      if (soundStopBtn.paused == !true) {
        soundStopBtn.pause();
        soundStopBtn.currentTime = 0;
        document.getElementsByClassName('sound')[i].innerHTML = `${'<i class="far fa-stop-circle" style="font-size: 30px"></i>'}`;

  }
  }
  }

  function playAllSounds(){
    for (let i = 0; i < allAudioDivs.length; i++) {
        let soundStopBtn = document.getElementById(allAudioDivs[i]); 
          if (soundStopBtn.paused == true) {
            soundStopBtn.play();
            document.getElementsByClassName('sound')[i].innerHTML = `${'<i class="far fa-play-circle" style="font-size: 30px"></i>'}`;

    
      }
      }
  }
