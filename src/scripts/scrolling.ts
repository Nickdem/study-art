export default function scrolling(upSelector: string) {
  const upElem: HTMLLinkElement = document.querySelector(upSelector);

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 1650) {
      upElem.style.display = "block";
      upElem.classList.add("faded", "toRight");
    } else {
      upElem.classList.remove("faded", "toRight");
      upElem.style.display = "none";
    }
  });
}
