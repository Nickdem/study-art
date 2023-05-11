import "./index.html";
import "./index.less";
import modals from "./scripts/modals";
import sliders from "./scripts/sliders";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  modals();
  sliders(".slider__item", "", ".slider__btn.prev", ".slider__btn.next");
  sliders(".main__slider > div", "vertical");
});
