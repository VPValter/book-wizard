import { Link } from 'react-router-dom';

const Step1 = () => {
  return (
    <div>
      <h2>Step 1 component</h2>
      <Link to='/step2'>Next</Link>
    </div>
  );
};

export default Step1;
