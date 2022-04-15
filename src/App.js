
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Breakfast from './component/Items/Breakfast/Breakfast';
import Dinner from './component/Items/Item/Dinner/Dinner';
import Lunch from './component/Items/Lunch/Lunch';
import Login from './component/Login/Login';
import Home from './component/Logout/Home/Home';
import Logout from './component/Logout/Logout';
import SearchBox from './component/SearchBox/SearchBox';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path="/search" element={<SearchBox></SearchBox>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
