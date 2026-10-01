document.querySelectorAll(".new-portfolio-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".new-portfolio-image-slide"));
    const portfolio = carousel.closest(".new-portfolio");
    const dots = Array.from(portfolio.querySelectorAll(".new-portfolio-dot"));
    const metadata = Array.from(portfolio.querySelectorAll(".new-portfolio-meta-slide > .new-portfolio-meta"));
    const previousButton = carousel.querySelector(".new-portfolio-prev");
    const nextButton = carousel.querySelector(".new-portfolio-next");

    if (slides.length === 0) return;

    const activeMetadataIndex = metadata.findIndex((meta) =>
        meta.classList.contains("is-active") || meta.querySelector(".is-active")
    );
    let currentIndex = activeMetadataIndex >= 0
        ? activeMetadataIndex
        : slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (currentIndex < 0) currentIndex = 0;

    const showSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });
        metadata.forEach((meta, metaIndex) => {
            const isActive = metaIndex === currentIndex;
            meta.classList.toggle("is-active", isActive);
            meta.setAttribute("aria-hidden", String(!isActive));
        });
        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-current", String(isActive));
        });
    };

    if (previousButton) previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
    if (nextButton) nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
    dots.forEach((dot) => {
        dot.addEventListener("click", () => showSlide(Number(dot.dataset.slideIndex)));
    });
    carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
        if (event.key === "ArrowRight") showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});
