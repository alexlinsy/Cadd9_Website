import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import ScrollAnimation from "react-animate-on-scroll";
import HeaderSection from "./HeaderSection";

import useContentful from "../../hooks/useContentful";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  const { getTeamMembers } = useContentful();

  useEffect(() => {
    getTeamMembers().then((members) => {
      if (members) {
        members.sort((m1, m2) => m1.ordering - m2.ordering);
        console.log(members);
        setMembers(members);
      }
    });
  }, []);
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      duration={3}
      className="pt-2 flex flex-column flex-align-center team-members-container"
    >
      <HeaderSection title={"我们的团队"} borderRequired />
      <ScrollAnimation
        animateIn="fadeIn"
        duration={3}
        className="py-5 flex flex-wrap flex-space-between team-members mt-10"
        style={{ maxWidth: "1590px" }}
      >
        {members.map((member, index) => (
          <MemberCard memberInfo={member} key={index} />
        ))}
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default TeamMembers;
