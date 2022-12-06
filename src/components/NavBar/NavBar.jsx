import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import Logo from './logo.png';

const NavBar = ({menus}) => {
    return (
        <div className="navBar">
            <div>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className='cartWidgetImg'>
                    <CartWidget />
                </div>
            </div>
            <div className="menu">
                {
                menus.map((menu)=> {
                    return <Link to={`/category/${menu}`} key={menu} >{menu}</Link>
                })
                }
            </div>
        </div>
    )
}

NavBar.proptype = {
    menus: Proptypes.array.isRequired,
}

export default NavBar;