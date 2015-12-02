// how much time?
var countdownMax = 30;
var countdown = countdownMax;
var lastStart = 0;
var counting = false;
var startButton;
var stopButton;
var timeSpan;

var gongPaths = [
  'audio/23580__loofa__gong1.mp3',
  'audio/23580__loofa__gong1.mp3',
  'audio/23580__loofa__gong1.mp3',
  'audio/23580__loofa__gong1.mp3',
  'audio/23580__loofa__gong1.mp3'
];

var gongPlayers = [];
var gongIterator = 0;

function setup() {
  noCanvas();

  timeSpan = createElement('span');
  createElement('div');
  startButton = createButton('start');
  stopButton = createButton('stop');
  startButton.mousePressed(startTimer);
  stopButton.mousePressed(stopTimer);
  
  // initialize the gong players
  for (var i = 0; i < gongPaths.length; i++) {
    gongPlayers[i] = createAudio(gongPaths[i]);
  }

}

function draw() {
  timeSpan.html(countdown.toFixed(2));

  if (counting) {
    countdown = (countdownMax*1000 + lastStart - millis()) / 1000;
  }

  if (countdown <= 0) {
    playGong();
    stopTimer();
  }
}

function startTimer() {
  counting = true;
  lastStart = millis();
}

function stopTimer() {
  counting = false;
  countdown = countdownMax;
}

function playGong() {
  var nextGong = gongPlayers[gongIterator];
  nextGong.play();
  gongIterator = (gongIterator + 1) % gongPlayers.length
  console.log(gongIterator);
  
}