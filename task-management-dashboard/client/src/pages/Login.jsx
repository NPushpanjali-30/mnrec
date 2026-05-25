import { useState } from "react";

function Login({ setUser }) {
 const [email, setEmail] = useState("");
const handleLogin = async () => {

  const email =
    document.getElementById("email").value;

  if (!email) {
    alert("Enter email");
    return;
  }

  const { data, error } =
    await supabase
      .from("users")
      .insert([
        {
          email: email
        }
      ]);

  console.log(data);
  console.log(error);

  if (error) {
    alert(error.message);
    return;
  }

  setUser({ email });

  alert("Stored Successfully");
}
};