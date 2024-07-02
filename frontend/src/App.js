import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import horse_banner from './Components/Assests/horse_banner.png';
import cow_banner from './Components/Assests/cow_banner.png';
import dog_banner from './Components/Assests/dog_banner.png';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/horse' element={<ShopCategory banner={horse_banner} category="horse"/>}/>
          <Route path='/cow' element={<ShopCategory banner={cow_banner} category="cow"/>}/>
          <Route path='/dog' element={<ShopCategory banner={dog_banner} category="dog"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
