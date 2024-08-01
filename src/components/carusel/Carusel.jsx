import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carusel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const items = [
        {
            image: 'https://via.placeholder.com/150',
            title: 'News Item 1',
            description: 'Description for news item 1.'
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'News Item 2',
            description: 'Description for news item 2.'
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'News Item 3',
            description: 'Description for news item 3.'
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'News Item 4',
            description: 'Description for news item 4.'
        }
    ];

    return (
        <div>
            <Carousel responsive={responsive}   infinite={true} autoPlay={true}>
                {items.map((item, index) => (
                    <div key={index} style={{ padding: '10px' }}>
                        <div style={{ borderRadius: '8px',textAlign:"center", overflow: 'hidden' }}>
                            <img src={item.image} alt={item.title} style={{ width: '90%',height:'300px' }} />
                            <div style={{ padding: '10px' }}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carusel;
