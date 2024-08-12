import { useState } from "react";

export default function Home() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({ formValues, [event.target.name]: event.target.value });
  }
  return (
    <>
      <h1>This is my home page</h1>;
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <p>Current Value is {formValues.name}</p>
        <p>Current Value is {formValues.email}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
