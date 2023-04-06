import React from "react";
import '../App.css';



function Header() {
    const BulkOrders={
        font:"HelveticaNeue", fontSize:9,
    }
    const click={color:'#FF6700',font:'Helvetica Neue', fontSize:10 ,}
    // ntserrat", "HelveticaNeue", "Helvetica Neue", sans-serif,}
    return (<div>
        <div id="head-alert" className="info">
            <div className="row" >
                <div className="center headmsg">
                    {/*<marquee width="90%"><p><b> Free Delivery on Orders Above Rs. 499/- </b> | <b>Use CODE : KHARIF3 to get*/}
                    {/*    3% OFF on Minimum purchase of ₹4999/- </b> | <b>Use CODE : KHARIF5 to get 5% OFF on Minimum purchase*/}
                    {/*    of ₹14999/- T&C Apply </b> | <b> Use Code “Sarpan" & get 10% off on All Sarpan Seeds on Purchase*/}
                    {/*    Above Rs. 1000/-</b></p></marquee>*/}
                </div>
            </div>
        </div>

        <header className="site-header" role="banner">
            <div className="wrapper">
                <div className="grid--full">
                    <div className="grid-item large--one-third ">
                        {/*<div className="topcall"><selector data-type="languages" data-id="1329862698"></selector>*/}
                        {/*    <br></br><span style={{ fontSize:9 }}><b>Missed Call To Order: </b></span><b><a href="tel:180030002434"><span >1800-3000-2434</span></a></b><br></br><span style={{BulkOrders}}><b>Bulk Order Inquiries: </b></span><a href="pages/bulk-buyer-form.html"><span style={{click}}><u>Click here</u></span></a>*/}
                        {/*</div>*/}
                    </div>


                    <div className="grid-item large--one-third">
                        <h1 className="header-logo" itemScope itemType="http://schema.org/Organization">
                            <a href="index.html" itemProp="url">
                                <img src="https://play-lh.googleusercontent.com/RnF7W8jBxxbRP_RrPr901iUWo4gFz7mSB-ec_ig2Ea-D6k7pruSb_iVVGGW0xrj8Og" alt="BeejAadhar.com" itemProp="logo"/>
                            </a>
                        </h1>
                    </div>

                    <div className="grid-item large--one-third text-center large--text-right">
                        {/*<form action="search.html" method="get" className="search-bar" role="search">*/}
                        {/*    <input type="hidden" name="type" value="product" />*/}
                        {/*    <input type="search" name="q" value="" placeholder="" aria-label=""/>*/}
                        {/*    <button type="submit" className="search-bar--submit icon-fallback-text">*/}
                        {/*        <span className="icon icon-search" aria-hidden="true"></span>*/}
                        {/*        <span className="fallback-text">Search</span>*/}
                        {/*    </button>*/}
                        {/*</form>*/}

                        <a href="cart.html" className="header-cart-btn cart-toggle">
                            <span className="icon icon-cart"></span>
                            <span id="cartCount" className="hidden-count">0</span>
                        </a>

                        <div className="site-header--text-links">
            <span className="site-header--meta-links medium-down--hide">
               {/*Wishlist for website header  */}
                {/* add playstore image*/}
              {/*  <a href="https://play.google.com/store/apps/details?id=com.BeejAadhar"><img src="googleplay.png" height="100px" width="80px" style={{alignItems:'right'}}/></a>*/}
              {/*                       <p></p>          <a href="#swym-wishlist" className="swym-wishlist"><i aria-hidden="true" focusable="false" role="presentation" className="fa fa-heart" style={{fontSize:10}}>&nbsp;Wishlist</i>*/}
              {/*</a>*/}

                    <span className="site-header--spacer">&nbsp;</span>
                    <a href="account/login.html" id="customer_login_link">Log-in</a>
                    <span className="site-header--spacer">&nbsp;</span>
                    <a href="pages/start-selling-with-us.html" style={{color:'#FF6700', fontSize:11}} >Sell on BeejAadhar</a>
                </span>
                        </div></div>



                </div></div></header></div>
    );
}
export default Header;