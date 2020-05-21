import React, { useState } from "react";
import AmountSection from "./amount";
import CheckBoxBuilder from "./form-component/checkbox";
import Radio from "./form-component/radio";
import ChoiceBuilder from "./form-component/choice";
import SpecialInstruction from "./form-component/special-inst";
import SignupForm from "./form-component/textbox";
import axios from "axios";
import * as yup from "yup";
import "../../App.css";

const PizzaBuilder = (props) => {
  const [amount, setAmount] = useState(props.amt); //liked +1 (Boolean)=0 or 1
  const [glutenFree, setGlutenFree] = useState(false);

  const [dataState, setDataState] = useState({
    name: "",
    topping: "false",
  });
  const formSchema = yup.object().shape({
    name: yup
      .string()
      // .name("name should be valid")
      .required("length should be more than 2 char"),
  });

  const [errorState, setErrorState] = useState({
    name: "",
    topping: "",
  });

  const validate = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted!!!!");
    axios
      .post("https://reqres.in/api/users", dataState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const inputChange = (e) => {
    console.log("input changed");
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDataState({ ...dataState, [e.target.name]: value });
    // if (value === e.target.checked) {
    //   if (value.length > 0 || value.length < 2) alert("Enter more than 2 char");
    // }
  };

  const IsglutenFree = () => {
    setGlutenFree(!glutenFree);
    if (glutenFree === true) {
      setAmount(amount - 1);
    } else {
      setAmount(amount + 1);
    }
  };

  return (
    <div className="pizza">
      <div className="form-wrapper">
        <h1>Form goes down here</h1>
        <form onSubmit={submitForm}>
          {/* <label className="dklabel" htmlFor="name">
            Name:
            <input
              className="dktext"
              type="text"
              name="name"
              id="name"
              value={dataState.name}
              placeholder="Enter Atleast two character"
              onChange={inputChange}
            />
            {console.log(errorState.name)}
            {errorState.name < 2 ? (
              <p className="error">{errorState.name}</p>
            ) : null}
          </label> */}
          {/* </form> */}
          <SignupForm value={dataState.name} />
          <ChoiceBuilder />
          <Radio />
          <CheckBoxBuilder value={dataState.topping} />
          <SpecialInstruction />
          {<AmountSection clickhandle={IsglutenFree} amount={amount} />}
          {console.log("-->" + amount)}
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>"just for test"</p>
    </div>
  );
};
export default PizzaBuilder;

/*


*/
