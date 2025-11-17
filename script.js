const getCurrentPath = () => {
  const pathParts = window.location.pathname.split("/").filter((p) => p);
  // ["team-two-final-project", "my-work", "my-work.html"]

  if (
    pathParts.length === 1 ||
    pathParts[pathParts.length - 1] === "team-two-final-project"
  ) {
    return "team-two-final-project";
  }

  const folder = pathParts[1]; // my-work, services, etc.
  return folder;
};

window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".footer-nav ul li a");
  const hamburgerMenu = document.getElementById("hamburguer-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-nav a");

  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  const currentPath = getCurrentPath();

  navLinks.forEach((link) => {
    const linkParts = link.href.split("/").filter((p) => p);
    const linkFolder =
      linkParts.length > 1
        ? linkParts[linkParts.length - 2]
        : "team-two-final-project";

    if (
      linkFolder === currentPath ||
      (currentPath === "team-two-final-project" &&
        link.href.endsWith("/team-two-final-project/"))
    ) {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "var(--bold-main-color)";
      link.style.textDecorationThickness = "0.5px";
      link.style.textUnderlineOffset = "2px";
    }
  });
});
