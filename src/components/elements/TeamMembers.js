import React from 'react';
import MemberCard from './MemberCard';
import ScrollAnimation from 'react-animate-on-scroll';

const TeamMembers = ({teams}) => {
  const {header} = teams;
  const {members} = teams;
  return (
    <ScrollAnimation animateIn="fadeIn" duration={5} className="pt-2">
      <div className="py-2 border-bottom">
        <p className="f-32 bold text-center font-heading">{header}</p>
      </div>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={5}
        className="py-5 flex flex-wrap flex-space-between"
      >
        {members.map((member, index) => (
          <MemberCard memberInfo={member} key={index} />
        ))}
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default TeamMembers;