import './App.css';
import { Boton } from './components/boton/Boton';
import { Titulo } from './components/titulo/Titulo';
import { Contador } from './components/contador/Contador';
import logo from "./img/logo.svg.webp"


function App() {
  return (
    <div className="App">
         <div className="logo-container">
          <img src={logo} width="100" alt="logo-sena"></img>
        </div>

        <div className="titulo-container">
          <Titulo></Titulo>
        </div>

       

        <div className="botones-container">
          <Boton ></Boton>
        </div>
        
    </div>
  );
}

export default App;
