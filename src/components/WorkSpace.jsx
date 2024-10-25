import Card from './Card';
import Educations from './Educations';
import Experience from './Experiences';
import Personal from './Personal';
import { exampleData } from '../assets/exampleData';

export default function Workspace(props) {
  return (
    <div id="workspace">
      <Card>
        <p
          id="clear-resume"
          onClick={() =>
            handleClearResume(
              props.setExperiences,
              props.setAcademics,
              props.setPersonal
            )
          }
        >
          <i className="fa-solid fa-trash-can"></i> Clear Resume
        </p>
        <button id="load-example" onClick={handleResumeLoadExample}>
          Load Example
        </button>
      </Card>
      <Personal personal={props.personal} setPersonal={props.setPersonal} />
      <Educations
        academics={props.academics}
        setAcademics={props.setAcademics}
      />
      <Experience
        experiences={props.experiences}
        setExperiences={props.setExperiences}
      />
    </div>
  );
}

function handleClearResume(setExperiences, setAcademics, setPersonal) {
  const experiences = [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      id: '',
    },
  ];

  const academics = [
    {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      id: '',
    },
  ];
  const personal = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  };
  setExperiences(experiences);
  setAcademics(academics);
  setPersonal(personal);
}

function handleResumeLoadExample() {}
