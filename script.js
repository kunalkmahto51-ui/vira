const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.background = "rgba(255,255,255,0.97)";
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.07)";
  } else {
    header.style.background = "rgba(255,255,255,0.91)";
    header.style.boxShadow = "none";
  }
});


const processTrigger = document.getElementById("processTrigger");
const processDetails = document.getElementById("processDetails");
const processPlus = document.getElementById("processPlus");

if (processTrigger && processDetails && processPlus) {

  processTrigger.addEventListener("click", () => {

    const isOpen = processDetails.classList.toggle("open");

    processPlus.textContent = isOpen ? "−" : "+";

    processPlus.style.transform =
      isOpen ? "rotate(180deg)" : "rotate(0deg)";

  });

}


document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    const target = document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    const headerHeight =
      header ? header.offsetHeight : 0;

    const position =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });

  });

});


const revealElements = document.querySelectorAll(
  ".brand-statement h2, .about-left, .about-right, .process-flashcard, .feature-copy, .product, .quality-heading, .quality-points > div, .factory-card, .vira-brand-content, .contact-copy, .contact-form"
);

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform = "translateY(30px)";

  element.style.transition =
    "opacity 0.75s ease, transform 0.75s ease";

});


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {
  observer.observe(element);
});


const bottle = document.querySelector(".bottle");

if (bottle) {

  let floatDirection = 1;

  setInterval(() => {

    bottle.style.transition =
      "transform 1.8s ease-in-out";

    bottle.style.transform =
      `translateY(${floatDirection * 8}px)`;

    floatDirection *= -1;

  }, 1900);

}


const floatingNotes =
  document.querySelectorAll(".floating-note");

floatingNotes.forEach((note, index) => {

  note.style.animation =
    `floatingNote ${3.3 + index * 0.5}s ease-in-out infinite`;

});


const animationStyle =
  document.createElement("style");

animationStyle.textContent = `

@keyframes floatingNote {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }

  100% {
    transform: translateY(0);
  }

}

`;

document.head.appendChild(animationStyle);


const contactForm =
  document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      alert(
        "Thank you. This is currently a sample VIRA enquiry form."
      );

    }
  );

}