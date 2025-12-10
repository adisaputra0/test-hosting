// Animate On Scroll
AOS.init({
    duration: 1000,
});

//Show Animation Custom
document.querySelectorAll('[data-aos="fade-up-custom"]').forEach(el => { 
    const text = el.textContent.trim();
    el.innerHTML = "";

    const words = text.split(" ");

    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.classList.add("inline-block", "mr-2");
        span.setAttribute("data-aos", "fade-up");
        span.setAttribute("data-aos-delay", i * 150);
        el.appendChild(span);
    });
});
document.querySelectorAll('[data-aos="fade-down-custom"]').forEach(el => { 
    const text = el.textContent.trim();
    el.innerHTML = "";

    const words = text.split(" ");

    words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.classList.add("inline-block", "mr-2");
        span.setAttribute("data-aos", "fade-down");
        span.setAttribute("data-aos-delay", i * 150);
        el.appendChild(span);
    });
});
