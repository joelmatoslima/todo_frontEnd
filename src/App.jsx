import Menu from "./template/Menu";
import Msgs from "./template/Msgs";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";

function App() {
  return (
    <div className="container  bg-light shadow-lg p-3 mb-5  bg-body rounded">
      <Menu />
      <Msgs />
      <Home />
      <Sobre />
    </div>
  );
}

export default App;
