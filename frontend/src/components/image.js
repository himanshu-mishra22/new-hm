import React from 'react';

const BootstrapImage = props => {
    const { name, className = '', style, alt = '', ...rest } = props;

    return (
        <img
            src={`${process.env.PUBLIC_URL}/images/${name}`}
            className={`img-fluid ${className}`} // Bootstrap class for responsive images
            style={{ objectFit: 'cover', ...style }}
            alt={alt}
            {...rest}
        />
    );
};

export default BootstrapImage;
