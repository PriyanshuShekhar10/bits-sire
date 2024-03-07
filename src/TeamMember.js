import React from "react";

const TeamMember = ({ name, title, imageSrc, profileUrl, role }) => {
  // Check if the title contains a pipe '|' character and split accordingly
  const titleContainsPipe = title.includes("|");
  const titleParts = titleContainsPipe ? title.split(/\|\s*(.+)/) : [title];

  return (
    <div className="team-member">
      <img
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="team-member__image"
      />
      <h3 className="team-member__name">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          {name}
        </a>
      </h3>
      <p className="team-member__title">
        {titleParts[0]}
        {/* Render the second part with a line break if a pipe '|' was present in the title */}
        {titleContainsPipe && titleParts[1] && (
          <>
            <br />
            {titleParts[1]}
          </>
        )}
      </p>
      <p className="team-member__title2">{role}</p>
    </div>
  );
};

export default TeamMember;
