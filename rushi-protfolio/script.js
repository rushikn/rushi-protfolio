
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  status.textContent = "Sending message...";

  const data = new FormData(form);

  data.append("access_key", "0121053b-cf5e-4551-aba9-066770f4e944");
  data.append("subject", "New message from Rushi's Portfolio");

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: data
      }
    );

    const result = await response.json();

    if (response.ok && result.success) {
      status.textContent = "Message sent successfully!";
      form.reset();
    } else {
      status.textContent =
        "Message failed. Please check your form settings.";
    }
  } catch (error) {
    status.textContent =
      "Network error. Please try again.";
  }
});
