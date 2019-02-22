import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ headline, img, author }) => {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt="cards" />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propType = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
