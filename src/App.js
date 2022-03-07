import "./styles/App.css";
import Container from "./components/Container/Container";
import ShortMenu from "./components/CurrentSection/ShortMenu";
import Navbar from "./components/Nav/Navbar";
import SignUpForm from "./components/Nav/SignUpForm";
import LogInForm from "./components/Nav/LogInForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUpForm />
      <LogInForm />
      <ShortMenu />
      <Container />
    </div>
  );
}

export default App;
