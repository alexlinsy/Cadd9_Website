import React from 'react';
import TeamMembers from '../../components/elements/TeamMembers';
import {teamMembers} from '../../data/team-members';
import '../../styles/views/about.scss';

const TeamsContainer = () => {
  return (
    <div className="about-container px-10">
      <TeamMembers teams={teamMembers} />
    </div>
  );
};

export default TeamsContainer;
