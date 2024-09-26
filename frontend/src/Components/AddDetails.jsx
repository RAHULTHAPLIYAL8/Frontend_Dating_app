import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addDetailPhoto from "../assets/bgadddetailphoto.jpg";

export default function AddDetails() {
  const { id } = useParams(); // Get the user id from the URL parameters
  const [formValues, setFormValues] = useState([]); // To store form responses
  const [value, setValue] = useState([]); // To store fetched questions
  const [status, setStatus] = useState(""); // To track form submission status
  const navigate = useNavigate();

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormValues = [...formValues]; // Create a copy of the form values
    const existingIndex = newFormValues.findIndex(
      (item) => item.question === name
    );

    if (existingIndex >= 0) {
      // Update existing question's answer
      newFormValues[existingIndex].answer = value;
    } else {
      // Add new question-answer pair
      newFormValues.push({ question: name, answer: value });
    }

    setFormValues(newFormValues); // Update state with new/updated form values
  };

  // Fetch questions from the server when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://dating-backend-beta.vercel.app/moderator/get-questions"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setValue(data); // Set the fetched questions
        console.log("Fetched questions: ", data);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    console.log("Form values: ", { userId: id, responses: formValues });

    const response = await fetch(
      "https://dating-backend-beta.vercel.app/user-profile/save-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: id, responses: formValues }),
      }
    );

    const data = await response.json();
    if (data.status == "ok") navigate(`/dashboard/${id}/${data.status}`);
    setStatus("success");
  };

  return (
    <div
  className="container"
  style={{
    borderRadius: "10px",
    backgroundImage: `url(${addDetailPhoto})`, // Correct syntax
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "98.5vw",
    backgroundColor:"black"
  }}
>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card shadow-lg p-4" style={{ borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Add Your Details</h2>
        <form onSubmit={handleSubmitClick}>
          {value.map((field, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={`question-${index}`} className="form-label">
                {field.question}
              </label>
              <input
                className="form-control"
                id={`question-${index}`}
                placeholder={field.description}
                onChange={handleInputChange}
                name={field._id}
                value={
                  formValues.find((item) => item.question === field._id)
                    ?.answer || ""
                }
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "#4A90E2" }}
          >
            Submit
          </button>

          {/* Uncomment to show status messages */}
          {/* <p className="text-center mt-3">
            {status === "success"
              ? "Details added successfully! Go to sign-in page."
              : status === "error"
              ? "Error occurred. Please try again."
              : ""}
          </p> */}
        </form>
      </div>
    </div>
  </div>
</div>

  );
}
