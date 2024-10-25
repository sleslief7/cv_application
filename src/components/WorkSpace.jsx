import Card from './Card';
import Educations from './Educations';
import Experience from './Experiences';
import Personal from './Personal';

export default function Workspace(props) {
  return (
    <div id="workspace">
      <Card>
        <button>
          <i className="fa-regular fa-file-lines"></i> Content
        </button>
        <p>
          <i className="fa-solid fa-trash-can"></i> Clear Resume
        </p>
        <button>Load Example</button>
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
