function toggleDetail(e) {
    const target = e.target;

    if (target.classList.contains("active")) {
        target.innerHTML = "More Info";
        target.classList.remove("active");
    } else {
        target.innerHTML = "Less Info";
        target.classList.add("active");
    }

    const item = target.closest(".about-exp-item");
    const detail = item.querySelector(".about-exp-item-detail");
    
    if (detail.style.maxHeight) {
        detail.style.maxHeight = null;
        detail.style.opacity = 0;
    } else {
        detail.style.maxHeight = detail.scrollHeight + "px";
        detail.style.opacity = 1;
    }
    detail.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 770px)");
  const imgContainer = document.querySelector(".div-landing-btm");
  const image = imgContainer?.querySelector("img");
  const target = document.querySelector(".div-landing-top .btn-landing");

  const originalParent = image?.parentNode;
  const originalNextSibling = image?.nextSibling;

  function handleResize(e) {
    if (!image || !target || !originalParent) return;

    if (e.matches) {
      target.parentNode.insertBefore(image, target);
    } else {
      if (originalNextSibling) {
        originalParent.insertBefore(image, originalNextSibling);
      } else {
        originalParent.appendChild(image);
      }
    }
  }

  handleResize(mediaQuery);

  mediaQuery.addEventListener("change", handleResize);
});
