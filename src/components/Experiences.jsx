import Input from './Input';
import Card from './Card';
import Collapse from './Collapse';
import { useState } from 'react';

export default function Experiences({ experiences, setExperiences }) {
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);

  const setExperience = (experience) => {
    setExperiences(
      experiences.map((e) => (e.id === experience.id ? experience : e))
    );
  };

  const handleAddExperience = () => {
    setExperiences((e) => [
      ...e,
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  return (
    <Card title="Experiences">
      {experiences.map((experience, i) => {
        return (
          <Collapse
            key={experience.id}
            id={experience.id}
            header={experience.company || `Company ${i + 1}`}
            selectedId={selectedExperienceId}
            setSelectedId={setSelectedExperienceId}
          >
            <Experience
              experience={experience}
              setExperience={setExperience}
              handleDeleteExperience={handleDeleteExperience}
            />
          </Collapse>
        );
      })}
      <button onClick={handleAddExperience}>Add experience</button>
    </Card>
  );
}

function Experience({ experience, setExperience, handleDeleteExperience }) {
  return (
    <>
      <Input
        label="Company Name"
        id={`${experience.id}-company-name`}
        value={experience.company}
        setValue={(v) => setExperience({ ...experience, company: v })}
      />
      <Input
        label="Position Title"
        id={`${experience.id}-position-title`}
        value={experience.position}
        setValue={(v) => setExperience({ ...experience, position: v })}
      />
      <div className="dates">
        <Input
          label="Start Date"
          id={`${experience.id}-start-date`}
          value={experience.startDate}
          setValue={(v) => setExperience({ ...experience, startDate: v })}
        />
        <Input
          label="End Date"
          id={`${experience.id}-end-date`}
          value={experience.endDate}
          setValue={(v) => setExperience({ ...experience, endDate: v })}
        />
      </div>
      <Input
        label="Location"
        id={`${experience.id}-location`}
        value={experience.location}
        setValue={(v) => setExperience({ ...experience, location: v })}
      />
      <div>
        <label htmlFor={`${experience.id}-description`}>Description</label>
        <textarea
          id={`${experience.id}-description`}
          name="description"
          maxLength={300}
          cols={40}
          rows={5}
          value={experience.description}
          onChange={(e) =>
            setExperience({ ...experience, description: e.target.value })
          }
        />
      </div>
      <button onClick={(e) => handleDeleteExperience(experience.id)}>
        Delete
      </button>
    </>
  );
}
