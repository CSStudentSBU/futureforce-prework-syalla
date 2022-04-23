const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 
var pattern = [Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1, Math.floor(Math.random() * 8)+1];
var clueHoldTime = 3000; 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;
var mistakes=0;
var progressbar;
var mistakeInp=0;
var time=0;
var counter = 0;

function startGame()
{
  mistakeInp = window.prompt("How Many Lives Do You Desire? ");
  time = window.prompt("How Many Seconds Do You Desire? "); 
  document.getElementById("progressBar").max = time;
  counter = time;
  clueHoldTime =1000;
  progressbar = time;
  var changeTimer = setInterval(function() 
  {
  if(counter <= 0)
  {
    clearInterval(changeTimer);
    document.getElementById("countdown").innerHTML = "Times Up!";
    timesUP();
    counter = time;
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
  document.getElementById("progressBar").value =  time - progressbar;
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


function playTone(val,len){ 
  context.resume();
  startTone(val);
  tonePlaying = true
  setTimeout(function(){stopTone(val)},len)
  
  
}
function startTone(val) {
  if (!tonePlaying) {
    context.resume();
    var audio = document.getElementById('audio'+val).play();
    context.resume();
    tonePlaying = true;
    
  }
}
function stopTone(val) {
  
  document.getElementById('audio'+val).pause();
  document.getElementById('audio'+val).currentTime = 0;
  //stack overflow helped here
  tonePlaying = false;
  
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
  
  var magic = mistakeInp-mistakes;
  alert(magic+ " Lives Left!");
  
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
    //clueHoldTime -= 25;//increase speed
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
    if(mistakeInp-mistakes >0)
      {
        mistake();
      }
    if(mistakeInp-mistakes ==0)
      
      {
        loseGame();
      }
  }
}   



const btn2 = document.getElementById("johto");
btn2.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/lugia_by_suspiciousbiscotti_d870iwo-fullview.jpg?v=1650673357989')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Johto Region!";
});

const btn = document.getElementById("kanto");
btn.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/kanto.jpg?v=1650671673462')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Kanto Region!";
});

const btn3 = document.getElementById("hoenn");
btn3.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/355936.png?v=1650652412062')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Hoenn Region!";
});


const btn4 = document.getElementById("sinnoh");
btn4.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/327-3278232_minimalist-pokemon-giratina.png?v=1650672550346')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Sinnoh Region!";
});

const btn5 = document.getElementById("unova");
btn5.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/149-1499524_zekrom-wallpapers-new-zekrom-wallpapers-minimalist-kyurem.jpg?v=1650673331482')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Unova Region!";
});

const btn6 = document.getElementById("kalos");
btn6.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/666572.png?v=1650672795736')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Kalos Region!";
});

const btn7 = document.getElementById("alola");
btn7.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/da4ygey-b0d6748a-7fdf-4571-95a9-f10eeab2ee9a.png?v=1650673030718')";
//document.getElementsByTagName('H1')[0] = 'white';
  //document.body.style.color = 'white';
  document.getElementById("poke").innerHTML = "Welcome to the Alola Region!";
});
const btn8 = document.getElementById("main");
btn8.addEventListener('click', function onClick(event) {
document.body.style.backgroundImage = "url('https://cdn.glitch.global/8a51aeb1-5312-4765-8445-5135d1f5fcdc/1644604.jpg?v=1650673476597')";
  document.getElementById("poke").innerHTML = "Welcome to the Pokemon World!";
});