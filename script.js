(function () {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-button");
    const themeColor = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
        const dark = theme === "dark";
        root.setAttribute("data-theme", dark ? "dark" : "light");
        if (themeColor) {
            themeColor.setAttribute("content", dark ? "#141413" : "#ECECE8");
        }
        if (!toggle) {
            return;
        }
        toggle.setAttribute("aria-pressed", dark ? "true" : "false");
        toggle.textContent = dark ? "Light mode" : "Dark mode";
    }

    applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

    if (toggle) {
        toggle.addEventListener("click", function () {
            const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            try {
                localStorage.setItem("theme", next);
            } catch (err) {
                /* Ignore storage failures and still switch for this view. */
            }
            applyTheme(next);
        });
    }

    const navLinks = new Map();
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
        navLinks.set(link.getAttribute("href").slice(1), link);
    });

    if ("IntersectionObserver" in window && navLinks.size) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    const current = navLinks.get(entry.target.id);
                    if (!current) {
                        return;
                    }
                    navLinks.forEach(function (link) {
                        link.removeAttribute("aria-current");
                    });
                    current.setAttribute("aria-current", "true");
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        navLinks.forEach(function (_link, id) {
            const section = document.getElementById(id);
            if (section) {
                observer.observe(section);
            }
        });
    }
})();
