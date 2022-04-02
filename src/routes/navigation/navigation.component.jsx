// MAIN FUNCTIONALITY
import { Fragment, useContext } from 'react';

import { Outlet, Link } from 'react-router-dom';

// CUSTOM HOOK FUNCTIONALITY
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

// FIREBASE UTILITIES
import { signOutUser } from '../../utilities/firebase.utility.js';

// COMPONENTS
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// DETAIL FILES
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// STYLES
import "./navigation.styles.scss";




// top level component
const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">

            <Link className="nav-link" to="/shop">
                SHOP
            </Link>

            <CartIcon />

            <Link className="nav-link" to="/contact">
                CONTACT
            </Link>
            
            <Link className="nav-link" to="/projects">
                Projects
            </Link>
            
            {/*sign-in or sign-out link*/}
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>Sign Out</span>
              ) :(
                <Link className="nav-link" to="/auth">Sign In</Link>
              )
            }
            
        </div>

        {
          isCartOpen && <CartDropdown />
        }

      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;