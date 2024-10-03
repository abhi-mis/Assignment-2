import "./App.css";
import "./index.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Fifth2 from "./components/Fifth2";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eight from "./components/Eight";
import Ninth from "./components/Ninth";

function App() {
  return (
    <div className="container">
      {/* Wrap each component in a div with a specific class name */}
      <div className="section first">
        <First />
      </div>
      <div className="section second">
        <Second />
      </div>
      <div className="section third">
        <Third />
      </div>
      <div className="section fourth">
        <Fourth />
      </div>
      <div className="section fifth">
        <Fifth />
      </div>
      <div className="section fifth2">
        <Fifth2 />
      </div>
      <div className="section sixth">
        <Sixth />
      </div>
      <div className="section seventh">
        <Seventh />
      </div>
      <div className="section eight">
        <Eight />
      </div>
      <div className="section ninth">
        <Ninth />
      </div>
    </div>
  );
}

export default App;
