import axios from "axios";
import logo from './clowns.png'; // Directly import the image

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios
        .post("http://localhost:3001/authenticate", { username: value })
        .then((r) => props.onAuth({ ...r.data, secret: value }))
        .catch((e) => console.log("Auth Error", e));
    };
  
    return (
      <>
        <style>
          {`
            .background {
              position: relative; /* Ensures the logo can be positioned relative to this container */
            }
            
            .company-logo {
                position: fixed; /* Use fixed to position relative to the viewport */
                top: 50%; /* Center vertically */
                right: 50px; /* Maintain a distance from the right edge */
                width: 900px; /* Increase the width as desired */
                height: auto; /* Keeps the aspect ratio of the image */
                transform: translateY(-50%); /* Adjust vertically to truly center based on its own height */
              }
              
          `}
        </style>
        <div className="background">
          {/* Logo Image */}
          <img
            src = {logo}
            className="company-logo"
          />
  
          <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Welcome to clownsCord👋</div>
            {/* Your form content */}
            <div className="form-subtitle">Type name below to begin: </div>
  
            <div className="auth">
              <div className="auth-label">Username:</div>
              <input className="auth-input" name="username" />
              <button className="auth-button" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default AuthPage;
  