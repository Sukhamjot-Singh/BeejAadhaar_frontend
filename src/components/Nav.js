import React from "react";
import '../App.css';



function Nav() {

    return (

        <nav className="nav-bar" role="navigation">
            <div className="wrapper">
                {/*Removing search bar from Menu items */}
                <ul>
                    <li className="site-nav--active">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="site-nav--has-dropdown" aria-haspopup="true">
                        <a href="collections.html">
                            Brands
                            <span className="icon-fallback-text">
        <span className="icon icon-arrow-down" aria-hidden="true"></span>
      </span>
                        </a></li>
                    <li className="site-nav--has-dropdown" aria-haspopup="true">
                        <a href="collections/seeds-online.html">
                            Seeds
                            <span className="icon-fallback-text">
        <span className="icon icon-arrow-down" aria-hidden="true"></span>
      </span>
                        </a></li>
                    <li>
                        <a href="collections/crop-protection.html">Crop Protection</a>
                    </li>
                    <li>
                        <a href="collections/plant-nutrition.html">CROP NUTRITION</a>
                    </li>
                    <li>
                        <a href="collections/agri-implements.html">Machinery</a>
                    </li>
                    <li>
                        <a href="collections/coffee-plantation-inputs.html">Segments</a>
                    </li>
                    <li>
                        <a href="pages/adani-capital.html">Services & Loans</a>
                    </li>
                    <li>
                        <a href="pages/agri-tip.html">Knowledge </a>
                    </li>
                </ul>
                <ul className="site-nav" id="accessibleNav">
                    <li className="customer-navlink large--hide"><a href="account/login.html" id="customer_login_link"
                                                                    className="bighaat-signin">Sign in</a></li>
                    <li className="customer-navlink large--hide"><a href="pages/start-selling-with-us.html"
                                                                    style={{color: '#4b42f5', fontSize: 12}}><u>Sell on
                        BeejAadhar</u></a></li>
                </ul>

            </div>
        </nav>
    );
}
export default Nav;