import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img5 from '../images/img5.jpg';
const Banner = () => {
    return (

        <div className="banner-bottom">
		<div className="gallery-cursual">
		<div id="owl-demo" className="owl-carousel text-center">
			<div className="item">
				<img className="lazyOwl" src={img1} alt="name"/>
			</div>
			<div className="item">
				<img className="lazyOwl" src={img2} alt="name"/>
			</div>
			<div className="item">
				<img className="lazyOwl" src={img3} alt="name"/>
			</div>
			<div className="item">
				<img className="lazyOwl" src={img5} alt="name"/>
			</div>
		</div>
        </div>
        </div>
    );
};

export default Banner;