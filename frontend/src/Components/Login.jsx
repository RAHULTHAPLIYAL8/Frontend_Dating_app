import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const navigate = useNavigate();
  const [status, setStatus] = useState();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues)
    });
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/details");
    } else if (data.status === "error") {
      setStatus("Password is incorrect");
    } else if (data.status === "email") {
      setStatus("Email already exists");
    }
  };

  return (
   
<>
</>
  
  );
};

export default Form;
