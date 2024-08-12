import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Carusel.css';

const Carusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            id: 1,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 1',
            description: 'Description for news item 1.'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 2',
            description: 'Description for news item 2.'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 3',
            description: 'Description for news item 3.'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 4',
            description: 'Description for news item 4.'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 5',
            description: 'Description for news item 5.'
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/300',
            title: 'News Item 6',
            description: 'Description for news item 6.'
        }
    ];

    const groups = [];
    for (let i = 0; i < items.length; i += 3) {
        groups.push(items.slice(i, i + 3));
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + groups.length) % groups.length);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {groups.map((group, index) => (
                    <div className="carousel-slide-group" key={index}>
                        {group.map((item) => (
                            <div className="carousel-slide" key={item.id}>
                                <Link to={`/news/${item.id}`}>
                                    <img src={item.image} alt={item.title} className="carousel-image" />
                                    <div className="carousel-caption">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Carusel;
