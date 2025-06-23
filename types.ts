export interface DataOfSignUp{
  fullName:string,
  email :string,
  password:string ,
  confirmPassword :string
}
export interface DataOfLogin{
  email: string,
  password:string
 }
export interface ValidationError{
  [key:string]:string
}

export function showError(errors: ValidationError) {
  for (const key in errors) {
    const group = document.getElementById(`${key}_group`);
    const errorSpan = document.createElement("span");
    errorSpan.className = "error";
    errorSpan.textContent = errors[key];
    group?.appendChild(errorSpan);
  }
}
export function clearErrors() {
  const errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach((span) => span.remove());
}