export default function calc(
  sizeSelector: string,
  materialSelectorSelector: string,
  optionsSelector: string,
  promocodeSelector: string,
  resultSelector: string
) {
  const sizeBlock: HTMLSelectElement = document.querySelector(sizeSelector),
    materialBlock: HTMLSelectElement = document.querySelector(
      materialSelectorSelector
    ),
    optionsBlock: HTMLSelectElement = document.querySelector(optionsSelector),
    promocodeBlock: HTMLInputElement =
      document.querySelector(promocodeSelector),
    resultBlock: HTMLDivElement = document.querySelector(resultSelector);

  let sum = 0;

  function calcFunc() {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent =
        "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7).toString();
    } else {
      resultBlock.textContent = sum.toString();
    }
  }

  sizeBlock.addEventListener("change", calcFunc);
  materialBlock.addEventListener("change", calcFunc);
  optionsBlock.addEventListener("change", calcFunc);
  promocodeBlock.addEventListener("input", calcFunc);
}
