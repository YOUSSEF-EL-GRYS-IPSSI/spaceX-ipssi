import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "@tremor/react";
import { BsWikipedia } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';
import {  } from './CrewDetails';
import css from '../css/style.css';

const CrewList = () => {
  const [crewMembers, setCrewMembers] = useState([]);

  useEffect(() => {
    const fetchCrewMembers = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        setCrewMembers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des membres d\'équipage:', error);
      }
    };

    fetchCrewMembers();
  }, []);

  return (
    <div className='container'>
      {crewMembers.map(member => (
        <div className='max-w-xs mx-auto member' key={member.id}>
          <h2>{member.name}</h2>
          <p>Agency: {member.agency}</p>
          <img src={member.image} alt={member.name} />

          <div className='global-btn'>
          <a href={member.wikipedia} target="_blank" rel="noopener noreferrer">
            <Button className='btn-wiki' icon={BsWikipedia}> Wikipedia</Button>
          </a>
          <Link to={`/CrewDetail/${member.id}`}>
            <Button icon={CgDetailsMore}>Details</Button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewList;
