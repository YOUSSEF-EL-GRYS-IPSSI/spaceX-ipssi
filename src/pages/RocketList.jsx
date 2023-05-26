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
      <h1>{name}</h1>
      <p>Hauteur: {height.meters} m</p>
      <p>Diamètre: {diameter.meters} m</p>
      <p>Masse: {mass.kg} kg</p>
      <p>Pays d'origine: {country}</p>
      <p>Date du premier vol: {first_flight}</p>
      <p>Entreprise associée: {company}</p>
      <p>Description: {description}</p>
      {flickr_images.map((image) => (
        <img key={image} src={image} alt="Rockets" style={{ width: '200px' }} />
      ))}
      <Link to={`/rocketDetails/${id}`}>Voir les détails</Link>
    </div>
  );
};

export default RocketList;
