/**
 * script.js — behavior layer for the portfolio.
 * No frameworks. No build step. Everything below runs as-is on GitHub Pages.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     Footer year
  --------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Navbar scroll state + active link highlighting
  --------------------------------------------------------- */
  var navbar = document.getElementById("navbar");
  var navLinks = document.querySelectorAll("[data-nav]");
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }

    var scrollPos = window.scrollY + 140;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     Mobile hamburger menu
  --------------------------------------------------------- */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        hamburger.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------------------------------------------------
     Scroll reveal via IntersectionObserver
  --------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(".reveal, .reveal-stagger");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     Animated counters (hero stats)
  --------------------------------------------------------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffixEl = el.querySelector(".suffix");
    var suffixHTML = suffixEl ? suffixEl.outerHTML : "";
    if (reduceMotion) {
      el.innerHTML = target.toLocaleString() + suffixHTML;
      return;
    }
    var duration = 1400;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.innerHTML = value.toLocaleString() + suffixHTML;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll(".stat .num");
  if ("IntersectionObserver" in window) {
    var countIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* ---------------------------------------------------------
     Typing effect for hero subtitle
  --------------------------------------------------------- */
  var typingTarget = document.getElementById("typing-target");
  var typingStrings = [
    "9+ years in telecom operations. Now building SQL, Python, and Power BI solutions that turn raw data into decisions.",
    "From tracking rollout milestones to tracking KPI dashboards — same discipline, sharper tools."
  ];
  if (typingTarget) {
    if (reduceMotion) {
      typingTarget.textContent = typingStrings[0];
    } else {
      (function typeLoop() {
        var stringIndex = 0;
        var charIndex = 0;
        var deleting = false;

        function tick() {
          var full = typingStrings[stringIndex];
          if (!deleting) {
            charIndex++;
            typingTarget.innerHTML = full.slice(0, charIndex) + '<span class="cursor">&nbsp;</span>';
            if (charIndex === full.length) {
              deleting = true;
              setTimeout(tick, 2200);
              return;
            }
          } else {
            charIndex--;
            typingTarget.innerHTML = full.slice(0, charIndex) + '<span class="cursor">&nbsp;</span>';
            if (charIndex === 0) {
              deleting = false;
              stringIndex = (stringIndex + 1) % typingStrings.length;
            }
          }
          setTimeout(tick, deleting ? 18 : 32);
        }
        tick();
      })();
    }
  }

  /* ---------------------------------------------------------
     Lightweight floating particles in the hero visual
  --------------------------------------------------------- */
  var particleHost = document.getElementById("particles");
  if (particleHost && !reduceMotion) {
    var count = window.innerWidth < 700 ? 10 : 18;
    for (var i = 0; i < count; i++) {
      var p = document.createElement("span");
      p.className = "particle";
      p.style.top = Math.random() * 100 + "%";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 6 + Math.random() * 6 + "s";
      p.style.animationDelay = Math.random() * 4 + "s";
      particleHost.appendChild(p);
    }
  }

  /* ---------------------------------------------------------
     Button ripple micro-interaction
  --------------------------------------------------------- */
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (reduceMotion) return;
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement("span");
      var size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 650);
    });
  });

  /* ---------------------------------------------------------
     "Why work with me" cursor glow
  --------------------------------------------------------- */
  document.querySelectorAll(".why-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top) + "px");
    });
  });

  /* ---------------------------------------------------------
     Render project cards from projects.js
  --------------------------------------------------------- */
  var grid = document.getElementById("projects-grid");
  if (grid && typeof projects !== "undefined") {
    projects
      .filter(function (p) { return p.featured; })
      .forEach(function (p) {
        var card = document.createElement("article");
        card.className = "project-card";

        var media = document.createElement("div");
        media.className = "project-media";
        var img = document.createElement("img");
        img.alt = p.title + " — project preview";
        img.loading = "lazy";
        img.src = p.image;
        img.onerror = function () {
          media.textContent = "PROJECT PREVIEW";
          media.removeChild(img);
        };
        media.appendChild(img);

        var body = document.createElement("div");
        body.className = "project-body";

        var tag = document.createElement("span");
        tag.className = "project-tag";
        tag.textContent = p.tag;

        var title = document.createElement("h3");
        title.textContent = p.title;

        var desc = document.createElement("p");
        desc.textContent = p.description;

        var tagList = document.createElement("div");
        tagList.className = "tag-list";
        (p.tech || []).forEach(function (t) {
          var span = document.createElement("span");
          span.className = "tag";
          span.textContent = t;
          tagList.appendChild(span);
        });

        var actions = document.createElement("div");
        actions.className = "project-actions";

        var ghLink = document.createElement("a");
        ghLink.className = "btn btn-sm";
        ghLink.href = p.github;
        ghLink.target = "_blank";
        ghLink.rel = "noopener";
        ghLink.textContent = "GitHub Repo";
        actions.appendChild(ghLink);

        if (p.dashboard) {
          var dashLink = document.createElement("a");
          dashLink.className = "btn btn-sm btn-primary";
          dashLink.href = p.dashboard;
          dashLink.target = "_blank";
          dashLink.rel = "noopener";
          dashLink.textContent = "Live Dashboard";
          actions.appendChild(dashLink);
        }

        body.appendChild(tag);
        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(tagList);
        body.appendChild(actions);

        card.appendChild(media);
        card.appendChild(body);
        grid.appendChild(card);
      });
  }
})();
