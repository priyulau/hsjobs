//define variables by getElementById
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("cpassword");
const formEl = document.getElementById("form");
const openMessage = document.querySelector(`#opening-msg`);
const closeMessage = document.querySelector(`#closing-msg`);

const validateUserInput = (userInput, fieldName = `Input`) => {
    if (userInput === "") {
      showMessage(
        `Your registration is incomplete. Please complete ${fieldName}.`
      );
      return false;
    }
    return true;
  };

  const validatePassword = (pw1, pw2) => {
    if (pw1 !== pw2) {
      showMessage(`Your passwords do not match!`);
      return false;
    }
    return true;
  };

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      validateUserInput(firstName.value, `First Name`) &&
      validateUserInput(lastName.value, `Last Name`) &&
      validateUserInput(email.value, `Email Address`) &&
      validateUserInput(password1.value, `Password`) &&
      validatePassword(password1.value, password2.value)
    ) {
      registerUser();
    }
});

function registerUser() {
    showMessage(`You are now registered!`);
    showMessage(`Let's go log-in!`, closeMessage);
  }

  function showMessage(msg, msgDom = openMessage) {
    msgDom.innerHTML = `<p>${msg}</p>`;
  }

  function clearMessage(msg, msgDom = openMessage) {
    msgDom.innerHTML = ``;
  }

  //FUNCTION -logs user in
function loginUser(email, password) {
  console.log(email, password);
  showMessage(
    `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif">`
  );
  setTimeout(() => {
    window.location = `https://google.com`;
  }, 2000);
}
