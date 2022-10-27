// Player Window
const plyBtns = document.querySelectorAll(".view-open-ply");

plyBtns.forEach(function (btn_plying) {
  btn_plying.onclick = function () {
    const plyContains = btn_plying.getAttribute("data-ply");

    document.getElementById(plyContains).style.display = "block";
  };
});

const closeBtnsply = document.querySelectorAll(".closePlayer");
closeBtnsply.forEach(function(btn_plying) {
  btn_plying.onclick = function () {
    const plyContains = btn_plying.closest(".bg-playerContainer").style.display = "none";
  }
})
