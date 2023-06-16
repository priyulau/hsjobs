//define variables by getElementById
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("cpassword");
const formEl = document.getElementById("form");
const openMessage = document.querySelector(`#opening-msg`);
const closeMessage = document.querySelector(`#closing-msg`);
const resetBtn = document.querySelector(`#reset`);

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
  const firstNameVal = firstName.value;
  const lastNameVal = lastName.value;
  const emailVal = email.value;
  const password1Val = password1.value;
  const password2Val = password2.value;

  if (
    validateUserInput(firstNameVal, `First Name`) &&
    validateUserInput(lastNameVal, `Last Name`) &&
    validateUserInput(emailVal, `Email Address`) &&
    validateUserInput(password1Val, `Password`) &&
    validatePassword(password1Val, password2Val)
  ) {
    console.log(`validated`); //works
    registerUser({
      firstNameVal,
      lastNameVal,
      emailVal,
      password1Val,
      password2Val,
    });
    //add condiition here because we only want to log-in the user once they have been registered
    if (registerUser()) loginUser(emailVal, password1Val);
  }
});

function registerUser() {
  showMessage(
    `
      <div class="text-center items-center m-10">
        <p>You are now registered.</p><br>
        <p>Let's go log-in!</p><br>
        <img src="https://usagif.com/wp-content/uploads/loading-51.gif" class="h-6 w-6 mx-auto">
      </div>
    `,
    closeMessage
  );
  document.querySelector(`#form-textboxes`).innerHTML = "";
  setTimeout(() => {
    window.location = `https://hsjobs.vercel.app/`;
  }, 2000);
}

function showMessage(msg, msgDom = openMessage) {
  msgDom.innerHTML = `<p>${msg}</p><br>`;
}

function clearMessage(msg, msgDom = openMessage) {
  msgDom.innerHTML = ``;
}

//FUNCTION resets form
resetBtn.addEventListener("click", (event) => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password1.value = "";
  password2.value = "";
  openMessage.innerHTML = "";
  closeMessage.innerHTML = "";
});

//FUNCTION -logs user in
function loginUser(email, password) {
  console.log(email, password);
  showMessage(
    `<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif">`
  );
  setTimeout(() => {
    window.location = `https://hsjobs.vercel.app/`;
  }, 2000);
}