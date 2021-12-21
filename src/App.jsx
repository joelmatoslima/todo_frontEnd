import Menu from "./template/Menu";
import Msgs from "./template/Msgs";
import Home from "./components/Home";
import Sobre from "./components/Sobre";

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
