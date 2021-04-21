import './Navbar.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log(cartItems)
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <h2>MERN</h2>
            </div>
            {/*link*/}
            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            </span>
                        <span className='cartlogo__badge'>{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        Shop
                    </Link>
                </li>
            </ul>
            {/*hamburger menu*/}
            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}
export default Navbar
