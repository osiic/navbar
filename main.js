const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const container = document.querySelector(".container");

container.addEventListener("scroll", winScroll);

function winScroll() {
  section.forEach((sec) => {
    const top = section[0].getBoundingClientRect().y * -1;
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("aktif");
        document.querySelector(`nav a[href*=${id}]`).classList.add("aktif");
      });
    }
  });
}
