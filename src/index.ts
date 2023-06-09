import "./index.html";
import "./index.less";
import calc from "./scripts/calc";
import forms from "./scripts/forms";
import mask from "./scripts/mask";
import modals from "./scripts/modals";
import showMoreStyles from "./scripts/moreStyles";
import sliders from "./scripts/sliders";
import portfolioFilter from "./scripts/portfolioFilter";
import textInputs from "./scripts/txtInputs";
import sizesImg from "./scripts/sizesImg";
import accordion from "./scripts/accordion";
import scrolling from "./scripts/scrolling";

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  modals();

  forms();
  mask('[name="phone"]');
  textInputs('[name="name"]');
  textInputs('[name="message"]');
  showMoreStyles(".styles__button", ".styles__block");
  calc("#size", "#material", "#options", "#promocode", ".calc__price");
  sliders(".slider__item", "", ".slider__btn.prev", ".slider__btn.next");
  sliders(".main__slider > div", "vertical");
  portfolioFilter(".portfolio__menu-item", ".portfolio__block");
  // sizesImg('.sizes__block')
  accordion(".accordion__heading");
  scrolling(".pageup");
});
