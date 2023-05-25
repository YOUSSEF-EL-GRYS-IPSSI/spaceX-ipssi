import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrewList = () => {
  const [crewMembers, setCrewMembers] = useState([]);

  useEffect(() => {
    const fetchCrewMembers = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        setCrewMembers(response.data);
      } catch (error) {
        console.error('Error fetching crew members:', error);
      }
    };

    fetchCrewMembers();
  }, []);

  return (
    <div>
      <h1>Crew Members</h1>
      {crewMembers.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>Agency: {member.agency}</p>
          <img src={member.image} alt={member.name} />
          <a href={member.wikipedia} target="_blank" rel="noopener noreferrer">
            Wikipedia
          </a>
        </div>
      ))}
    </div>
  );
};

export default CrewList;
