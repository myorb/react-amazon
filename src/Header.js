import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}] = useStateValue();
    return (
        <nav className="header"> 
            <Link to="/">
                <img className="header__logo" alt="logo" src="/logo192.png" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__serachImput" />
                <SearchIcon className="header__serachIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionFirst">Hello alex</span>
                        <span className="header__optionSecond">Sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionFirst">Returns</span>
                        <span className="header__optionSecond">Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionFirst">Your</span>
                        <span className="header__optionSecond">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__optionBasket" />
                        <span className="header__optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
