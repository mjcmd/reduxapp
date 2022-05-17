import NavBar from "./components/NavBar";
import Shop from "./components/Shop";


function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Shop/>
      </div>
    </div>
  );
}

export default App;
