const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
  } else if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
  }
});
