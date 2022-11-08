import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contacto from './Components/pageContacto/Contacto';
import Proyectos from './Components/pageProyectos/Proyectos';
import SobreMi from './Components/pageSobreMi/SobreMi';
function App() {
  return (
   <>
   <Header/>
   <Home/>
   <SobreMi/>
   <Proyectos/>
   <Contacto/>
   </>
  );


}

export default App;
