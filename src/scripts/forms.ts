import { delay } from "./utils";

export default function forms() {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('[name="upload"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "<div class='lds-circle'><div></div></div>",
    ok: "<p class='section-title'>&#10004;</p>",
    fail: "<p class='section-title'>&#10008;</p>",
  };

  const clearInputs = () => {
    inputs.forEach(function (item) {
      item.value = "";
    });
    upload.forEach(function (item) {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  function getValues(elms: HTMLFormControlsCollection) {
    const formData: undefined | { [key: string]: string } = {};

    Array.from(elms).forEach(function (
      el: HTMLButtonElement | HTMLInputElement
    ) {
      if (el.tagName == "INPUT" || el.tagName == "SELECT") {
        formData[el.id] = el.value;
      }
    });

    return formData;
  }

  upload.forEach((item) => {
    item.addEventListener("input", function () {
      console.log(item.files[0]);

      let dots;
      const arr = item.files[0].name.split(".");

      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", function (e) {
      e.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status", "center");

      if (item.classList.contains("calc__form")) {
        statusMessage.classList.add("calc__form");
      }

      setTimeout(function () {
        item.style.display = "none";
        item.insertAdjacentElement("afterend", statusMessage);
      }, 400);

      statusMessage.insertAdjacentHTML("afterbegin", message.spinner);

      const textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      delay(function () {
        return getValues(item.elements);
      })
        .then(function (r) {
          console.log(r);
          statusMessage.innerHTML = "";

          statusMessage.insertAdjacentHTML("afterbegin", message.ok);

          const textMessage = document.createElement("div");
          textMessage.textContent = message.success;
          statusMessage.appendChild(textMessage);
        })
        .catch(function (e) {
          console.log(e);
          statusMessage.innerHTML = "";
          statusMessage.insertAdjacentHTML("afterbegin", message.fail);

          const textMessage = document.createElement("div");
          textMessage.textContent = message.failure;
          statusMessage.appendChild(textMessage);
        })
        .finally(function () {
          clearInputs();
          setTimeout(function () {
            statusMessage.remove();
            item.style.display = "block";
          }, 5000);
        });
    });
  });
}
