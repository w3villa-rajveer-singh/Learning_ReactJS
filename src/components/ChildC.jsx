import React, { useContext } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    if (user.name === "Rajveer"){
      setUser({ name: "RV" });
    } else {
      setUser({ name: "Rajveer" });
    }
  };

  return (
    <div>
      <p>The Value sent from App/Root Component: {user.name} </p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default ChildC;
