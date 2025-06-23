import  {DataOfSignUp,DataOfLogin} from "./types.js";
import { ValidationError } from "./types.js";


function validateEmail(email: string): boolean{
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password: string): boolean{
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;
  return passwordRegex.test(password);
}

export function validateSignUp(data: DataOfSignUp): ValidationError{
  const errors: ValidationError = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";

  if (!data.email.trim())
    errors.email = "email is required."
  else if (!validateEmail(data.email)) errors.email = "Invalid email."

  if (!data.password.trim())
    errors.password = "password is required."
  else if (!validatePassword(data.password)) errors.password = "Invalid password."
  
  if (!data.confirmPassword.trim())
    errors.confirmPassword="Confirm your password."
  else if (data.confirmPassword !== data.password)
    errors.confirmPassword = "Passwords do not match."

  return errors
}

export function validateLogin(data: DataOfLogin): ValidationError {
  const errors: ValidationError = {};
  if (!data.email.trim())
    errors.email = "email is required."
  else if (!validateEmail(data.email)) errors.email = "Invalid email."
  return errors
}