import React from 'react';
import { connect } from 'react-redux';

import FormFirstPart from './form-part-one.component';
import FormSecondPart from './form-part-two.component';

import { setCurrentStep, setShowResult, setFormData } from '../../redux/Action';

const FormComponent = ({
  step,
  setCurrentStep,
  setShowResult,
  setFormData,
  formData,
}) => {
  const prevStep = () => {
    step > 1 ? setCurrentStep(step - 1) : console.log('no previous step');
  };
  const nextStep = () => {
    if (step < 2) {
      setCurrentStep(step + 1);
    } else {
      setShowResult(true);
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  switch (step) {
    case 1:
      return (
        <FormFirstPart
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <>
          <FormFirstPart
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
          />
          <FormSecondPart
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        </>
      );
    default:
      return (
        <FormFirstPart
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentStep: (step) => dispatch(setCurrentStep(step)),
  setShowResult: (val) => dispatch(setShowResult(val)),
  setFormData: (data) => dispatch(setFormData(data)),
});

const mapStateToProps = (state) => ({
  step: state.step,
  formData: state.formData,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
