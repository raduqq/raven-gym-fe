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
        <label>
          <p>Email</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Firstname</p>
          <input type="text" onChange={(e) => setFirstname(e.target.value)} />
        </label>
        <label>
          <p>Lastname</p>
          <input type="text" onChange={(e) => setLastname(e.target.value)} />
        </label>
        <label>
          <p>Role</p>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="MANAGER">MANAGER</option>
          </select>
        </label>
        <div>
          <button type="submit">Submit</button>
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
