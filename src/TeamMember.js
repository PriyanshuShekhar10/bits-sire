// TeamMember.js
import React from "react";

const TeamMember = ({ name, title, imageSrc, profileUrl, role }) => {
  return (
    <div className="team-member">
      <img
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="team-member__image"
      />
      <h3 className="team-member__name">
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "none" }}
          href={profileUrl}
        >
          {name}
        </a>
      </h3>
      <p className="team-member__title">{title}</p>
      <p className="team-member__title2">{role}</p>
    </div>
  );
};

export default TeamMember;
