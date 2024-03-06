import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import DeleteForeverIcon from " @material-ui/icons/DeleteForever";
import { localhost } from "../../../main.jsx";

const DeleteForm = () => {
  const history = useHistory();

  const [deleteitem, setDelete] = useState([]);

  useEffect(() => {
    fetch(`${localhost}/form`)
      .then((response) => response.json())
      .then((data) => setDelete(data));
  }, []);

  const handledelete = (id) => {
    fetch(`${localhost}/deleteInfoForm/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your Registration has been deleted");
        history.replace("/admin");
      });
  };

  return (
    <div>
      <h1 className="text-center">Delete Form if NEEDED</h1>

      {deleteitem.map((value) => (
        <div className="p-4">
          <div className="row">
            <div className="col-3">
              <h4>{value.companyname}</h4>
            </div>
            <div className="col-3">
              {" "}
              <p>{value.email} </p>
            </div>

            <div className="col-3">
              {" "}
              <p> Location : {value.city} </p>
            </div>
            <div className="col-3">
              {" "}
              <button onClick={() => handledelete(value._id)}>
                <DeleteForeverIcon style={{ color: "#260f33" }} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteForm;
