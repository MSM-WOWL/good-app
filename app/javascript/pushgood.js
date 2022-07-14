window.onload = function () {
  let push = document.getElementById("good");
  push.onclick = pushNum;
}

var countNum = 0;

pushNum = function() {
  updateDisplay(++countNum);
}

function updateDisplay(num) {
  document.getElementById("number-of-good").innerHTML = num;
}