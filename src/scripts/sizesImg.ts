export default function sizesImg(selector: string) {
  const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(selector);

  function showImg(el: HTMLDivElement) {
    const img = el.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    (
      el.querySelectorAll(
        "p:not(.sizes__hit )"
      ) as NodeListOf<HTMLParagraphElement>
    ).forEach(function (p) {
      p.style.display = "none";
    });
  }
  function hideImg(el: HTMLDivElement) {
    const img = el.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    (
      el.querySelectorAll(
        "p:not(.sizes__hit )"
      ) as NodeListOf<HTMLParagraphElement>
    ).forEach(function (p) {
      p.style.display = "none";
    });
  }

  items.forEach(function (item) {
    item.addEventListener("mouseover", () => {
      showImg(item);
    });
    item.addEventListener("mouseout", () => {
      hideImg(item);
    });
  });
}
