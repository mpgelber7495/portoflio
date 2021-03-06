import logo from "./logo.svg";
import Header from "./components/Header";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Body from "./components/Body";
import Career from "./components/Career";
import Code from "./components/Code";
import Creative from "./components/Creative";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Career />
      <Code />
      <Creative />
      <Footer />
    </div>
  );
}

export default App;
