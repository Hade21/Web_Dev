import './App.css';
import Navbar from "./components/navbar/navbar.jsx"
import Home from "./components/home/home.jsx";
import Project from "./components/projects/project.jsx";
import Contact from "./components/contact/contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
