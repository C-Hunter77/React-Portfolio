import React from 'react';
import Project from '../components/Project';

<div style={{ margin: '2rem', color: 'white' }}>
  <h3>🔎 Image sanity check:</h3>
  <p>
    park1.png: <img src="/images/park1.png" alt="park1 test" width={150} /><br/>
    employee1.png: <img src="/images/employee1.png" alt="employee1 test" width={150} /><br/>
    weather1.png: <img src="/images/weather1.png" alt="weather1 test" width={150} />
  </p>
</div>

const projects = [
  {
    title: 'Parks & Weatherization',
    description:
      'A full-stack app to help users find national parks and view current weather and forecasts.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'OpenWeather API'],
    github: 'https://github.com/C-Hunter77/Parks-and-Weatherization',
    deployed: 'https://parks-and-weatherization.onrender.com/',
    image: '/images/park1.png',    
    height: '300px',
  },
  {
    title: 'Employee Management CLI',
    description:
      'Command-line interface for managing departments, roles, and employees using a PostgreSQL database.',
    technologies: ['Node.js', 'PostgreSQL', 'Inquirer'],
    github: 'https://github.com/C-Hunter77/Employee-Management-Application',
    deployed:
      'https://drive.google.com/file/d/1bWNnB2fM7Rx4yW5qmevZWy8q8xs9DcWw/view',
    image: '/images/employee1.png',  
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather forecast dashboard app that displays current conditions and a 5-day forecast.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    github: 'https://github.com/C-Hunter77/weather-dashboard-challenge',
    deployed: 'https://weather-dashboard-challenge-3xe4.onrender.com',
    image: '/images/weather1.png',
    height: '300px',
  },
];


export default function Portfolio() {
  return (
    <section className="portfolio container">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((p, i) => <Project key={i} {...p} />)}
      </div>
    </section>
  );
}
