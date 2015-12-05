// how much time?
var countdownMax = 57;
var countdown = countdownMax;
var lastStart = 0;
var counting = false;
var startButton;
var stopButton;
var timeSpan;

var gongVidLoop;
var gongVidStrike;

// var gongPaths = [
//   'audio/23580__loofa__gong1.mp3',
//   'audio/23580__loofa__gong1.mp3',
//   'audio/23580__loofa__gong1.mp3',
//   'audio/23580__loofa__gong1.mp3',
//   'audio/23580__loofa__gong1.mp3'
// ];

// var gongPlayers = [];
// var gongIterator = 0;

function setup() {
  noCanvas();

  // set up video
  gongVidLoop = createVideo('video/gong_loop_01.mp4');
  gongVidStrike = createVideo('video/gong_strike_2.mp4');
  gongVidStrike.hide();
  gongVidLoop.position(0, 0);
  gongVidLoop.size(windowWidth, windowHeight);
  gongVidStrike.size(windowWidth, windowHeight);

  // timeSpan = createElement('span');
  // createElement('div');
  // startButton = createButton('start');
  // stopButton = createButton('stop');
  // startButton.mousePressed(startTimer);
  // stopButton.mousePressed(stopTimer);
  
  // initialize the gong players
  // for (var i = 0; i < gongPaths.length; i++) {
  //   gongPlayers[i] = createAudio(gongPaths[i]);
  // }

}

function draw() {
  // timeSpan.html(countdown.toFixed(2));

  if (counting) {
    countdown = (countdownMax*1000 + lastStart - millis()) / 1000;
  }

  if (countdown <= 0) {
    playGong();
    stopTimer();
  }
}

function startTimer() {
  console.log('start timer');
  counting = true;
  lastStart = millis();
  gongVidLoop.show();
  gongVidStrike.hide();
  gongVidLoop.loop();
}

function stopTimer() {
  console.log('stop timer');
  counting = false;
  countdown = countdownMax;

  gongVidStrike.show();
  gongVidLoop.hide();
  gongVidStrike.time(0);
  gongVidStrike.play();
  // gongVidLoop.pause();
}

function playGong() {
  return;
  // var nextGong = gongPlayers[gongIterator];
  // nextGong.play();
  // gongIterator = (gongIterator + 1) % gongPlayers.length
  // console.log(gongIterator);
}

// space bar to start timer, z to stop
function keyPressed() {
  if (key == ' ') {
    startTimer();
  } else if (key == 'Z') {
    stopTimer();
  }
}

function windowResized() {
  gongVidLoop.size(windowWidth, windowHeight);
  gongVidStrike.size(windowWidth, windowHeight);
}