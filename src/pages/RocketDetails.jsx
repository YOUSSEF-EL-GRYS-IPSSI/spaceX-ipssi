import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RocketDetails = () => {
  const { id } = useParams();
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    const fetchRocketDetails = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
        const data = await response.json();
        setRocket(data);
      } catch (error) {
        console.log('Erreur de fetch... :', error);
      }
    };

    fetchRocketDetails();
  }, [id]);

  if (!rocket) {
    return <div>Chargement...</div>;
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
      {flickr_images.map((image) => (
        <img key={image} src={image} alt="Rockets" style={{ width: '200px' }} />
      ))}
    </div>
  );
};

export default RocketDetails;
