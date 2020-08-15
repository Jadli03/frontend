import React, { useState, useEffect } from 'react';
import Layout from './Layout';
//import { getProducts } from './apiCore';
//import Card from './Card';

const Home = () => {
    //  const [ setProductsBySell] = useState([]);
    //  const [setProductsByArrival] = useState([]);
    //  const [setError] = useState(false);

    // const loadProductsBySell = () => {
    //     getProducts('sold').then(data => {
    //         if (data.error) {
    //             setError(data.error);
    //         } else {
    //             setProductsBySell(data);
    //         }
    //     });
    // };

    // const loadProductsByArrival = () => {
    //     getProducts('createdAt').then(data => {
    //         console.log(data);
    //         if (data.error) {
    //             setError(data.error);
    //         } else {
    //             setProductsByArrival(data);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     loadProductsByArrival();
    //     loadProductsBySell();
    // }, []);

    return (
        <Layout
            title="Home page"
            description="React E-commerce App"
            className="container-fluid"
        >
        </Layout>
    );
};

export default Home;