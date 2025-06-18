import './App.css';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


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
