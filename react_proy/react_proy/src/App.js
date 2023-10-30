import logo from './logo.svg';
import './styles/App.css';
import Boton from './Components/Boton';
import Saludo from './Components/Saludo';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <div>
        <Menu></Menu>
      </div>
      <header className="App-header">
        <Saludo></Saludo>
        <Boton></Boton>

      </header>
    </div>
  );
}

export default App;
