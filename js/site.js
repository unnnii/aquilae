/* Aquilae site behaviour: bottom pill nav, footer year, additive scroll reveals.
   No third-party scripts. Everything stays readable if this file fails. */
(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav]");

  function setNav(open) {
    if (!toggle || !links) return;
    links.setAttribute("data-open", String(open));
    toggle.setAttribute("aria-expanded", String(open));
  }

  if (toggle && links) {
    setNav(false);
    toggle.addEventListener("click", function () {
      setNav(links.getAttribute("data-open") !== "true");
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });
    document.addEventListener("click", function (event) {
      if (links.getAttribute("data-open") !== "true") return;
      if (event.target.closest(".nav-inner")) return;
      setNav(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var targets = [];
  Array.prototype.forEach.call(document.querySelectorAll("[data-reveal-item]"), function (el) {
    targets.push(el);
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-reveal]"), function (group) {
    if (!group.querySelector("[data-reveal-item]")) targets.push(group);
  });
  if (!targets.length) return;

  document.documentElement.classList.add("reveal-on");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  targets.forEach(function (el) { observer.observe(el); });

  /* Safety net: never leave content hidden if the observer misses an element. */
  window.setTimeout(function () {
    document.documentElement.classList.remove("reveal-on");
  }, 8000);
})();
