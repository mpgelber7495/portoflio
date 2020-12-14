import logo from "./logo.svg";
import Header from "./components/Header";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Body from "./components/Body";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Career />
    </div>
  );
}

export default App;