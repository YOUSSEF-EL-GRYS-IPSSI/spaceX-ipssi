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
    <div className="rocket-card">
      <h2 className="rocket-card__name">{name}</h2>
      <p className="rocket-card__description">{description}</p>
      <p>
        <strong>Hauteur :</strong> {height.meters} mètres / {height.feet} pieds
      </p>
      <p>
        <strong>Diamètre :</strong> {diameter.meters} mètres / {diameter.feet} pieds
      </p>
      <p>
        <strong>Masse :</strong> {mass.kg} kg / {mass.lb} lb
      </p>
      <p>
        <strong>Premier vol :</strong> {first_flight}
      </p>
      <p>
        <strong>Pays :</strong> {country}
      </p>
      <p>
        <strong>Compagnie :</strong> {company}
      </p>
      <div className='img-spacex'>
      {flickr_images.map((image) => (
        <img
          key={image}
          src={image}
          alt="Rockets"
          className="rocket-card__image"
        />
      ))}
      </div>
    </div>
  );
  
};

export default RocketDetails;
