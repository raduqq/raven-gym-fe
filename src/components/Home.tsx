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
    </div>
  );
}
