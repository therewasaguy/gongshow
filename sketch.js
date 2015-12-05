/**
 *  p - pause
 *  spacebar - start countdown
 *  z - trigger gong
 */

// how much time?
var countdownMax = 57;
var countdown = countdownMax;
var lastStart = 0;
var counting = false;

var gongVidLoop;
var gongVidStrike;

function setup() {
  noCanvas();

  // set up video
  gongVidLoop = createVideo('video/gong_loop_01.mp4');
  gongVidStrike = createVideo('video/gong_strike_2.mp4');
  gongVidStrike.hide();
  gongVidLoop.position(0, 0);
  gongVidLoop.size(windowWidth, windowHeight);
  gongVidStrike.size(windowWidth, windowHeight);

}

function draw() {
  if (counting) {
    countdown = (countdownMax*1000 + lastStart - millis()) / 1000;
  }

  if (countdown <= 0) {
    stopTimer();
    playGong();
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
  // gongVidLoop.pause();
}

function playGong() {
  gongVidStrike.show();
  gongVidLoop.hide();
  gongVidStrike.time(0);
  gongVidStrike.play();
}

// space bar to start timer, z to stop
function keyPressed() {
  if (key == ' ') {
    startTimer();
  }
  else if (key == 'Z') {
    stopTimer();
    playGong();
  }
  else if (key == 'P') {
    counting = false;
    gongVidLoop.pause();
  }
}

function windowResized() {
  gongVidLoop.size(windowWidth, windowHeight);
  gongVidStrike.size(windowWidth, windowHeight);
}