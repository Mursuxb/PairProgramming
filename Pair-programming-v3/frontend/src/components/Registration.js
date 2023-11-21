import React, { useState } from "react";

const Registration = () => {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const apiUrl = "http://localhost:5000/api/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      alert("Check your email address");
      return;
    }
    const user = { username, email, password, role: "user" };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error");
    }
    if (response.ok) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      console.log("new user added:", json);
    }
  }




  return (
    <article className="section">
      <form className="registration" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={username}
          onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Submit" className="submit-btn"></input>
      </form>
    </article>
  );
}


export default Registration;
