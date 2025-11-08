
import './App.css';
import ControlledComponent from './components/ControlledComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import UncontrolledForm from './components/UncontrolledComponent';

function App() {

  const name = "Rajveer";
  const company = "w3villa";
  
  return (
    <div>
      <Header name={name}/>
      <hr/>
      <ControlledComponent />
      <hr/>
      <UncontrolledForm />
      <hr/>
      <Footer company={company}/>
    </div>
  );
}

export default App;

