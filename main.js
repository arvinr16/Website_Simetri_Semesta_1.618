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

    if (mediaQuery.matches) {
      // Pindahkan gambar jika lebar layar <= 768px
      const imgContainer = document.querySelector(".div-landing-btm");
      const image = imgContainer?.querySelector("img");
      const target = document.querySelector(".div-landing-top .btn-landing");
      if (image && target) {
        target.parentNode.insertBefore(image, target); // Masukkan gambar ke atas tombol
      }
    }
  });

// JS jQuery
// function toggleDetail(e) {
//     const target = $(e.target);

//     if($(target).hasClass("active")) {
//         $(target).html("More Info").removeClass("active")
//     } else {
//         $(target).html("Less Info").addClass("active")
//     }

//     const item = $(target).parents(".about-exp-item")
//     const detail = $(item).children(".about-exp-item-detail")

//     $(detail).slideToggle();
// }