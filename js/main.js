const tabby = document.querySelector(".tabby");
const tabsList = tabby.querySelector(".tabs");
const tabs = Array.from(tabby.querySelectorAll(".tab"));
const tabContents = Array.from(tabby.querySelectorAll(".tab-content"));

tabsList.addEventListener("click", (event) => {
  const tab = event.target;
  const target = tab.dataset.target;
  const tabContent = tabby.querySelector("#" + target);

  tabs.forEach((element) => element.classList.remove("is-selected"));
  tab.classList.add("is-selected");

  tabContents.forEach((c) => c.classList.remove("is-selected"));
  tabContent.classList.add("is-selected");
});
