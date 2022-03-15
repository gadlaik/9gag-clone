import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { logIn } from "../../firebase";

function LogInForm() {
  const [logInBtn, setLogInBtn] = useState(true);

  const emailRef = useRef();
  const passRef = useRef();

  const handleLogIn = async (email, password) => {
    try {
      await logIn(email, password);
      await document.querySelector(".logIn-form").reset();
      document.querySelector(".logIn-container").classList.toggle("show-form");
      document.querySelector(".logIn-signUp").style.display = "none";
      document
        .querySelectorAll(".trio")
        .forEach((i) => i.classList.add("show-form"));
      setLogInBtn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    if (
      Array.from(emailRef.current.value).length > 6 &&
      Array.from(emailRef.current.value).includes("@") &&
      Array.from(passRef.current.value).length > 6
    ) {
      setLogInBtn(false);
      document.querySelector(".logIn-form button").classList.add("enableBtn");
    } else {
      setLogInBtn(true);
      document
        .querySelector(".logIn-form button")
        .classList.remove("enableBtn");
    }
  };

  return (
    <div className="logIn-container">
      <div className="logIn">
        <div className="close-title">
          <div
            className="close-btn"
            onClick={() => {
              document
                .querySelector(".logIn-container")
                .classList.remove("show-form");
            }}
          >
            <CloseIcon />
          </div>
          <h3>Log in</h3>
        </div>

        <div className="google-logIn">
          <GoogleIcon /> <p>Continue With Google</p>
        </div>

        <p id="or-para">OR</p>

        <form
          className="logIn-form"
          onChange={handleChange}
          onSubmit={() =>
            handleLogIn(emailRef.current.value, passRef.current.value)
          }
        >
          <input
            type="email"
            ref={emailRef}
            id="logIn-email"
            placeholder="Email address"
          />
          <input
            type="password"
            ref={passRef}
            id="logIn-password"
            placeholder="Password"
          />
          <button type="submit" disabled={logInBtn}>
            Log in
          </button>
          <div>Forgot password?</div>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
