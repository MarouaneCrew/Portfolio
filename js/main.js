window.onload = () => {
    document.querySelector(".nav").classList.add("show992");
};

document.querySelector("nav .toggle").addEventListener("click", e => {
    document.querySelector("nav").classList.toggle("show");
    document.querySelector("nav .toggle").classList.toggle("show");
    document.querySelector("nav .toggle i").classList.toggle("show");
});

let navLinks = document.querySelectorAll("nav .links a");

let mainPartSections = document.querySelectorAll(".main_part section");

navLinks.forEach(a => {
    mainPartSections.forEach(sec => {
        a.addEventListener("click", (e) => {
            navLinks.forEach(an => {
                an.classList.remove("active");
                sec.classList.remove("show");
                document.querySelector("nav").classList.remove("show");
                document.querySelector("nav .toggle i").classList.remove("show");
            });
            a.classList.add("active");
            if (a.getAttribute("href") == "#" + sec.getAttribute("id")) {
                sec.classList.add("show");
            };
            if (!sec.classList.contains("show")) {
                setTimeout(() => {
                    sec.scrollTo(0, 0);
                }, 1000);
            };
        });
    });
});

const langCerciles = new IntersectionObserver ((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            setTimeout(() => {
                entries[i].target.className = "active";
            }, 50 * i);
        };
    };
});

const langSpans = document.querySelectorAll(".main_part .about .contain .info .languages .links li span.act");
langSpans.forEach((el) => langCerciles.observe(el));

const skillLevelObserver = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (entry.target.classList.contains("show")) {
                document.querySelectorAll(".main_part .about .skill .progress span").forEach(sp => {
                    sp.style.width = sp.dataset.width;
                });
            };
        };
    });
});

let skillLevel = document.querySelectorAll(".main_part .about .skills .box");
skillLevel.forEach((el) => skillLevelObserver.observe(el));