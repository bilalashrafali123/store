import Banner from "../Banner";
import "./index.scss";

const Login = () => {
  return (
    <>
      <div>
        <Banner title="Login" />
      </div>

      <div className="login-wrapper">
        <div className="container login-container">
          <div className="login-left">
            <div className="login-left-content">
              <h2>New to our website?</h2>
              <p>
                There are advances being made in science and technology
                everyday, <br /> and a good example of this is the...
              </p>
              <button>Create an Account</button>
            </div>
          </div>
          <div className="login-right">
            <h3>Log in to enter</h3>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <div className="login-options">
                <label>
                  <input type="checkbox" /> Keep me logged in
                </label>
              </div>
              <button type="submit">Log In</button>
              <a href="#">Forgot Password?</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;