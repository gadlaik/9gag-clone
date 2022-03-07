import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { signUp } from "../../firebase";

function SignUpForm() {
  const handleSignUp = async () => {
    try {
      await signUp();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp-container">
      <form className="signUp">
        <div className="close-title">
          <div
            className="close-btn"
            onClick={() => {
              document
                .querySelector(".signUp-container")
                .classList.remove("show-form");
            }}
          >
            <CloseIcon />
          </div>
          <h3>Sign up</h3>
        </div>

        <div className="signUp-form">
          <input type="text" id="signUp-name" placeholder="Full name" />
          <input type="email" id="signUp-email" placeholder="Email address" />
          <input type="password" id="signUp-password" placeholder="Password" />
          <button>Sign up</button>
          <a href="#">Already a member? Log in</a>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
