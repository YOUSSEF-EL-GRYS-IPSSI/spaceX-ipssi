import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

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
    cost_per_launch,
  } = rocket;

  const chartData = [
    {
      label: 'Hauteur',
      value: height.meters,
    },
    {
      label: 'Diamètre',
      value: diameter.meters,
    },
    {
      label: 'Masse',
      value: mass.kg,
    },
    {
      label: 'Prix de lancement',
      value: cost_per_launch,
    },
  ];

  const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number);
  };

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
      <p>
        <strong>Prix de lancement:</strong> {cost_per_launch} $
      </p>

      <div className="img-spacex">
        {flickr_images.map((image) => (
          <img key={image} src={image} alt="Rockets" className="rocket-card__image" />
        ))}
      </div>

      <Card>
        <Title>Rocket Details</Title>
        <Subtitle>Comparaison de la hauteur, du diamètre et de la masse</Subtitle>
        <BarChart
          className="mt-6"
          data={chartData}
          index="label"
          categories={["value"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={100}
        />
      </Card>
    </div>
  );
};

export default RocketDetails;
