import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

export const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  border: '1px solid #ccc',
  borderRadius: '7px',
  width: '60%',
  margin: 'auto',
  padding: '0.5rem 0',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
};

export const inputRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '10px',
};

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
    } else {
      setIsFirstStep(true);
    }
  }, [step]);

  return (
    // first part of the form
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <p>Part One</p>
          <div style={inputRowStyle}>
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
          <div style={inputRowStyle}>
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
          <div style={inputRowStyle}>
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
          <div style={inputRowStyle}>
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
        {/* Navigator with checker */}
        {step === 1 && (
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                prevStep();
              }}
              disabled
            >
              Prev
            </Button>
            <Button variant="outlined" size="small" type="submit">
              Next
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  step: state.step,
  formData: state.formData,
});

export default connect(mapStateToProps)(FormFirstPart);
