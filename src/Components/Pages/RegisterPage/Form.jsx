import React, { useState } from "react";
import FormSuccess from "./FormSuccess/FormSuccess";
import RegisterForm from "./RegisterForm/RegisterForm";

const Form = () => {
  const [submited, setSubmited] = useState(false);

  const submitForm = () => {
    setSubmited(true);
  };

  return (
    <div>
      {!submited ? <RegisterForm submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
