import { Link } from "react-router-dom";

export const Login = () => {
  //  use reqres to log user in.
const handlesubmit = (e)=>{
  e.preventDefault()
 
}
  return (
    <form onSubmit={handlesubmit} className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
