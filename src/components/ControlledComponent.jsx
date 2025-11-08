import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Understanding Controlled Component</h2>
      <br />
      <form>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
      </form>
      <h3>The Details you've Entered are :</h3>
      <p>Name : {name}</p>
      <p>Password : {password}</p>
      <p>Email : {email}</p>
    </div>
  );
};

export default ControlledComponent;
