const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 
var pattern = [Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1];
var clueHoldTime = 1000; 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;
var mistakes=0;
var counter = 120;
var progressbar;

function startGame()
{
  clueHoldTime =1000;
  progressbar = 120;
  var changeTimer = setInterval(function() 
  {
  if(counter <= 0)
  {
    clearInterval(changeTimer);
    document.getElementById("countdown").innerHTML = "Times Up!";
    timesUP();
    counter = 120;
    progressbar =0;
  } 
  else 
  {
    document.getElementById("countdown").innerHTML = Math.floor(counter/60) + " Minutes " + (counter%60) + " Seconds";
    
    
  }
  counter -= 1;}, 1000); 
  
  var progressbarTimer = setInterval(function()
  {
  if(progressbar <= 0)
  {
    clearInterval(progressbar);
  }
  document.getElementById("progressBar").value =  120 - progressbar;
  progressbar -= 1;}, 1000);
  
  mistakes = 0;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden"); 
  playClueSequence();
}
function stopGame(){
    counter = 0;
    gamePlaying = false;
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
    
}
const freqMap = {
  1: 261,
  2: 329,
  3: 392,
  4: 466,
  5: 990,
  6: 670,
  7: 777,
  8: 444
}
function playTone(btn,len){ 
  oscil.frequency.value = freqMap[btn]
  gain.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    oscil.frequency.value = freqMap[btn]
    gain.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  gain.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var oscil = context.createOscillator()
var gain = context.createGain()
gain.connect(context.destination)
gain.gain.setValueAtTime(0,context.currentTime)
oscil.connect(gain)
oscil.start(0)
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  
}
function winGame(){
  stopGame();
  alert("Game Over. You won!.");
}
function timesUP(){
  stopGame();
  alert("GAME OVER and Time is UP!");
}
function mistake(){
  alert("Mistake 1 Made, Only 2 left, be careful");
}
function mistake2(){
  alert("Mistake 2 Made, Only 1 left, be careful");
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; 
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 25;
  }
}
function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying)
  {
    return;
  }  
  if(pattern[guessCounter] == btn)
  {
    if(guessCounter == progress)
    {
      if(progress == pattern.length - 1)
      {
        winGame();
      }
      else
      {
        progress++;
        playClueSequence();
      }
    }
    else
    {
      guessCounter++;
    }
  }else
  {
    mistakes = mistakes+1;
    if(mistakes==1)
      {
         mistake();
      }
    if(mistakes==2)
      {
         mistake2();
      }
    if(mistakes ==3)
      {
        loseGame();
      }
  }
}    
