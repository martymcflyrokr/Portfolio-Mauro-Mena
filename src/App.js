import './App.css';
import NavBar from './components/navbar/NavBar';
import Presentacion from './pages/presentacion/Presentacion';
import SobreMi from './pages/sobremi/SobreMi';
import Experiencia from './pages/experiencia/Experiencia';



function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
        <main>
          <Presentacion/>
          <SobreMi/>
          <Experiencia/>
        </main>
    </div>
  );
}

export default App;
