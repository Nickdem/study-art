export default function accordion(triggerSelector: string) {
  const btns = document.querySelectorAll(triggerSelector),
    blockCls = "accordion__block",
    activeBtnCls = `${triggerSelector.substring(1)}--active`,
    activeBlockCls = `${blockCls}--show`;

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle(activeBtnCls);
      const block = btn.nextElementSibling as HTMLDivElement;
      block.classList.toggle(activeBlockCls);

      if (btn.classList.contains(activeBtnCls)) {
        block.style.maxHeight = block.scrollHeight + `${80}px`;
      } else {
        block.style.maxHeight = "0px";
      }
    });
  });
}
