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