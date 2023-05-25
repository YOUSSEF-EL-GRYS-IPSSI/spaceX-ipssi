import React, { useEffect, useState } from 'react';

const RocketDetails = ({ rocketId }) => {
  const [rocket, setRocket] = useState(null);

  useEffect(() => {
    const fetchRocketDetails = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        const data = await response.json();
        setRocket(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de la fusée :', error);
      }
    };

    fetchRocketDetails();
  }, [rocketId]);

  if (!rocket) {
    return <div>Chargement des détails de la fusée...</div>;
  }

  return (
    <div>
      <h2>{rocket.name}</h2>
      <p>Pays d'origine : {rocket.country}</p>
      <p>Date du premier vol : {rocket.first_flight}</p>
      <p>Entreprise associée : {rocket.company}</p>
      <p>Description : {rocket.description}</p>
      <img src={rocket.imageUrl} alt="Image de la fusée" />
    </div>
  );
};

export default RocketDetails;
