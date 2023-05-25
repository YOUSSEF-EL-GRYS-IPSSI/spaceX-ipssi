import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@tremor/react';
import { BsWikipedia } from 'react-icons/bs';

const CrewDetails = () => {
  const { id } = useParams();
  const [crewMember, setCrewMember] = useState(null);

  useEffect(() => {
    const fetchCrewMember = async () => {
      try {
        const response = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`);
        setCrewMember(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du membre d\'équipage:', error);
      }
    };

    fetchCrewMember();
  }, [id]);

  if (!crewMember) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container">
      <h2>{crewMember.name}</h2>
      <p>Agency: {crewMember.agency}</p>
      <img src={crewMember.image} alt={crewMember.name} />
      <a href={crewMember.wikipedia} target="_blank" rel="noopener noreferrer">
        <Button className="btn-wiki" icon={BsWikipedia}>
          Wikipedia
        </Button>
      </a>
    </div>
  );
};

export default CrewDetails;
