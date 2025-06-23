export function showError(errors) {
    for (const key in errors) {
        const group = document.getElementById(`${key}_group`);
        const errorSpan = document.createElement("span");
        errorSpan.className = "error";
        errorSpan.textContent = errors[key];
        group === null || group === void 0 ? void 0 : group.appendChild(errorSpan);
    }
}
export function clearErrors() {
    const errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach((span) => span.remove());
}
