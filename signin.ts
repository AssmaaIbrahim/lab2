import { DataOfLogin } from "./types.js"
import { ValidationError,clearErrors,showError } from "./types.js"
import { validateLogin } from "./validator.js"
import { mockLogin } from "./mockBackend.js";

// let form = document.getElementById("signin-form");
let form = document.getElementById("signup-form") as HTMLFormElement;
form?.addEventListener("submit", async e => {
  e.preventDefault();


  const email = (document.getElementsByName("email")[0] as HTMLInputElement).value;
  const password = (document.getElementsByName("password")[0] as HTMLInputElement).value;

  const data: DataOfLogin = { email, password };
  let Errors: ValidationError = validateLogin(data)
  clearErrors();
  if (Object.keys(Errors).length === 0) {
    try {
      await mockLogin(email, password);
      alert("✅ Login successful!");
    } catch (err) {
      const signupErrors = document.getElementById("signin-errors");
      signupErrors!.textContent = (err as Error).message;
    }
  }
  else
    showError(Errors);
});
