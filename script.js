function scrollToWaitlist() {
  document.getElementById("waitlist").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("waitlist-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (email) {
    localStorage.setItem("sincere_waitlist", email);

    document.getElementById("success-message").classList.remove("hidden");
    document.getElementById("waitlist-form").reset();
  }
});
