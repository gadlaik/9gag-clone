import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";

function LogInForm() {
  useEffect(
    () => document.querySelector(".logIn-container").classList.add("showForm"),
    []
  );

  return (
    <div className="logIn-container">
      <form className="logIn">
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

        <div className="signUp-form">
          <input type="email" id="signUp-email" placeholder="Email address" />
          <input type="password" id="signUp-password" placeholder="Password" />
          <button>Sign up</button>
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
