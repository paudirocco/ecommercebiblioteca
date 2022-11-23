import Proptypes from 'prop-types';
import CartWidget from '../CartWidget';
import Logo from './logo.png';

const NavBar = ({menus}) => {
    return (
        <div className="navBar">
            <div>
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
                <div className='cartWidgetImg'>
                    <CartWidget />
                </div>
            </div>
            <div className="menu">
                {
                menus.map((menu)=> {
                    return <a href="#">{menu}</a>
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