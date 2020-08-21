import React from 'react';

const Footer = () => {
    return(
        
        <div className="footer-section">
			<div className="container ">
				<div className="footer-grids">
					<div className="col-md-3 footer-grid">
					<h4>Pages</h4>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/shop">Shop</a></li>
						<li><a href="/signin">Signin</a></li>
					</ul>
				</div>
					<div className="col-md-4 footer-grid">
					<h4>Brands</h4>
					<ul>
						<li><a href="/shop">L'OCEAN</a></li>
						<li><a href="/shop">EYENLIP</a></li>
					</ul>
					</div>
					
					<div className="col-md-5 footer-grid1">
						<h4 >Contact Us</h4>
					<div className="social-icons">
                    <a href="https://facebook.com/flawinabeauty/" className="nav-item nav-link"><i className="fa fa-facebook"></i></a>
                    <a href="/" className="nav-item nav-link"><i className="fa fa-twitter"></i></a>
                    <a href="/" className="nav-item nav-link"><i className="fa fa-youtube"></i></a>
                    <a href="https://instagram.com/flawinabeauty?igshid=c4ubv0xllceo" className="nav-item nav-link"><i className="fa fa-instagram"></i></a>
                    <a href="https://wa.me/919899822063?text=I'm%20interested%20in%20buying%20your%20product" className="nav-item nav-link"><i className="fa fa-whatsapp"></i></a>
					</div>
					<p>Phone no. +918882444930, +919899822068</p>
					<p>E-mail :  Naina.thapa55@gmail.com</p>
                    <p>&copy; FlawinaBeauty. All rights reserved </p>
					</div>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
    );
};

export default Footer;