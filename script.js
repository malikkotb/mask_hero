const discoverBtn = document.getElementById("discoverBtn");
const insanityBtn = document.getElementById("insanityBtn");
const list = document.getElementById("list");

discoverBtn.addEventListener("click", function () {
//   list.style.display = "flex";
  list.style.transform = "translateX(300px)";
  discoverBtn.style.transform = "translateX(300px)";
});

insanityBtn.addEventListener("click", function () {
//   list.style.display = "none";
  list.style.transform = "translateX(0)";
  discoverBtn.style.transform = "translateX(0)";
});
