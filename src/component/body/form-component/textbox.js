import React from "react";
import { useFormik } from "formik";
import "../../../App.css";
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.naame = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be atleast 3 characters or more";
  }

  return errors;
};
const SignupForm = (props) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: props.value,
    },
    validate,
  });

  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="enter more than 2 letters"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? (
        <span className="validSpan">{formik.errors.name}</span>
      ) : null}
    </>
  );
};
export default SignupForm;
