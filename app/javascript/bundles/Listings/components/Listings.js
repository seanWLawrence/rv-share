import React from "react";
import PropTypes from "prop-types";

// prop types for all listing components
let propTypes = {
  NewListing: {
    href: PropTypes.string.isRequired
  },
  GridListing: {
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price_per_day: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    postal_code: PropTypes.number.isRequired
  },
  PageListing: {
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price_per_day: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    postal_code: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    back_href: PropTypes.string.isRequired,
    rules: PropTypes.string
  }
};

// button to create a new listing
export let NewListing = ({ href }) => {
  return (
    <a
      className="rv-listing__create-new"
      href={href}
      title="Create a new RV listing"
    >
      Create new listing
    </a>
  );
};

// assign prop types to NewListing
NewListing.propTypes = propTypes.NewListing;

// create href based on the id
let getHref = id => {
  return `/listings/${id}`;
};

// individual listing grid component, rendered in the index template
export let GridListing = ({
  image,
  year,
  make,
  model,
  price_per_day,
  city,
  postal_code,
  id
}) => {
  return (
    <div className="rv-listing__grid--wrapper">
      <a href={getHref(id)} title="View listing">
        <img
          className="rv-listing__grid--image"
          src={image}
          alt={`${year} ${make} ${model} for rent near ${city}`}
        />
      </a>
      <a
        className="rv-listing__grid--href_transparent"
        href={getHref(id)}
        title="View listing"
      >
        <h2 className="rv-listing__grid--title">{`${year} ${model}`}</h2>
      </a>
      <strong className="rv-listing__grid--price">${price_per_day}/day</strong>
      <p className="rv-listing__grid--location">
        {`Near ${city}, ${postal_code}`}
      </p>
      <a
        className="rv-listing__grid--href_action"
        href={getHref(id)}
        title="View listing"
      >
        View listing
      </a>
    </div>
  );
};

// assign prop types to Listing
GridListing.propTypes = propTypes.GridListing;

// page listing component, rendered in the show template
export let PageListing = ({
  image,
  year,
  make,
  model,
  price_per_day,
  city,
  postal_code,
  id,
  email,
  description,
  back_href,
  rules
}) => {
  return (
    <div className="rv-listing__page--wrapper">
      <a
        className="rv-listing__page--back-button"
        href={back_href}
        title="Back to listings"
      >
        Back to listings
      </a>
      <h2 className="rv-listing__page--title">{`${year} ${model}`}</h2>
      <img
        className="rv-listing__page--image"
        src={image}
        alt={`${year} ${make} ${model} for rent near ${city}`}
      />
      <strong className="rv-listing__page--price">${price_per_day}/day</strong>
      <p className="rv-listing__page--location">
        {`Near ${city}, ${postal_code}`}
      </p>
      <h3>Description</h3>
      <p className="rv-listing__page--description">{description}</p>
      <h3>Rules</h3>
      <p className="rv-listing__page--rules">{rules}</p>
      <a
        className="rv-listing__page--email"
        href={`/listings/${id}`}
        title="Book now"
      >
        Book now
      </a>
    </div>
  );
};
