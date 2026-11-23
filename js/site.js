/* Aquilae site behaviour. Motion is optional: content stays visible without Amber. */
(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var links = document.querySelector("[data-nav]");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.getAttribute("data-open") === "true";
      links.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        links.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();

(async function () {
  try {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    var mod = await import("https://cdn.jsdelivr.net/npm/amber-motion@1.0.2/dist/index.js");
    var Motion = mod.default;
    if (!Motion) return;

    var heroTargets = document.querySelectorAll("[data-hero]");
    if (heroTargets.length) {
      new Motion({
        targets: heroTargets,
        duration: 620,
        delay: 80,
        stagger: 70,
        easing: "o3",
        properties: { y: { v: [28, 0], unit: "px" }, o: [0, 1] }
      }).play();
    }

    var groups = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || !groups.length) return;
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var group = entry.target;
        var items = group.querySelectorAll("[data-reveal-item]");
        var targets = items.length ? items : [group];
        new Motion({
          targets: targets,
          duration: 520,
          stagger: 55,
          easing: "o3",
          properties: { y: { v: [18, 0], unit: "px" }, o: [0, 1] }
        }).play();
        obs.unobserve(group);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    groups.forEach(function (group) { observer.observe(group); });
  } catch (error) {
    console.info("Amber motion unavailable. Content remains visible.");
  }
})();
