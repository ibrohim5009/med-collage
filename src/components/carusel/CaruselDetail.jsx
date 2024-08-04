// NewsDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const newsItems = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'News Item 1',
        description: 'Description for news item 1.',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'News Item 2',
        description: 'Description for news item 2.',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'News Item 3',
        description: 'Description for news item 3.',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/150',
        title: 'News Item 4',
        description: 'Description for news item 4.',
    }
];

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const newsItem = newsItems.find(item => item.id === parseInt(id));

    if (!newsItem) {
        return <div style={styles.notFound}>News item not found</div>;
    }

    return (
        <div style={styles.container}>
            <button style={styles.backButton} onClick={() => navigate(-1)}>← Back</button>
            <img src={newsItem.image} alt={newsItem.title} style={styles.image} />
            <h1 style={styles.title}>{newsItem.title}</h1>
            <p style={styles.description}>{newsItem.description}</p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6'
    },
    backButton: {
        display: 'inline-block',
        padding: '10px 15px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        marginBottom: '20px'
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px'
    },
    title: {
        fontSize: '2rem',
        marginBottom: '10px'
    },
    description: {
        fontSize: '1.2rem',
        color: 'gray',
        marginBottom: '20px'
    },
    notFound: {
        textAlign: 'center',
        padding: '20px',
        fontSize: '1.5rem',
        color: 'red'
    }
};

export default NewsDetail;