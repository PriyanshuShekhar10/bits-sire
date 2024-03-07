import React from "react";
import PropTypes from "prop-types";
import "./DirectorsList.css"; // Ensure this path matches your actual CSS file

const DirectorCard = ({ name, title, profileUrl, imageSrc, role }) => {
  return (
    <div className="director-member">
      <img
        className="director-member__image"
        src={imageSrc}
        alt={`Profile of ${name}`}
      />
      <h3 className="director-member__name">{name}</h3>
      <p className="director-member__title">{title}</p>
      <p className="director-member__role">{role}</p>
    </div>
  );
};

DirectorCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

const DirectorsList = ({ directors }) => {
  return (
    <div className="director-grid">
      {directors.map((director) => (
        <DirectorCard key={director.id} {...director} />
      ))}
    </div>
  );
};

DirectorsList.propTypes = {
  directors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      profileUrl: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DirectorsList;
