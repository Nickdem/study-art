import "./index.html";
import "./index.less";
import forms from "./scripts/forms";
import mask from "./scripts/mask";
import modals from "./scripts/modals";
import sliders from "./scripts/sliders";
import textInputs from "./scripts/txtInputs";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  modals();
  sliders(".slider__item", "", ".slider__btn.prev", ".slider__btn.next");
  sliders(".main__slider > div", "vertical");
  forms();
  mask('[name="phone"]');
  textInputs('[name="name"]');
  textInputs('[name="message"]');
});
