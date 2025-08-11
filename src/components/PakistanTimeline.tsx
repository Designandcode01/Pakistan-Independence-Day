import React from 'react';
import './Timeline.css'; // You'll need to create this CSS file

const PakistanTimeline = () => {
  const events = [
    {
      year: '1857',
      title: 'War of Independence',
      description: 'First organized resistance against British rule in the subcontinent.'
    },
    {
      year: '1906',
      title: 'Formation of All India Muslim League',
      description: 'Political party established to protect Muslim rights in British India.'
    },
    {
      year: '1930',
      title: 'Allama Iqbal\'s Presidential Address',
      description: 'Iqbal proposed the idea of a separate Muslim state in northwest India.'
    },
    {
      year: '1940',
      title: 'Lahore Resolution',
      description: 'Muslim League formally demanded independent states for Muslims.'
    },
    {
      year: '1947',
      title: 'Independence Achieved',
      description: 'Pakistan gained independence on August 14, 1947.'
    },
    {
      year: '1956',
      title: 'First Constitution',
      description: 'Pakistan became the Islamic Republic of Pakistan.'
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Pakistan&#39;s Journey to Independence</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PakistanTimeline;