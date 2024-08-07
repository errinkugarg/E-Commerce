import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from "../Assests/R_K_Logo.jpg";
import cart_icon from "../Assests/cart-icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/nav_dropdown.png';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return(
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" width="60" height="60"/>
                <p>R.K TRADERS</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ color:'#626262' , textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("horse")}}><Link style={{ color:'#626262' , textDecoration: 'none' }} to='/horse'>Horse</Link>{menu==="horse"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("cow")}}><Link style={{ color:'#626262' , textDecoration: 'none' }} to='/cow'>Cow</Link>{menu==="cow"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dogs")}}><Link style={{ color:'#626262' , textDecoration: 'none' }} to='/dog'>Dogs</Link>{menu==="dogs"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt="" height="35" width="35"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar