import './App.css';
import Header from './components/Header';
import CardList from './components/CardList/CardList';
import ItemCart from './components/ItemCart/ItemCart';


function App() {

  
  return (
    <div className="App">
      <Header />
      <div className="general-container"> 
      <CardList title={'Productos mas vendidos'}/>
      <ItemCart title={'Platos extras'} ItemCart={ItemCart} />
      </div>
    </div >




  );
}
export default App;

