import React from "react";
import defaultImage from "./../images/room-1.jpeg";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Rooms from "../pages/Rooms";
function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt={name} />
        <div className="price-top">
          <h6>₹{price}</h6>
          <p>per day</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Room.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
  }),
};
export default Room;
