import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { singUp } from "../../firebase";

function SignUpForm() {
  const [signUpBtn, setSignUpBtn] = useState(true);

  const emailRef = useRef();
  const passRef = useRef();

  const switchToLogIn = () => {
    document.querySelector(".signUp-container").classList.remove("show-form");
    document.querySelector(".logIn-container").classList.add("show-form");
  };

  const handleSignUp = async (email, password) => {
    console.log("click");
    try {
      await singUp(email, password);
      await switchToLogIn();
      await document.querySelector(".signUp-form").reset();
      setSignUpBtn(true);
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
      setSignUpBtn(false);
      document.querySelector(".signUp-form button").classList.add("enableBtn");
    } else {
      setSignUpBtn(true);
      document
        .querySelector(".signUp-form button")
        .classList.remove("enableBtn");
    }
  };

  return (
    <div className="signUp-container">
      <div className="signUp">
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

        <form
          className="signUp-form"
          onChange={handleChange}
          onSubmit={() =>
            handleSignUp(emailRef.current.value, passRef.current.value)
          }
        >
          <input type="email" ref={emailRef} placeholder="Email address" />
          <input type="password" ref={passRef} placeholder="Password" />
          <button type="submit" disabled={signUpBtn}>
            Sign up
          </button>
          <div onClick={switchToLogIn}>Already a member? Log in</div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
