let slideIndex = 0;
  let autoSlideInterval;
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const totalSlides = images.length;
  const dotsContainer = document.querySelector(".dots");

  function createDots() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        slideIndex = i;
        showSlide(slideIndex);
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex);
    });
  }

  function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${slideIndex * (100 / totalSlides)}%)`;
    updateDots();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
    startAutoSlide();
  });

  document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
    startAutoSlide();
  });

  window.addEventListener("resize", () => {
    showSlide(slideIndex);
  });

  createDots();
  showSlide(slideIndex);
  startAutoSlide();

  document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
  document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);