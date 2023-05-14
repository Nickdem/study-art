export default function textInputs(selector: string) {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(function (input) {
    input.addEventListener("keypress", function (e: KeyboardEvent) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
}
