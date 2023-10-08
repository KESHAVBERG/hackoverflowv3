import React from 'react';
import './TeamsCard.css';
import {FaInstagram} from 'react-icons/fa'

const TeamsCard = (props) => {
  
  return (
    <>
        <div className="carousel_item">
          <img
            className="carousel-item__img"
            src={require(`../../../images/teams/${props.class}/member${props.index}.webp`)}
            alt="member"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">{props.name}</h5>
            <h6 className="carousel-item__details--subtitle">{props.year} year CSE</h6>
            <FaInstagram></FaInstagram>
          </div>
        </div>
    </>
  );
}

export default TeamsCard;
