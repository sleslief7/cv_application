import Input from './Input';
import Card from './Card';

export default function Experience({ experiences, setExperiences }) {
  return (
    <Card title="Experiences">
      {experiences.map((experience) => {
        return (
          <>
            <Input
              label="Company Name"
              id={crypto.randomUUID()}
              value={experience.company}
              setValue={(v) => setExperiences({ ...experience, company: v })}
            />
            <Input
              label="Position Title"
              id={crypto.randomUUID()}
              value={experience.position}
              setValue={(v) => setExperiences({ ...experience, position: v })}
            />
            <div className="dates">
              <Input
                label="Start Date"
                id={crypto.randomUUID()}
                value={experience.startDate}
                setValue={(v) =>
                  setExperiences({ ...experience, startDate: v })
                }
              />
              <Input
                label="End Date"
                id={crypto.randomUUID()}
                value={experience.endDate}
                setValue={(v) => setExperiences({ ...experience, endDate: v })}
              />
            </div>
            <Input
              label="Location"
              id={crypto.randomUUID()}
              value={experience.location}
              setValue={(v) => setExperiences({ ...experience, location: v })}
            />
            <div>
              <label>Description</label>
              <textarea
                id={crypto.randomUUID()}
                name="description"
                maxLength={300}
              />
            </div>
          </>
        );
      })}
    </Card>
  );
}
