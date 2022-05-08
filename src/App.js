import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import Items from './Pages/Items/Items';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
