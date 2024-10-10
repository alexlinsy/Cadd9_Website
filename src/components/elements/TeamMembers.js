import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import ScrollAnimation from "react-animate-on-scroll";
import HeaderSection from "./HeaderSection";

import useContentful from "../../hooks/useContentful";
import "../../styles/structure/message.scss";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  const { getTeamMembers } = useContentful();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const members = await getTeamMembers();
        setLoading(false);
        members.sort((m1, m2) => m1.ordering - m2.ordering);
        setMembers(members);
      } catch (err) {
        setLoading(false);
        setError("加载数据失败");
      }
    };

    fetchData();
  }, []);

  return loading ? ( // Display loading state
    <p className="message">加载中...</p>
  ) : error ? ( // Display error message
    <p className="message">{error}</p>
  ) : (
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
