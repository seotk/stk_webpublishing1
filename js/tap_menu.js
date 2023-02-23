const $tapBtn = document.querySelectorAll(".tap_btn > li");
const $tapContents = document.querySelectorAll(".tap_contents > li");
const $gnb_list = document.querySelectorAll(".gnb_list > li");
const $sub_list = document.querySelectorAll(".sub_list");

function show(num) {
  $tapBtn.forEach((e) => {
    e.classList.remove("on");
  });
  $tapBtn[num].classList.add("on");
  $tapContents.forEach((e) => {
    e.classList.remove("on");
  });
  $tapContents[num].classList.add("on");
}

$tapBtn.forEach((list, idx) => {
  list.addEventListener("click", () => show(idx));
});
function show2(num) {
  $gnb_list.forEach((e) => {
    e.classList.remove("on");
  });
  $gnb_list[num].classList.add("on");
  $sub_list.forEach((e) => {
    e.classList.remove("on");
  });
  $sub_list[num].classList.add("on");
}

$gnb_list.forEach((list, idx) => {
  list.addEventListener("click", () => show2(idx));
});
