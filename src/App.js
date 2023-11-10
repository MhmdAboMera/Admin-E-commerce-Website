// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import "./App.css";
import {Routes , Route} from 'react-router-dom'
import Products from './Pages/Products';
import Home from './Pages/Home';
import Addproduct from './Pages/Addprodut';
import ProductDetails from './Pages/ProductDetails';
import EditDetails from './Pages/EditDetails';
import Categorise from './categorisePage/Categorise'
import KindofProduct from './categorisePage/KindofProduct';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10 ">
          <Routes>
            <Route path='/'
              element={
                <Home/>
              }
            />
            <Route path='/products'
              element={
                <Products/>
              }
            />
            <Route path='/products/add'
              element={
                <Addproduct/>
              }
            />
            <Route path='/products/:productId'
              element={
                <ProductDetails/>
              }
            />
            <Route path='/products/edit/:productID'
              element={
                <EditDetails/>
              }
            />
            <Route path='/categories'
              element={
                <Categorise/>
              }
            />
            <Route path='/products/category/:categryName'
              element={
                <KindofProduct/>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
