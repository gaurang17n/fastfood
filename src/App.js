
import './App.css';
import {BrowserRouter,Routes,Route,Link,} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tables from './Pages/Tables'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path="productAdmin" element={<Tables/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
