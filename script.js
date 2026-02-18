function scrollToWaitlist() {
  document.getElementById("waitlist").scrollIntoView({
    behavior: "smooth"
  });
}

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".card, .hero, .waitlist").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Waitlist form
document.getElementById("waitlist-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email) {
    document.getElementById("success-message").classList.remove("hidden");
    this.reset();
  }
});
