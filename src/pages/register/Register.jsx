import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Create a username..." />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter an email..." />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Create a password..." />
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>
        </form>
    </div>
  )
}
