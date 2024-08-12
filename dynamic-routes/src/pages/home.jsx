import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    //validate entries
    if (!userName || !password) {
      setError("Please enter both User Name and Password");
      return;
    }
    console.log("login attempted with", { userName, password });
    //If login sucsessful redirect to profile page
    navigate(`/profile/${userName}`);
  };

  return (
    <div className="LoginBox">
      <div>
        <h2>Login</h2>
        {error && <alert>{error}</alert>}
      </div>
      <form id="Loginform" onSubmit={handleSubmit}>
        <label htmlFor="name"> User Name </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter User Name Here..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password Here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className="Btn" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
