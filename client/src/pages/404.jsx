import React from 'react';

const NotFoundPage = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            color: 'black',
        },
        heading: {
            fontSize: '72px',
            margin: '0',
        },
        subheading: {
            fontSize: '24px',
            margin: '0',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.subheading}>Page Not Found</p>
        </div>
    );
};

export default NotFoundPage;