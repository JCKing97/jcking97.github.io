document.querySelectorAll(".new-portfolio-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".new-portfolio-image-slide"));
    const track = carousel.querySelector(".new-portfolio-image-track");
    const portfolio = carousel.closest(".new-portfolio");
    const dots = Array.from(portfolio.querySelectorAll(".new-portfolio-dot"));
    const metadata = Array.from(portfolio.querySelectorAll(".new-portfolio-meta-slide > .new-portfolio-meta"));
    const previousButton = carousel.querySelector(".new-portfolio-prev");
    const nextButton = carousel.querySelector(".new-portfolio-next");
    const leaveTimers = new Map();
    const leaveDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;

    if (slides.length === 0) return;

    const activeMetadataIndex = metadata.findIndex((meta) =>
        meta.classList.contains("is-active") || meta.querySelector(".is-active")
    );
    let currentIndex = activeMetadataIndex >= 0
        ? activeMetadataIndex
        : slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (currentIndex < 0) currentIndex = 0;

    const showSlide = (index, animate = true) => {
        const previousIndex = currentIndex;
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (animate && previousIndex !== currentIndex && metadata[previousIndex]) {
            const previousMetadata = metadata[previousIndex];
            clearTimeout(leaveTimers.get(previousMetadata));
            previousMetadata.classList.remove("is-active");
            previousMetadata.classList.add("is-leaving");
            leaveTimers.set(previousMetadata, setTimeout(() => {
                previousMetadata.classList.remove("is-leaving");
                leaveTimers.delete(previousMetadata);
            }, leaveDuration));
        }

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });
        metadata.forEach((meta, metaIndex) => {
            const isActive = metaIndex === currentIndex;
            if (isActive) {
                clearTimeout(leaveTimers.get(meta));
                leaveTimers.delete(meta);
                meta.classList.remove("is-leaving");
            }
            if (!animate || metaIndex !== previousIndex || previousIndex === currentIndex) {
                meta.classList.toggle("is-active", isActive);
            }
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

    showSlide(currentIndex, false);
});
