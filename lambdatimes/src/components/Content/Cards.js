import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/

      cards.map((c, index) => (
        <Card key={index} headline={c.headline} img={c.img} author={c.author} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

// Cards.propType = {
//   cards: PropTypes.arrayof(
//     PropTypes.shape({
//       headline: PropTypes.string,
//       img: PropTypes.string,
//       author: PropTypes.string
//     })
//   )
// };

export default Cards;
