import React from 'react';
import MemberCard from './MemberCard';
import ScrollAnimation from 'react-animate-on-scroll';

const TeamMembers = ({teams}) => {
  const {header} = teams;
  const {members} = teams;
  return (
    <ScrollAnimation animateIn="fadeIn" duration={3} className="pt-2">
      <div className="py-8 border-bottom">
        <p className="bold text-center font-heading" style={{fontSize: '46px'}}>{header}</p>
      </div>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="py-5 flex flex-wrap flex-space-between"
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
