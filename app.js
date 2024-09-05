document.querySelector('input[type="button"]').addEventListener("click", () => {
  const parent = document.getElementById("main");
  parent.classList.toggle("change-color");

  if (parent.classList.contains("change-color")) {
    document
      .querySelector('input[type="button"]')
      .setAttribute("value", "previous-color");
    return;
  }
  document
    .querySelector('input[type="button"]')
    .setAttribute("value", "colorful");
});
