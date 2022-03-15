import "./styles/App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Nav/Navbar";
import SignUpForm from "./components/Nav/SignUpForm";
import LogInForm from "./components/Nav/LogInForm";
import SideMenu from "./components/Nav/SideMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUpForm />
      <LogInForm />
      <SideMenu />
      <Container />
    </div>
  );
}

export default App;
