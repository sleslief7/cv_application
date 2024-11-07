export default function Resume({ academics, experiences, personal }) {
  return (
    <div id="resume">
      <div className="personal-info">
        <h1 className="resume-name">{personal.name}</h1>
        <div className="contact-info">
          <span className="resume-email">
            {personal.name && <i className="fa-solid fa-envelope"></i>}{' '}
            {personal.email}
          </span>
          <span className="resume-phone-number">
            {personal.name && <i className="fa-solid fa-phone"></i>}{' '}
            {personal.phoneNumber}
          </span>
          <span className="resume-address">
            {personal.name && <i className="fa-solid fa-location-dot"></i>}{' '}
            {personal.address}
          </span>
        </div>
      </div>
      <div className="education-section">
        <h3 className="section-header">Education</h3>
        {academics.map((section) => (
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
        {experiences.map((section) => (
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
        <p className="date">
          {startDate && `${startDate} - ${endDate || 'Present'}`}
        </p>
        <p className="location">{location}</p>
      </div>
      <div className="description">
        <div className="description-header-and-small-description">
          <p className="description-header">
            <strong>{descriptionHeader}</strong>
          </p>
          <p className="small-description">{smallDescription}</p>
        </div>

        {descriptionText && (
          <p className="description-text">{descriptionText}</p>
        )}
      </div>
    </div>
  );
}
