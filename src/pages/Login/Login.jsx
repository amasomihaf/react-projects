import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
        <img className="loginImg" src="./images/login.jpg" alt="" />
            <label>Email</label>
            <input className="loginInput" type="email" placeholder="Enter Your Email..." />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter Your Password..." />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
