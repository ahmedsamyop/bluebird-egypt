// https://github.com/Ahmed-Shatot
const btnMenu = document.getElementById("toggle"),
  menu = document.getElementById("nav-links");
btnMenu.addEventListener("click", (t) => {
  menu.classList.toggle("show");
});
let btnTop = document.querySelector(".go-top");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const chatBtn = document.getElementById("chat-btn"),
  chatSms = document.getElementById("notification"),
  sound = new Audio("/assets/sound/achive-sound-132273.mp3"),
  chatMessages = document.getElementById("chat-messages");
setTimeout(() => {
  chatSms.classList.add("sms");
}, 4e3),
  chatBtn.addEventListener("click", () => {
    chatSms.remove(), sound.play(), chatMessages.classList.toggle("show-chat");
  });
const h2Title = document.querySelectorAll("h2.main-title");
window.onscroll = function () {
  h2Title.forEach((t) => {
    window.scrollY >= t.offsetTop - 250 &&
      window.scrollY <= t.offsetHeight / 2 + t.offsetTop &&
      t.classList.add("effect");
  });
};
