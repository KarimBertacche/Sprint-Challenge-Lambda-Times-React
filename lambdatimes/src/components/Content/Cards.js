import React from 'react';
import Card from './Card';
import pt from 'prop-types';
import uuid from 'uuid';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {
        props.cards.map(card => {
          return (
            <Card 
              key={uuid()}
              card={card}/>
          );
        })
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  cardData: pt.arrayOf(pt.shape({
    headline: pt.string.isRequired,
    tab: pt.string.isRequired,
    img: pt.string.isRequired,
    author: pt.string.isRequired, 
  }).isRequired)
}

export default Cards;