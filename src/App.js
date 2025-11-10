import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";
import ControlledComponent from "./components/ControlledComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UncontrolledForm from "./components/UncontrolledComponent";
import UsersList from "./components/Userlist";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({name: "Rajveer"});

  const name = "Rajveer";

  return (
    <div>
      <Header name={name} />
      <hr />
      <UserContext.Provider value={{user, setUser}}>
      <ChildA />
      </UserContext.Provider>
      <hr/>
      <ControlledComponent />
      <hr />
      <UncontrolledForm />
      <hr />
      <UsersList />
      <Footer />
    </div>
  );
}

export { UserContext };
export default App;

