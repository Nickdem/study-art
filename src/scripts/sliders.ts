export default function sliders(
  slideSelector: string,
  direction: string,
  prevBtnSelector?: string,
  nextBtnSelector?: string
) {
  let count = 1;
  const slides: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(slideSelector);

  function showSlides(n: number) {
    if (n > slides.length) {
      count = 1;
    }

    if (n < 1) {
      count = slides.length;
    }

    slides.forEach(function (slideItem) {
      slideItem.style.display = "none";
    });

    slides[count - 1].style.display = "flex";
  }

  function changeSlides(n: number) {
    showSlides((count += n));
  }

  try {
    const prevBtn = document.querySelector(prevBtnSelector),
      nextBtn = document.querySelector(nextBtnSelector);

    prevBtn.addEventListener("click", function () {
      changeSlides(-1);
      slides[count - 1].classList.remove("toRight");
      slides[count - 1].classList.add("toLeft");
    });

    nextBtn.addEventListener("click", function () {
      changeSlides(1);
      slides[count - 1].classList.remove("toLeft");
      slides[count - 1].classList.add("toRight");
    });
  } catch (e) {
    console.log(e);
  }

  showSlides(count);

  let interval: NodeJS.Timer;

  function activateTimeout() {
    if (direction === "vertical") {
      interval = setInterval(function () {
        changeSlides(1);
        slides[count - 1].classList.add("toDown");
      }, 5000);
    } else {
      interval = setInterval(function () {
        changeSlides(1);
        slides[count - 1].classList.remove("toLeft");
        slides[count - 1].classList.add("toRight");
      }, 5000);
    }
  }

  activateTimeout();

  slides[0].parentNode.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });

  slides[0].parentNode.addEventListener("mouseleave", function () {
    activateTimeout();
  });
}
