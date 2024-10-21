import React from "react";
import TeamMembers from "../../components/elements/TeamMembers";
import { Helmet } from "react-helmet-async";

import "../../styles/views/about.scss";

const TeamsContainer = () => {
  return (
    <div className="about-container px-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cadd9 团队介绍</title>
        <meta name="description" content="Cadd9 团队介绍" />
      </Helmet>
      <TeamMembers />
    </div>
  );
};

export default TeamsContainer;
