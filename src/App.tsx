import "./App.css";
import Login from "./components/auth/Login";
import useToken from "./hooks/useToken"

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
    </div>
  );
}

export default App;
