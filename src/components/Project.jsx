import React from 'react';

export default function Project({
  title,
  description,
  technologies,
  github,
  deployed,
  image,
  height,
}) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: height || '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    color: 'white',
  };

  return (
    <div className="project" style={style}>
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>Technologies:</strong> {technologies.join(', ')}
        </p>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <a href={deployed} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </p>
      </div>
    </div>
  );
}
