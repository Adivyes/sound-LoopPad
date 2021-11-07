
let allAudioDivs = ['futureFunk','stutterBreakbeats','BassWarwick','electricGuitar','StompySlosh','GrooveB','MazePolitics','PAS3GROOVE1','SilentStar'];
let padsDivs = ['funkId','stutterId','bassId','guiterId','stompyId','groovId','politicId','pas3Id','starId']
let pendingAudio = [];



// function audioDelay(currentlyAudioClickedId){

//    for (let i = 0; i < allAudioDivs.length; i++) {

//     let audioDiv = document.getElementById(allAudioDivs[i]); 
//     if(allAudioDivs[i].isPlaying===true){

//     pendingAudio.push(currentlyAudioClickedId)

  
//     console.log(audioDiv.id,"paused");
//     }

    

//      else if (audioDiv.paused === false){
//         console.log(audioDiv.id, "is currently playing");//this log shows me what is currently playing

        
//       }
      
      
//    }
  
// }

// function myFunction(whoIsplaying) {
//     // Display the current position of the audio in numbers
//     console.log(audio.currentTime);
            
//                 if(audio.currentTime==audio.duratin){

//                     audio.play()
//                         break
//                 }
            
// }


 function padOnClick(audioId,padId) {
    let audio = document.getElementById(audioId);
    let padDivId = document.getElementById(padId).id;

    console.log(audio.duration);
    if(audio.paused === true){
        audio.loop = true;
        audio.load();
        audio.play();
        document.getElementById(padId).getElementsByTagName('SPAN')[0].innerHTML = `${'<span class="sound"><i class="far fa-play-circle" style="font-size: 30px"></i></span>'}`;

}
    
    else if(audio.paused === !true){
        console.log("isPlaying === true");
        audio = document.getElementById(audioId);
        audio.pause();
        audio.currentTime = 0;
        document.getElementById(padId).getElementsByTagName('SPAN')[0].innerHTML = `${'<span class="sound"><i class="far fa-stop-circle" style="font-size: 30px"></i></span>'}`;
    }

}  
 
  function stopAllSounds() {
  for (let i = 0; i < allAudioDivs.length; i++) {
    let soundStopBtn = document.getElementById(allAudioDivs[i]); 
      if (soundStopBtn.paused === !true) {
        soundStopBtn.pause();
        soundStopBtn.currentTime = 0;
        document.getElementsByClassName('sound')[i].innerHTML = `${'<i class="far fa-stop-circle" style="font-size: 30px"></i>'}`;

  }
  }
  }

  function playAllSounds(){
    for (let i = 0; i < allAudioDivs.length; i++) {
        let soundPlayBtn = document.getElementById(allAudioDivs[i]); 
          if (soundPlayBtn.paused === true) {
            soundPlayBtn.play();
            document.getElementsByClassName('sound')[i].innerHTML = `${'<i class="far fa-play-circle" style="font-size: 30px"></i>'}`;

    
      }
      }
  }
  

//     let audioCurrentTime;


//     audio.ontimeupdate = function() {myFunction()};

//     function myFunction() {
//     // Display the current position of the audio in numbers
//     console.log(audio.currentTime);
//     audioCurrentTime = currentTime
//   }
//     audio.ontimeupdate = function() {myFunction(audio)};
