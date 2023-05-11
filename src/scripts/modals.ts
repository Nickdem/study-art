import { getScrollWidth } from "./utils";

// export default function modals(resetValues: () => void) {
export default function modals() {
  function bindModal(
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal: HTMLDivElement = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scrollWidth = getScrollWidth();

    trigger.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault();
        }
        (
          document.querySelectorAll(".dialog") as NodeListOf<HTMLDivElement>
        ).forEach(function (mdl) {
          mdl.style.display = "none";
        });

        if (triggerSelector == ".gift-btn") {
          item.remove();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = scrollWidth + "px";
      });
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = 0 + "px";
      // resetValues();
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = 0 + "px";
        // resetValues();
      }
    });
  }

  function showByScroll(selector: string) {
    window.addEventListener("scroll", scrollHandler);

    function scrollHandler() {
      const btn = document.querySelector(selector) as HTMLButtonElement;

      if (!btn) {
        window.removeEventListener("scroll", scrollHandler);
        return;
      }
      if (
        window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        btn.click();
      }
    }
  }

  bindModal(".button-design", ".popup__design", ".popup__design .popup__close");
  bindModal(
    ".button-consultation",
    ".popup__consultation",
    ".popup__consultation .popup__close"
  );

  bindModal(".gift-btn", ".popup__gift", ".popup__gift .popup__close");

  showByScroll(".gift-btn");
}
