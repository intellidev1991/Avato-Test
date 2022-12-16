class AppController {
  constructor(property, ...args) {
    this.property = property;
    this.buttonsData = args;

    // Bind the event handlers to the class instance
    this.onSubmit = this.onSubmit.bind(this);
    this.onToolbarClick = this.onToolbarClick.bind(this);
  }

  onSubmit(event) {
    // Get the form that was submitted
    event.preventDefault();

    // Get the form data
    const data = new URLSearchParams(new FormData(event.target).entries());
    const name = data.get("name");
    alert(
      `${event.target.id} has been submitted, property: ${this.property}\r\n${
        name ? `Name: ${name}` : ""
      }`
    );
  }

  onToolbarClick(event) {
    // Get the button that was clicked
    event.preventDefault();
    const btn = event.target;
    alert(
      `${btn.innerText} has been clicked, property: ${
        this.buttonsData[btn.getAttribute("data-id")]
      }`
    );
  }
}

window.onload = function () {
  // Initialize the class and attach event handlers
  const appController = new AppController(
    "This is my form test.",
    "btn 1",
    "btn 2",
    "btn 3",
    "btn 4"
  );

  document
    .getElementById("mainForm")
    .addEventListener("submit", appController.onSubmit);

  document
    .querySelectorAll(".btn")
    .forEach((btn) =>
      btn.addEventListener("click", appController.onToolbarClick)
    );
};
