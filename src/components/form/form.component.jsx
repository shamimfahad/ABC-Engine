import React, { useState } from 'react';

import FormFirstPart from './form-part-one.component';
import FormSecondPart from './form-part-two.component';

const FormComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  React.useEffect(() => {
    console.log(step);
  }, [step]);
  // React.useEffect(() => {
  //   formData.toString().length > 0 && console.log(formData)
  // });
  const prevStep = () => {
    step > 1 ? setStep(step - 1) : console.log('no previous step');
  };
  const nextStep = () => {
    setStep(step + 1);
    handleSubmit(formData);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(`${name}: ${value}`);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (data) => {
    console.log(data);
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
        <FormSecondPart
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
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

export default FormComponent;
