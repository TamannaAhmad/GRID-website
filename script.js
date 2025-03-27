document.addEventListener("DOMContentLoaded", () => {
    // Timeline Intersection Observer
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3 }
    );
  
    timelineItems.forEach((item) => {
        observer.observe(item);
    });
  
    // Smooth scrolling for navigation and footer links
    const navLinks = document.querySelectorAll("nav a[href^='#'], .nav-link[href^='#']");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
  });