import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://64dcbbaee64a8525a0f708e6.mockapi.io/crud-youtube", {
      name: name,
      email: email,
      header
    });
    history("/read");
  };

  return (
    <>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label"
            onChange={(e) => setName(e.target.value)}
          >
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        
      </form>
    </>
  );
};

export default Create;
