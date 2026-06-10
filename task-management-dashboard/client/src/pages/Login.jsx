import { useState } from "react";
import { mockTasks } from "../mockData";  // add this

function Login({ setUser }) {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const email = document.getElementById("email").value;
    if (!email) { alert("Enter email"); return; }

    const { data, error } = await supabase
      .from("users")
      .insert([{ email: email }]);

    if (error) { alert(error.message); return; }
    setUser({ email });
    alert("Stored Successfully");
  };

  // ADD THIS FUNCTION
  const handleDemoLogin = () => {
    localStorage.setItem("demoMode", "true");
    setUser({ email: "demo@example.com", isDemo: true });
  };

  return (
    <div>
      {/* your existing login form */}
      <input id="email" type="email" placeholder="Enter email" />
      <button onClick={handleLogin}>Login</button>

      {/* ADD THIS BUTTON */}
      <button
        onClick={handleDemoLogin}
        style={{
          marginTop: "10px",
          background: "#f59e0b",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        🎮 Try Demo Mode (No Login Required)
      </button>
    </div>
  );
}

export default Login;