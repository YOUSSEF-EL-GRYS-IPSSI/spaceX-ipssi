import React, { useState, useEffect } from 'react'


const RocketDetails = ({ rocket }) => {
  console.log('hellooooooooo Marooooooooooooooc');
  console.log(rocket);
  if (!rocket) {
    return <div>Loading...</div>;
  }

  const {
    name,
    height,
    diameter,
    mass,
    country,
    first_flight,
    company,
    description,
    flickr_images,
  } = rocket;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Height:</strong> {height.meters} meters / {height.feet} feet
      </p>
      <p>
        <strong>Diameter:</strong> {diameter.meters} meters / {diameter.feet} feet
      </p>
      <p>
        <strong>Mass:</strong> {mass.kg} kg / {mass.lb} lb
      </p>
      <p>
        <strong>First Flight:</strong> {first_flight}
      </p>
      <p>
        <strong>Country:</strong> {country}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Wikipedia:</strong> <a href={rocket.wikipedia}>{rocket.wikipedia}</a>
      </p>
      {flickr_images.map((image) => (
        <img key={image} src={image} alt='Rockets' style={{ width: '200px' }} />
      ))}
    </div>
  );
};

export default RocketDetails;
