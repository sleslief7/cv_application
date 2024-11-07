import Input from './Input.jsx';
import Collapse from './Collapse.jsx';
import { useState } from 'react';

export default function Experiences({ experiences, setExperiences }) {
  const [openId, setOpenId] = useState('experiences');
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
    <Collapse
      id="experiences"
      header="Experiences"
      selectedId={openId}
      setSelectedId={setOpenId}
      bigHeader
    >
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
      <button className="add-btn" onClick={handleAddExperience}>
        Add experience
      </button>
    </Collapse>
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
      <Input
        label="Location"
        id={`${experience.id}-location`}
        value={experience.location}
        setValue={(v) => setExperience({ ...experience, location: v })}
      />
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
      <button
        className="delete-btn"
        onClick={() => handleDeleteExperience(experience.id)}
      >
        Delete
      </button>
    </>
  );
}
