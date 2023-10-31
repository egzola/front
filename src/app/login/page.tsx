"use client"

import "../../styles/login.css"


export default function Login() {

  return (
      <div className="login-box">
          <h2>Login</h2>
          <form action='/api/login' method='POST'>
              <div className="user-box">
                  <input type="text" name="" required />
                  <label>Username</label>
              </div>
              <div className="user-box">
                  <input type="password" name="" required />
                  <label>Password</label>
              </div>
              <a href="#">Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </a>
          </form>
      </div>
  );
};
