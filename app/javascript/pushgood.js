function pushgood (){
  const push = document.getElementById("good");
  push.addEventListener("click", () => {
    const pushNum = document.getElementById("number-of-good");
    pushNum.innerHTML = `1`;
  });
};

window.addEventListener('load', pushgood);