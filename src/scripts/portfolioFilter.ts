export default function portfolioFilter(
  menuItemSelector: string,
  listItemsSelector: string
) {
  const headerItems = document.querySelectorAll(menuItemSelector),
    listItems = document.querySelectorAll(listItemsSelector),
    noItemsBlock: HTMLParagraphElement = document.querySelector(
      ".portfolio__noitems"
    );

  headerItems.forEach(function (item) {
    item.addEventListener("click", clickHandler);
  });

  function clickHandler(e: Event) {
    const target = e.target as HTMLLIElement;
    document
      .querySelector(`${menuItemSelector}.selected`)
      .classList.remove("selected");
    target.classList.add("selected");
    hideItems();
    showItems(target.classList[1]);
  }

  function showItems(name: string) {
    const itemsToShow: NodeListOf<HTMLDivElement> = document.querySelectorAll(
      `${listItemsSelector}.${name}`
    );

    noItemsBlock.style.display = "none";

    if (itemsToShow.length === 0) {
      noItemsBlock.style.display = "block";
    }

    itemsToShow.forEach(function (item) {
      const el = item as HTMLDivElement;
      el.style.display = "block";
      el.classList.add("faded");
    });
  }

  function hideItems() {
    listItems.forEach(function (item) {
      const el = item as HTMLDivElement;
      el.style.display = "none";
      el.classList.remove("faded");
    });
  }
}
