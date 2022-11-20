import React from "react";
import PropTypes from "prop-types";

function Item({ id, img, name, provinsi, desc, url }) {
  return (
    <div className="card" key={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{provinsi}</p>
        <p className="card-text"> {desc}</p>
        <a href={url} className="btn btn-secondary">
          Show more
        </a>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  provinsi: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  url: PropTypes.string,
};

export default Item;
