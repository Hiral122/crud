import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id); //key value pair
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // delete function
  function handleDelete(id) {
    axios
      .delete(`https://64dcbbaee64a8525a0f708e6.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []); // Removed 'data' from the dependency array

  function getData() {
    axios
      .get("https://64dcbbaee64a8525a0f708e6.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    // creating Table
    <div>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() =>
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
