import React, { useState } from "react";
import valid from "../../../data";
import { titles } from "../../../data";
import { toppings1 } from "../../../data";

import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  //take name of each of our form from the <input name="name"
  // name: yup.string().required("Name is required"),
  //does it validate if I enter name beginning number
  // email: yup.string().email("email must be valid").required("Cant't be empty"),
  // password: yup
  // .string()
  //.password("valid password plz")
  // .required("Cant't be empty"),
  topping: yup.boolean().oneOf([true], "pleas select "),
  // topping0: yup.boolean().oneOf([true], "pleas select "),
  // topping1: yup.boolean().oneOf([true], "pleas select"),
  // topping2: yup.boolean().oneOf([true], "pleas select "),
  // topping3: yup.boolean().oneOf([true], "pleas select"),
  // topping4: yup.boolean().oneOf([true], "pleas select "),
  // topping5: yup.boolean().oneOf([true], "pleas select"),
  // topping6: yup.boolean().oneOf([true], "pleas select "),
  // topping7: yup.boolean().oneOf([true], "pleas select"),
  // topping8: yup.boolean().oneOf([true], "pleas select"),
  // topping9: yup.boolean().oneOf([true], "pleas select "),
  // topping10: yup.boolean().oneOf([true], "pleas select"),
  // topping11: yup.boolean().oneOf([true], "pleas select "),
  // topping12: yup.boolean().oneOf([true], "pleas select"),
  // topping13: yup.boolean().oneOf([true], "pleas select "),
  // topping14: yup.boolean().oneOf([true], "pleas select"),
  // topping8: yup.boolean().oneOf([true], "pleas select"),
}); //expression for yup completes

const CheckBoxBuilder = () => {
  var selectArray = [];
  const [theValid] = useState(valid);
  const [title] = useState(titles);
  const [toppings] = useState(toppings1);
  // state defining and assinging  an object :Destructuring
  const [dataState, setDataState] = useState({
    // name: "",
    // email: "",
    // password: "",
    topping: "false",
    // topping0: "false",
    // topping1: "false",
    // topping2: "false",
    // topping3: "false",
    // topping4: "false",
    // topping5: "false",
  });

  const [errorState, setErrorState] = useState({
    // name: "",
    // email: "",
    // motivation: "",
    // position: "",
    topping: "",
    // topping0: "",
    // topping1: "",
    // topping2: "",
    // topping3: "",
    // topping4: "",
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
  // const arr = [];

  const inputChange = (e) => {
    // const count = (a) => {
    //   return (a = 1);
    // };
    console.log("input changed");
    e.persist();
    validate(e);
    // debugger;

    let value = e.target.type === "checkbox" ? e.target.checked : e.target.id;
    // let val = [value];
    //let val = count(value);
    // console.log(val);
    // val.map((a) => {
    //   if (value === e.target.checked) {
    //     arr.push(val);
    //     console.log(arr);
    //     let count = arr.length + 1;
    //     console.log(count);
    //   }

    //   if (arr.length > 8) {
    //     alert("you cannot add more than this");
    //   }
    // });

    // let val1 = count(value);
    // console.log(val1);
    // console.log(value);
    // if (e.target.checked > 7) {
    //   alert("you cannot select more than 8");

    setDataState({ ...dataState, [e.target.name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted!!!!");
    axios
      .post("https://reqres.in/api/users", dataState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  var selected = new Array();

  //Reference the Table.

  //Reference all the CheckBoxes in Table.
  var chks = document.getElementsByTagName("INPUT");
  var chks1 = Array.from(chks);
  console.log(chks1);
  // Loop and push the checked CheckBox value in Array.
  for (var i = 0; i < chks1.length; i++) {
    if (chks[i].checked) {
      selected.push(chks[i].value);
    }
  }

  //Display the selected CheckBox values.
  if (selected.length > 7) {
    console.log(selected);
    //validate();
    alert("Values already Selected : " + selected.join(","));
  }

  return (
    <>
      <h2 className="valid">
        {title[1]}
        <br></br>
        <span>{theValid[1]}</span>
      </h2>
      <div className="form-wrapper">
        <h1>Form goes down here</h1>
        <form onSubmit={submitForm}>
          <div className="checkbo">
            {toppings.map((a, index) => {
              if (a.checked) {
                selectArray.push(dataState.topping);
              }
              return (
                <div className="check">
                  <input
                    key={index}
                    type="checkbox"
                    // name={`topping${index}`}
                    name={`topping`}
                    value={dataState.topping}
                    onChange={inputChange}
                  />

                  {/* if(count>7){alert("You cannot select more than 8")}; } */}
                  {errorState.topping.length > 8 ? (
                    <p className="error">{errorState.topping}</p>
                  ) : null}
                  <label htmlFor={`${a}`}>{a}</label>

                  <br></br>
                </div>
              );
            })}

            {/* <button type="button">Submit</button> */}
          </div>
        </form>
      </div>
    </>
  );
};
export default CheckBoxBuilder;

//             {/* <label className="dklabel" htmlFor="checked">
//               Terms of Service:
//               <input
//                 className="dktext"
//                 type="checkbox"
//                 name="terms"
//                 value={dataState.terms}
//                 onChange={inputChange}
//               />
//               {errorState.topping.length > 8 ? (
//                 <p className="error">{errorState.terms}</p>
//               ) : null}
//             </label>
//           </div> */}
//           {/* <label className="dklabel" htmlFor="name">
//           Name:
//           <input
//             className="dktext"
//             type="text"
//             name="name"
//             value={dataState.name} //default value will be the text entered val
//             placeholder="Enter Name"
//             onChange={inputChange}
//           />
//         </label> */}
//           {/* <label className="dklabel" htmlFor="email">
//           Email:
//           <input
//             className="dktext"
//             type="text"
//             name="email"
//             value={dataState.email}
//             placeholder="someone@something.com"
//             onChange={inputChange}
//           /> */}
//           {/* {errorState.email.length > 0 ? (
//             <p className="error">{errorState.email}</p>
//           ) : null} */}
//           {/* </label>
// {/*
//         <label className="dklabel" htmlFor="password">
//           Password:
//           <input
//             className="dktext"
//             type="password"
//             name="password"
//             value={dataState.name}
//             placeholder="Encrypted"
//             onChange={inputChange}
//           /> */}
//           {/* </label> */}
//           {/*label and content for checkbox */}
//           {/* Button and Submit */}

// // */

// // const CheckBoxBuilder = () => {
// //   const [theValid] = useState(valid);
// //   const [title] = useState(titles);
// //   const [toppings] = useState(toppings1);
// //   /* This section is for mapping our toppings checkbox */

// //   return (
// //     <>
// //       <h2 className="valid">
// //         {title[1]}
// //         <br></br>
// //         <span>{theValid[1]}</span>
// //       </h2>

// //       <div className="checkbo">
// //         {toppings.map((a) => {
// //           return (
// //             <div className="check">
// //               <input
// //                 id={`${a}`}
// //                 type="checkbox"
// //                 name="topping"
// //                 value={`${a}`}
// //               />
// //               <label htmlFor={`${a}`}>{a}</label>
// //               <br></br>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };
// // export default CheckBoxBuilder;
