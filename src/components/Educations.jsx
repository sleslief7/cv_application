import { useState } from 'react';
import Collapse from './Collapse.jsx';
import Input from './Input.jsx';

export default function Educations({ academics, setAcademics }) {
  const [openId, setOpenId] = useState(null);
  const [selectedEducationId, setSelectedEducationId] = useState(null);

  const setAcademic = (academic) => {
    setAcademics(academics.map((a) => (a.id === academic.id ? academic : a)));
  };

  const handleAddEducation = () => {
    setAcademics((a) => [
      ...a,
      {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setAcademics(academics.filter((a) => a.id !== id));
  };

  return (
    <Collapse
      id="education"
      header="Education"
      selectedId={openId}
      setSelectedId={setOpenId}
      bigHeader
    >
      {academics.map((education, i) => {
        return (
          <Collapse
            key={education.id}
            id={education.id}
            header={education.school || `School ${i + 1}`}
            selectedId={selectedEducationId}
            setSelectedId={setSelectedEducationId}
          >
            <Education
              education={education}
              setAcademic={setAcademic}
              handleDeleteEducation={handleDeleteEducation}
            />
          </Collapse>
        );
      })}
      <button className="add-btn" onClick={handleAddEducation}>
        Add education
      </button>
    </Collapse>
  );
}

function Education({ education, setAcademic, handleDeleteEducation }) {
  return (
    <>
      <Input
        label="School"
        id={crypto.randomUUID()}
        value={education.school}
        setValue={(v) => setAcademic({ ...education, school: v })}
      />
      <Input
        label="Degree"
        id={crypto.randomUUID()}
        value={education.degree}
        setValue={(v) => setAcademic({ ...education, degree: v })}
      />
      <Input
        label="Start Date"
        id={crypto.randomUUID()}
        value={education.startDate}
        setValue={(v) => setAcademic({ ...education, startDate: v })}
      />
      <Input
        label="End Date"
        id={crypto.randomUUID()}
        value={education.endDate}
        setValue={(v) => setAcademic({ ...education, endDate: v })}
      />
      <Input
        label="Location"
        id={crypto.randomUUID()}
        value={education.location}
        setValue={(v) => setAcademic({ ...education, location: v })}
      />
      <button
        className="delete-btn"
        onClick={() => handleDeleteEducation(education.id)}
      >
        Delete
      </button>
    </>
  );
}
