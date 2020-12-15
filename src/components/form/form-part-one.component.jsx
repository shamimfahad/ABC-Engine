import React from 'react';

const FormFirstPart = ({ prevStep, nextStep, handleChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <div style={{ widh: 'auto' }}>
        <p>Part One</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Project Name</p>
          <input
            type="text"
            name="projectName"
            id="projectName"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Project Description</p>
          <input
            type="text"
            name="projectDescription"
            id="projectDescription"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Client</p>
          <input
            type="text"
            name="client"
            id="client"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <p>Contractor</p>
          <input
            type="text"
            name="contractor"
            id="contractor"
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            prevStep();
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            nextStep();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormFirstPart;
