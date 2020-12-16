import React from 'react';
import { connect } from 'react-redux';

const FormFirstPart = ({
  prevStep,
  nextStep,
  handleChange,
  formData,
  step,
}) => {
  const [isFirstStep, setIsFirstStep] = React.useState(true);
  React.useEffect(() => {
    if (step !== 1) {
      setIsFirstStep(false);
    }
    else {
      setIsFirstStep(true);
    }
  }, [step]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          border: '1px solid #686d76',
          width: '50%',
          margin: 'auto',
          padding: '0.5rem 0',
        }}
      >
        <div
          style={{
            widh: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <p>Part One</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <p>Project Name</p>
            <input
              type="text"
              name="projectName"
              id="projectName"
              disabled={!isFirstStep}
              value={formData.projectName && formData.projectName}
              onChange={handleChange}
              style={{ margin: '0.5rem 0' }}
              required
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <p>Project Description</p>
            <input
              type="text"
              name="projectDescription"
              id="projectDescription"
              disabled={!isFirstStep}
              value={formData.projectDescription && formData.projectDescription}
              onChange={handleChange}
              style={{ margin: '0.5rem 0' }}
              required
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <p>Client</p>
            <input
              type="text"
              name="client"
              id="client"
              disabled={!isFirstStep}
              value={formData.client && formData.client}
              onChange={handleChange}
              style={{ margin: '0.5rem 0' }}
              required
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <p>Contractor</p>
            <input
              type="text"
              name="contractor"
              id="contractor"
              disabled={!isFirstStep}
              value={formData.contractor && formData.contractor}
              onChange={handleChange}
              style={{ margin: '0.5rem 0' }}
              required
            />
          </div>
        </div>
        {step === 1 && (
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={() => {
                prevStep();
              }}
              disabled
            >
              Prev
            </button>
            <button type="submit">Next</button>
          </div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps)(FormFirstPart);
