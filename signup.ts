import { DataOfSignUp } from "./types.js"
import { ValidationError,clearErrors,showError } from "./types.js"
import { validateSignUp } from "./validator.js"
import { mockSignUp } from "./mockBackend.js";


// let form = document.getElementById("signup-form");
let form = document.getElementById("signup-form") as HTMLFormElement;
form?.addEventListener("submit", async e => {
  e.preventDefault();

  const fullName = (document.getElementsByName("fullName")[0] as HTMLInputElement).value;
  const email = (document.getElementsByName("email")[0] as HTMLInputElement).value;
  const password = (document.getElementsByName("password")[0] as HTMLInputElement).value;
  const confirmPassword = (document.getElementsByName("confirmPassword")[0] as HTMLInputElement).value;

  clearErrors();
  
  const data: DataOfSignUp = { fullName, email, password, confirmPassword };
let Errors:ValidationError  =validateSignUp(data)
  if (Object.keys(Errors).length === 0) {
    try {
      await mockSignUp(email, password);
      console.log("Mock signup succeeded"); // ✅ هذا مهم
      alert("✅ Signup successful!");
      form.reset();
    } catch (err) {
      const signupErrors = document.getElementById("signup-errors");
      signupErrors!.textContent = (err as Error).message;
    }
  }
  else
    showError(Errors);

  
})

