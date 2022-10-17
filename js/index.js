let landTextHeader = document.querySelector(".text-global");
let landTextHeader2 = document.getElementById("text-global-2");
if (window.matchMedia("(min-width: 577px)").matches) {
  if (landTextHeader) {
    landTextHeader.innerHTML = `${landTextHeader.dataset.text}`;
  }
  if (landTextHeader2) {
    landTextHeader2.innerHTML = `${landTextHeader2.dataset.text}`;
  }
}
let landTextHeader4 = document.querySelector(".my-text-global");
let landTextHeader3 = document.getElementById("text-tow");
if (window.matchMedia("(max-width: 992px)").matches) {
  console.log("Taha");
  if (landTextHeader4) {
    landTextHeader4.innerHTML = `${landTextHeader4.dataset.text}`;
  }
  if (landTextHeader3) {
    landTextHeader3.innerHTML = `${landTextHeader3.dataset.text}`;
  }
}
