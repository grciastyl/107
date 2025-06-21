import './App.css';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() { //App is a component and needs to be started with a capital letter
  return (
    <div className="App">
      <Navbar /> 
      <h1>Hello from REACT</h1>
      <Catalog />
      <Footer />


    </div>
  );
}

export default App
