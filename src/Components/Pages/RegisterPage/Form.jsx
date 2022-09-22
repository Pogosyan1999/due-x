import React, { useState } from "react";
import FormSuccess from "./FormSuccess/FormSuccess";
import RegisterForm from "./RegisterForm/RegisterForm";

const Form = () => {
  const [submited, setSubmited] = useState();

  const submitForm = () => {
    setSubmited(!submited);
  };

  return (
    <div>
      {!submited ? <RegisterForm submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
