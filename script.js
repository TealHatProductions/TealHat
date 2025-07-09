function showPage(pageId) {
  document.querySelectorAll(".page").forEach((el) =>
    el.classList.remove("active")
  );
  document.getElementById(pageId).classList.add("active");
}