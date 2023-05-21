import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import useToken from "../../hooks/useToken";

interface LoginCredentials {
  email: string;
  password: string;
}

async function loginUser(credentials: LoginCredentials) {
  return fetch("http://localhost:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((data) => {
      return data.access_token;
    });
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = await loginUser({
      email: email,
      password: password,
    });

    setToken(token);    
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="emailInput"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div>
        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
