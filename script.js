document.addEventListener("DOMContentLoaded", () => {
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
      {
        threshold: 0.3, // Trigger when 30% of the item is visible
      }
    );
  
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
  });

// Tab switching functionality
const tabs = document.querySelectorAll('.team-tab');
const teamSections = document.querySelectorAll('.team-members');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        teamSections.forEach(section => section.classList.remove('active'));

        tab.classList.add('active');
        const teamId = tab.getAttribute('data-team');
        document.getElementById(teamId).classList.add('active');
    });
});