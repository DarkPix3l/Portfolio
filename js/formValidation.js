document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("email-form");

  const validator = new window.JustValidate("#email-form", {
    errorFieldCssClass: "is-invalid",
    successFieldCssClass: "is-valid",
    errorLabelCssClass: "validation-error-label",
    focusInvalidField: true,
    validateBeforeSubmitting: true,
  });

  validator.addField("#name", [
    {
      rule: "required",
      errorMessage: "Please enter your name.",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Name must be at least 2 characters.",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Name cannot exceed 15 characters.",
    },
    {
      rule: "custom",
      validator: (value) => {
        const nameRegex = /^[\p{L}\s'-]+$/u;
        return nameRegex.test(value);
      },
      errorMessage: "Name can only contain letters and spaces.",
    },
  ]);

  validator.addField("#subject", [
    {
      rule: "maxLength",
      value: 150,
      errorMessage: "Subject cannot exceed 150 characters.",
    },
  ]);

  validator.addField("#email", [
    {
      rule: "required",
      errorMessage: "Please enter your email address.",
    },
    {
      rule: "email",
      errorMessage: "Please enter a valid email address.",
    },
  ]);

  validator.addField("#message", [
    {
      rule: "required",
      errorMessage: "Please enter your message.",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Message must be at least 10 characters.",
    },
    {
      rule: "maxLength",
      value: 5000,
      errorMessage: "Message cannot exceed 5000 characters.",
    },
  ]);

  // --- Handle Form Submission ---

  validator.onSuccess(async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const recaptcha = document.querySelector("[name='g-recaptcha-response']");
    if (recaptcha) formData.append("g-recaptcha-response", recaptcha.value);
    const honeypot = document.querySelector("[name='bot-field']");
    if (honeypot.value) return;

    //Avoiding too many requests per time
    const submitButton = form.querySelector("input[type='submit']");
    const SUBMISSION_COOLDOWN = 15000; // 15 seconds
    submitButton.disabled = true;
    submitButton.value = "wait for next submission";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        Swal.fire({
          title: "Thank you for reaching out!",
          text: "Your message has been sent!",
          icon: "success",
          background: "#19191a",
          color: "#FFFF",
          confirmButtonColor: "#716add",
          confirmButtonText: "close",
        });

        form.reset(); //textfields

        document.querySelectorAll(".is-valid").forEach((el) => {
          el.classList.remove("is-valid");
        }); //remove class
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        background: "#19191a",
        color: "#FFFF",
        confirmButtonColor: "#716add",
        confirmButtonText: "close",
      });
    }
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.value = "Submit";
    }, SUBMISSION_COOLDOWN);
  });
});
