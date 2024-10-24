import { useState } from 'react';
import Resume from './Resume';
import WorkSpace from './WorkSpace';
import { exampleData } from '../assets/exampleData';
import '../styles/App.css';

export default function App() {
  const [personal, setPersonal] = useState(exampleData.personal);
  const [academics, setAcademics] = useState(exampleData.academics);
  const [experiences, setExperiences] = useState(exampleData.experiences);

  return (
    <div className="app-container">
      <WorkSpace
        personal={personal}
        setPersonal={setPersonal}
        academics={academics}
        setAcademics={setAcademics}
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <Resume
        personal={personal}
        academics={academics}
        experiences={experiences}
      />
    </div>
  );
}
