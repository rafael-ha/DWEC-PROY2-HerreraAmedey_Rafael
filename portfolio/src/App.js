import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Portfolio from './componentes/portfolio/portfolio';
import Info from './componentes/info/info.js'
import About from './componentes/about/about';
import Academics from './componentes/academics/academics';
import Contacto from './componentes/contacto/contacto';
import Utility from './componentes/utility/utility.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <About/>
      <Portfolio />
      <Academics />
      <Utility/>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default App;
