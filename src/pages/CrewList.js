import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from '../css/style.css';
import { Card } from "@tremor/react";
import { Flex } from "@tremor/react";
import { Button } from "@tremor/react";
import {BsWikipedia} from 'react-icons/bs'

const CrewList = () => {
  const [crewMembers, setCrewMembers] = useState([]);

  useEffect(() => {
    const fetchCrewMembers = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        setCrewMembers(response.data);
      } catch (error) {
        console.error('Api est pas bien configuré:', error);
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
          <a   id='btn' href={member.wikipedia} target="_blank" rel="noopener noreferrer">
            <Button className='xl btn-wiki' icon={BsWikipedia}> Wikipedia</Button>
            
          </a>
        </div>
      ))}
    </div>
  );
};

export default CrewList;
