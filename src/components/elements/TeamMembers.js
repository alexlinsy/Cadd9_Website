import React from 'react';
import MemberCard from './MemberCard';
import ScrollAnimation from 'react-animate-on-scroll';
import HeaderSection from './HeaderSection';

const TeamMembers = ({teams}) => {
  const {header} = teams;
  const {members} = teams;
  return (
    <ScrollAnimation animateIn="fadeIn" duration={3} className="pt-2 flex flex-column flex-align-center team-members-container">
      <HeaderSection title={header} borderRequired/>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="py-5 flex flex-wrap flex-space-between team-members mt-10"
        style={{maxWidth: '1590px'}}
      >
        {members.map((member, index) => (
          <MemberCard memberInfo={member} key={index} />
        ))}
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default TeamMembers;
