import Sky from "./components/Sky";
import Grass from "./components/Grass";
import FlowerGarden from "./components/FlowerGarden";

function App() {
  return (
    <div className="relative w-full h-screen">
      <Sky />
      <Grass />
      <div className="absolute inset-0 z-20">
        <FlowerGarden />
      </div>
    </div>
  );
}

export default App;
