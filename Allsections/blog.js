function toggleContent(id, event) {
  event.preventDefault();
  var content = document.getElementById("hidden-content-" + id);
  var button = content.parentElement.querySelector("a");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Read Less";
  } else {
    content.style.display = "none";
    button.textContent = "Read More";
  }
}

function changeLanguage() {
  const language = document.getElementById("languageSelect").value;
  const elements = document.querySelectorAll("[data-" + language + "]");

  elements.forEach((element) => {
    element.textContent = element.getAttribute("data-" + language);
  });

  const hiddenContents = document.querySelectorAll(".hidden-content");
  hiddenContents.forEach((content) => {
    content.style.display = "none";
  });
}

function toggleContent(cardId, event) {
  event.preventDefault();
  const content = document.getElementById("hidden-content-" + cardId);
  content.style.display =
    content.style.display === "none" || content.style.display === ""
      ? "block"
      : "none";
}