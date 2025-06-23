var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearErrors, showError } from "./types.js";
import { validateSignUp } from "./validator.js";
import { mockSignUp } from "./mockBackend.js";
// let form = document.getElementById("signup-form");
let form = document.getElementById("signup-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const fullName = document.getElementsByName("fullName")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const confirmPassword = document.getElementsByName("confirmPassword")[0].value;
    clearErrors();
    const data = { fullName, email, password, confirmPassword };
    let Errors = validateSignUp(data);
    if (Object.keys(Errors).length === 0) {
        try {
            yield mockSignUp(email, password);
            console.log("Mock signup succeeded"); // ✅ هذا مهم
            alert("✅ Signup successful!");
            form.reset();
        }
        catch (err) {
            const signupErrors = document.getElementById("signup-errors");
            signupErrors.textContent = err.message;
        }
    }
    else
        showError(Errors);
}));
