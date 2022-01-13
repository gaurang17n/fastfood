import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route,Link,} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tables from './Pages/Tables'
import Sandwich from './Pages/Sandwich';
import BasicTableComponent from './Components/basic.table';
import FilterTableComponent from './Components/filter.table';
import PaginationTableComponent from './Components/pagination.table';
import SortingTableComponent from './Components/sorting.table';
import ExpandableTableComponent from './Components/expandable.table';
import Demo from './Pages/Demo';
import Product from './Pages/Product';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path="burgers" element={<Tables/>}></Route>
        <Route path="sandwich" element={<Sandwich/>}></Route>
        <Route path="product" element={<Product/>}></Route>
      </Routes>
     </BrowserRouter>

                      
    </div>
  );
}

export default App;
