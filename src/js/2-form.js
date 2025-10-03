const storageKey = "feedback-form-state";
let formData = {
    email: "",
    message: "",
};
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedData = localStorage.getItem(storageKey);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
};

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    };

    console.log(formData);
    
    localStorage.removeItem(storageKey);
    formData = { email: "", message: "" };
    form.reset();
});