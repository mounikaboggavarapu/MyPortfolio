function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function toggleMore(id) {
    const moreText = document.getElementById(`${id}-more`);
    const button = document.querySelector(`#${id} .show-more-btn`);

    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      button.innerText = "Show More";
    } else {
      moreText.style.display = "inline";
      button.innerText = "Show Less";
    }
  }