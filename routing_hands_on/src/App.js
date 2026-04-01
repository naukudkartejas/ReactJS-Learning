import logo from './logo.svg';
import './App.css';
import Login from './Login';  
import Register from './Register';
import Product from './Product';
import { BrowserRouter as Router, Link, Route, Routes   } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BasicRouting />
    </div>
  );
}
function BasicRouting(){
  return(
    <div>
      <h1>TFL Store</h1>
      <Router>
      <Link to="/">Home</Link> | <Link to="/Login">Login</Link>  | <Link to="/Register">Register</Link> | <Link to="/Product">Product</Link>
      <hr/>
      <Routes>
        <Route exact path="/"></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Register" element={<Register/>}></Route>
        <Route exact path="/Product" element={<Product/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
