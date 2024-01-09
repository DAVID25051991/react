import logo from './logo.svg';
import './styles/App.css';
import Boton from './Components/Boton';
import Saludo from './Components/Saludo';
import Menu from './Components/Menu';
import footer1 from './Components/footer1';
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
      <footer1></footer1>
    </div>
  );
}

export default App;
