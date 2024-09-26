import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
    console.log(formValues)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = await fetch('https://dating-backend-beta.vercel.app/moderator/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
      });
      const data = await response.json();
      

      if (data.status === "ok") {
        navigate(`/admin`);
      } else if (data.status === "error") {
        setStatus("Password is incorrect");
      } else if (data.status === "email") {
        setStatus("Email already exists");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center" style={{ height: "50vh", margin: 0, backgroundSize: 'cover',
      backgroundPosition: 'center',}}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg" style={{ borderRadius: "10px", padding: "15px", backgroundSize: 'cover',
    backgroundPosition: 'center', }}>
            <div className="card-body p-5">
              <h3 className="mb-2 text-center" style={{color:"white"}}>Sign Up</h3>
              {status && <p className="text-danger text-center">{status}</p>} 
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="typeEmailX-2" className="form-label">Name</label>
                  <input
                    type="text"
                    id="typeEm"
                    name="name"
                    autoComplete='off'
                    className="form-control"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="typeEmailX-2" className="form-label">Email</label>
                  <input
                    type="email"
                    id="typeEmail"
                    name="email"
                    className="form-control"
                    autoComplete='off'
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="typePasswordX-2" className="form-label">Password</label>
                  <input
                    type="password"
                    id="typePassword"
                    name="password"
                    autoComplete='off'
                    className="form-control"
                    value={formValues.password}
                    onChange={handleInputChange}
                    required
                    style={{ padding: "10px", fontSize: "1rem" }}
                  />
                </div>
                <div className="d-grid gap-2">
                <button className="btn btn-danger btn-block" type="submit" style={{ padding: "12px", fontSize: "20px"}}>
  Sign up
</button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <p>Already have an account? <NavLink to="/signin" style={{ textDecoration: "none" }}>Sign in</NavLink></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
