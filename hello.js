var timer = 60;
var score = 0;
var hitrn = 0;
function makebooble() {
  var clutter = "";

  for (var i = 1; i <= 108; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbot").innerHTML = clutter;
}
function runtimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval(time);
      document.querySelector("#pbot").innerHTML = `<h1>GAME OVER</h1>`;
    }
    document.querySelector("#timer").textContent = timer;
  }, 1000);
}
function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitt").textContent = hitrn;
}
function incresescore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbot").addEventListener("click", function (dets) {
  var clickdnum = Number(dets.target.textContent);
  if (clickdnum === hitrn) {
    incresescore();
    getnewhit();
    makebooble();
  }
});
getnewhit();
makebooble();
runtimer();
