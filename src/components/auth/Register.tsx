import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

interface RegisterCredentials {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

async function registerUser(credentials: RegisterCredentials) {
  return fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export default function Register() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("USER");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await registerUser({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      role: role,
    });

    navigate("/login");
  };

  return (
    <div className="register-wrapper">
      <h1>Register</h1>
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
        <div className="mb-3">
          <label htmlFor="firstnameInput" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            id="firstnameInput"
            className="form-control"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastnameInput" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            id="lastnameInput"
            className="form-control"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label">
            Role
          </label>
          <select
            id="roleSelect"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="MANAGER">MANAGER</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div>
        <p>
          Have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}
