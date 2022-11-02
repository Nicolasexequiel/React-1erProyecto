import logo from './logo.svg';
import './App.css';
import MyButton from './componentes/MyButton/MyButton';
import NavBar from './componentes/MyButton/NavBar.js/NavBar';
import ItemListConteiner from './componentes/ItemList/ItemListConteiner';
function App() {
  

  const titulo = "hola gente como estan?"
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <p> {titulo} </p>
        <MyButton text="boton 1" color="blue" />
        <MyButton text="boton 2" color= "red" />
        <MyButton text="muy bueno" color= "green" />
      <ItemListConteiner/>

      </header>
    </div>
  );
}

export default App;
