// https://github.com/Ahmed-Shatot
let allImages = document.querySelectorAll(".container-images img");
let ballsContainer = document.querySelector(".ball");
let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let timeMs = 1500;
let view = 1;
createBall(allImages.length, ballsContainer);
let intervalID = setInterval(handelInterval, timeMs);

btnRight.addEventListener("click", (e) => {
  clearInterval(intervalID);

  if (view >= 0 && view < allImages.length) {
    removeClass(allImages, "active-view");
    removeClass(document.querySelectorAll(".ball span"), "view");
    view++;
    document
      .querySelector(`img[data-id="${view}"]`)
      .classList.add("active-view");
    autoActiveBall();
  }

  if (view === allImages.length) {
    view = 0;
  }
});

btnLeft.addEventListener("click", (e) => {
  clearInterval(intervalID);

  if (view === 1) {
    view = allImages.length + 1;
  }

  if (view === 0) {
    view = view = allImages.length;
  }

  if (view > 1 && view <= allImages.length + 1) {
    removeClass(allImages, "active-view");
    removeClass(document.querySelectorAll(".ball span"), "view");
    view--;
    document
      .querySelector(`img[data-id="${view}"]`)
      .classList.add("active-view");
    autoActiveBall();
  }
});

// Button Go Top Scroll
// let btnTop = document.querySelector(".go-top");
// btnTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// HANDEL Creat Balls
function createBall(count, container) {
  for (let i = 0; i < count; i++) {
    let span = document.createElement("span");
    span.id = i + 1;
    container.appendChild(span);
  }
  document.querySelector(".ball span").classList.add("view");
}
// HANDEL Remove Class
function removeClass(Elements, className) {
  Elements.forEach((ele) => {
    ele.classList.remove(className);
  });
}
// HANDEL Interval Func
function handelInterval() {
  if (view === allImages.length) {
    view = 0;
  }

  removeClass(allImages, "active-view");
  removeClass(document.querySelectorAll(".ball span"), "view");
  view++;
  document.querySelector(`img[data-id="${view}"]`).classList.add("active-view");
  autoActiveBall();
}
// FUNCTION ACTIVE BALL
function autoActiveBall() {
  let allball = document.querySelectorAll(".ball span");

  allball.forEach((ball) => {
    allImages.forEach((img) => {
      if (ball.id == view && img.dataset.id == view) {
        ball.classList.add("view");
      }
    });
  });
}
