import { exampleData } from '../assets/exampleData';

export default function Resume({
  academics = exampleData.academics,
  experiences = exampleData.experiences,
  personal = exampleData.personal,
}) {
  return (
    <div className="resume">
      <div className="personal-info">
        <h1 className="resume-name">{personal.name}</h1>
        <div className="contact-info">
          <span className="resume-email">
            <i className="fa-solid fa-envelope"></i> {personal.email}
          </span>
          <span className="resume-phone-number">
            <i className="fa-solid fa-phone"></i> {personal.phoneNumber}
          </span>
          <span className="resume-address">
            <i className="fa-solid fa-location-dot"></i> {personal.address}
          </span>
        </div>
      </div>
      <div className="education-section">
        <h3 className="section-header">Education</h3>
        {academics.map((section, i) => (
          <Section
            key={section.id}
            id={section.id}
            startDate={section.startDate}
            endDate={section.endDate}
            location={section.location}
            descriptionHeader={section.school}
            smallDescription={section.degree}
            descriptionText={null}
          />
        ))}
      </div>
      <div className="experience-section">
        <h3 className="section-header">Professional Experience</h3>
        {experiences.map((section, i) => (
          <Section
            key={section.id}
            id={section.id}
            startDate={section.startDate}
            endDate={section.endDate}
            location={section.location}
            descriptionHeader={section.company}
            smallDescription={section.position}
            descriptionText={section.description}
          />
        ))}
      </div>
    </div>
  );
}

function Section({
  startDate,
  endDate,
  location,
  descriptionHeader,
  smallDescription,
  descriptionText,
}) {
  return (
    <div className="section-description">
      <div className="date-and-location">
        <p>
          {startDate} - {endDate ? endDate : 'present'}
        </p>
        <p>{location}</p>
      </div>
      <div className="description">
        <p className="description-header">
          <strong>{descriptionHeader}</strong>
        </p>
        <p className="small-description">{smallDescription}</p>
        {descriptionText && (
          <p className="description-text">{descriptionText}</p>
        )}
      </div>
    </div>
  );
}
