export default function showMoreStyles(
  triggerSelector: string,
  stylesSelector: string
) {
  const cards: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(stylesSelector),
    btn = document.querySelector(triggerSelector);

  cards.forEach(function (card) {
    card.classList.add("toDown");
  });

  btn.addEventListener("click", function () {
    cards.forEach(function (card) {
      card.style.display = "block";
    });
    btn.remove();
  });
}
