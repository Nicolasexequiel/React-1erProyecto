import logo from './logo.svg';
import './App.css';
import MyButton from './componentes/MyButton/MyButton';
import ItemListConteiner from './componentes/ItemList/ItemListConteiner';
import NavBar from './componentes/navBar/NavBarConteiner';


function App() {
  

  const titulo = "hola gente como estan?"
  return (
    <div className="App">

      <NavBar/>
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
