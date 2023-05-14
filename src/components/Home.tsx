import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

export default function Home() {
  const { token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to Raven Martial Arts Gym! Discover the path to strength,
        discipline, and personal growth through the practice of martial arts.
      </p>
      <p>
        Join our community and embark on a transformative journey of
        self-improvement. Unleash your inner warrior and unlock your full
        potential at Raven!
      </p>
    </div>
  );
}
