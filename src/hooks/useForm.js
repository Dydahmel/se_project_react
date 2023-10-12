import { useState } from "react";

export default function useForm(inputValues) {
  //creating state for input values
  const [values, setValues] = useState(inputValues);
  //onChange handler
  const handleChange = (event) => {
    //???????
    const { value, name } = event.target;
    //set values based on input field
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
