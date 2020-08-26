import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import img4 from '../images/img4.jpg';

const About = () => {
    return(
        <div>
            <div id="main">
				<div className="inner">
                    <Menu />
					<div className="image fit">
						<img src={img4} alt="" />
					</div>
					<header>
						<h1>About</h1>
					</header>
                   <p> Flawina Beauty ­is a multi brand retail for K-beauty products, Skincare and Makeup selected and customised for Indian Skin. Founded in 2018 by Naina Thapa, we aim to provide unadulterated Korean Beauty for India, customised to match up with the diverse types of climatic conditions and skin types.</p>
				</div>
			</div>

		<Footer />
        </div>

    );
};



export default About;