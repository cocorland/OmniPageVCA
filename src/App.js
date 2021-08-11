import logo from './logo.svg';
import Componente from "./components/Componente"
import NameForm from "./components/Componente"
import './App.css';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola, mi nombre es Orlando Expresado desde una prop"/>
          <hr/>
          <Propiedades
            cadena="Esto es una cadena"
            numero={19}
            booleano={true}
          />
        </section>
        <section>
          {/* Aqui intente aplicar el formulario de ejemplo de la clase NameForm */}
          <NameForm>Orlando</NameForm>
        </section>
      </header>
    </div>
  );
}

export default App;
