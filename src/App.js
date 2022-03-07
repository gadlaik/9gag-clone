import "./styles/App.css";
import Container from "./components/Container/Container";
import ShortMenu from "./components/CurrentSection/ShortMenu";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShortMenu />
      <Container />
    </div>
  );
}

export default App;
