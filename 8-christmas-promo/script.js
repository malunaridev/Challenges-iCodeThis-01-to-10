const content = document.getElementById("content");
const text = document.getElementById("gift-text")
const getYourGift = document.getElementById("getYourGift");
const closeButton = document.getElementById("close");
const claimYourGift = document.getElementById("claimYourGift");
const windowFade = document.getElementById("window");


claimYourGift.addEventListener("click", (evt) => {
    claimYourGift.classList.add("hide");
    content.classList.add("show");
    windowFade.classList.add("show");
  });

closeButton.addEventListener("click", (evt) => {
  content.classList.remove("show");
  claimYourGift.classList.remove("hide");
  windowFade.classList.remove("show");
});

getYourGift.addEventListener("click", (evt) => {
    text.innerHTML = `<h2>You sucessfully claimed your gift! <br />Now check your email to get your coupon.
  </h2>
  <button id="getYourGift">Go to your email</button>`
});