import Card from './Card';
import Input from './Input';

export default function Education({ academics, setAcademics }) {
  return (
    <Card title="Education">
      {academics.map((education) => {
        return (
          <>
            <Input
              label="School"
              id={crypto.randomUUID()}
              value={education.school}
              setValue={(v) => setAcademics({ ...education, school: v })}
            />
            <Input
              label="Degree"
              id={crypto.randomUUID()}
              value={education.degree}
              setValue={(v) => setAcademics({ ...education, degree: v })}
            />
            <Input
              label="Start Date"
              id={crypto.randomUUID()}
              value={education.startDate}
              setValue={(v) => setAcademics({ ...education, startDate: v })}
            />
            <Input
              label="End Date"
              id={crypto.randomUUID()}
              value={education.endDate}
              setValue={(v) => setAcademics({ ...education, endDate: v })}
            />
            <Input
              label="Location"
              id={crypto.randomUUID()}
              value={education.location}
              setValue={(v) => setAcademics({ ...education, location: v })}
            />
          </>
        );
      })}
    </Card>
  );
}
