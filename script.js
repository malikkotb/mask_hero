const discoverBtn = document.getElementById("discoverBtn");
const insanityBtn = document.getElementById("insanityBtn");
const list = document.getElementById("list");

discoverBtn.addEventListener("click", function () {
  list.style.transform = "translateX(0)";
  discoverBtn.style.transform = "translateX(300px)";
});

insanityBtn.addEventListener("click", function () {
  list.style.transform = "translateX(-350px)";
  discoverBtn.style.transform = "translateX(0)";
});
