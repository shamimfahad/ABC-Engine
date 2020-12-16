import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormFirstPart from './form-part-one.component';
import FormSecondPart from './form-part-two.component';

import {
  setCurrentStep,
  setShowResult,
  storeFormData,
} from '../../redux/Action';

const FormComponent = ({
  step,
  setCurrentStep,
  setShowResult,
  storeFormData,
}) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
    min_x: undefined,
    max_x: undefined,
    min_y: undefined,
    max_y: undefined,
    min_z: undefined,
    max_z: undefined,
  });
  const prevStep = () => {
    step > 1 ? setCurrentStep(step - 1) : console.log('no previous step');
  };
  const nextStep = () => {
    handleSubmit(formData);
    if (step < 2) {
      setCurrentStep(step + 1);
    } else {
      setShowResult(true);
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(`${name}: ${value}`);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (data) => {
    console.log(data);
    storeFormData(data);
  };
  switch (step) {
    case 1:
      return (
        <FormFirstPart
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <>
          <FormFirstPart
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
          />
          <FormSecondPart
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </>
      );
    default:
      return (
        <FormFirstPart
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentStep: (step) => dispatch(setCurrentStep(step)),
  setShowResult: (val) => dispatch(setShowResult(val)),
  storeFormData: (data) => dispatch(storeFormData(data)),
});

const mapStateToProps = (state) => ({
  step: state.step,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
