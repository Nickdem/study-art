export default function mask(selector: string) {
  function setCursorPosition(pos: number, elem: any) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function createMask(event: FocusEvent) {
    const matrix = "+7 (___) ___ __ __",
      def = matrix.replace(/\D/g, ""),
      target = event.target as HTMLInputElement;
    let val = target.value.replace(/\D/g, ""),
      i = 0;

    if (def.length >= val.length) {
      val = def;
    }

    target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (event.type === "blur") {
      if (target.value.length == 2) {
        target.value = "";
      }
    } else {
      setCursorPosition(target.value.length, target);
    }
  }

  const inputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(selector);

  inputs.forEach(function (input) {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
}
