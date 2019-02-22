import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((c, index) => (
        <Card key={index} headline={c.headline} img={c.img} author={c.author} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
