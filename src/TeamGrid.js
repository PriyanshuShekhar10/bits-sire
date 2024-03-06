// TeamGrid.js

import React from "react";
import TeamMember from "./TeamMember";

const TeamGrid = ({ teamMembers }) => {
  return (
    <div className="team-grid">
      {teamMembers.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  );
};

export default TeamGrid;
