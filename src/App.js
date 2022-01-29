import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route,Link,} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tables from './Pages/Tables'
import Category from './Pages/Category';
import Demo from './Pages/Demo';
import Product from './Pages/Product';
import Addproducts from './Pages/Addproducts';
import UpdateProduct from './Pages/UpdateProduct';
import Addcategory from './Pages/Addcategory';
import UpdateCategory from './Pages/UpdateCategory'
import DashNavbar from './Components/DashNavbar';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path="burgers" element={<Tables/>}></Route>
        <Route path="category" element={<Category/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route path="addproducts" element={<Addproducts/>}></Route>
        <Route path="update/:id" element={<UpdateProduct/>}></Route>
        <Route path="addcategory" element={<Addcategory/>}></Route>
        <Route path="catupdate/:id" element={<UpdateCategory/>}></Route>
        <Route path='/home' element={<DashNavbar/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     </BrowserRouter>

                      
    </div>
  );
}

export default App;
