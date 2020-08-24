import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Banner from './Banner';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import homeimg from '../images/home-img.jpg';

const Home = () => {
  
    return (
      
        <div>
             <Menu />
             <div className="banner-section mt-4 pt-5">
			<div className="container">
				<div className="banner-grids">
					<div className="col-md-6 banner-grid">
						<h2>FlawinaBeauty</h2>
						<p><b>We believe in your Skinth Sense</b></p>
                        <a href="/shop" className="button"> shop now </a>
					</div>
                 
				<div className="col-md-6 banner-grid1">
						<img src={homeimg} className="img-responsive" alt=""/>
				</div>
			
			</div>
           </div>
           </div>
        <Banner />
            <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel" data-interval="1900">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid w-100" src={img8} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid w-100" src={img9} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid w-100" src={img7} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
        <Footer />
           </div>
        

      
         
    );

};

export default Home;