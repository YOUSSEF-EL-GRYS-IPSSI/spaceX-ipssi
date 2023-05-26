import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RocketList = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.log('Error fetching rockets:', error);
      }
    };

    fetchRockets();
  }, []);

  return (
    <section className="container-fuse">
      <h2>Différentes versions de fusées SpaceX</h2>
      {rockets.map((rocket) => (
        <Rockets key={rocket.id} rocket={rocket} />
      ))}
    </section>
  );
};

const Rockets = ({ rocket }) => {
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
    id,
  } = rocket;


 

  return (
    <div className="container-global">
      <h1 className="rocket-card__title">{name}</h1>
      <div className="rocket-card__info">
        <p className="rocket-card__detail">Hauteur: {height.meters} m</p>
        <p className="rocket-card__detail">Diamètre: {diameter.meters} m</p>
        <p className="rocket-card__detail">Masse: {mass.kg} kg</p>
        <p className="rocket-card__detail">Pays d'origine: {country}</p>
        <p className="rocket-card__detail">Date du premier vol: {first_flight}</p>
        <p className="rocket-card__detail">Entreprise associée: {company}</p>
      </div>
      <p className="rocket-card__description">Description: {description}</p>
      <div className='img-spacex'>
      {flickr_images.map((image) => (
        <img key={image} src={image} alt="Rockets" className="rocket-card__image" />
      ))}
      </div>
      <Link to={`/rocketDetails/${id}`} className="rocket-card__link">Voir les détails</Link>
    </div>
  );
  
  
};

export default RocketList;
