import { useState } from 'react';
import Card from './Card';
import Input from './Input';

export default function Education({ academics, setAcademics }) {
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
    <>
      <Card title="Education">
        {academics.map((education, i) => {
          let isSelected = selectedEducationId === education.id;
          return (
            <div
              className="education"
              key={education.id}
              onClick={() => setSelectedEducationId(education.id)}
            >
              {!isSelected && (
                <h4>
                  {education.school ? education.school : `School ${i + 1}`}
                </h4>
              )}
              {isSelected && (
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
                    setValue={(v) =>
                      setAcademic({ ...education, startDate: v })
                    }
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
                  <button onClick={() => handleDeleteEducation(education.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
        <button onClick={handleAddEducation}>Add education</button>
      </Card>
    </>
  );
}
