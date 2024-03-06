// TeamMember.js
import React from "react";

const TeamMember = ({ name, title, imageSrc }) => {
  return (
    <div className="team-member">
      <img
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="team-member__image"
      />
      <h3 className="team-member__name">{name}</h3>
      <p className="team-member__title">{title}</p>
    </div>
  );
};

export default TeamMember;
