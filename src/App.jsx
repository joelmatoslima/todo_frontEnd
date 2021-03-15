//import './App.css';

import Menu from "./template/Menu";

import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./Controler/Rotas";
import Msgs from "./template/Msgs";

function App() {
  return (
    <Router>
      <div className="container">
        
        <Menu />
        <Msgs/>
        <Rotas />

      

        
      </div>
    </Router>
  );
}

export default App;
