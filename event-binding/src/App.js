import logo from './logo.svg';
import './App.css';
import data from './data/flowers.json';
import Product from './Product';
import Counter from './Counter'


function App() {
  return (
    <div>
      <Counter/>
      <List/>
    </div>
  );
}


function List(){
  const flower=data;
  return(
      <div>
        {
          flower.map(item=>(
            <Product title={item.name} 
            description={item.description}
            quantity={item.quantity}
            imageurl={item.imageUrl}/>
        ))
        }
      </div>

  );
}


export default App;
