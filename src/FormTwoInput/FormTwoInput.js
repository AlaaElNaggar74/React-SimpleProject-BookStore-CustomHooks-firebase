import React, { useState } from "react";
import { useFirebase } from "../useFirebaseHook/useFirebase";
import "./style.css";
const FormTwoInput = () => {
  let { addNewItem } = useFirebase();

  let [title, setTitle] = useState("");
  let [auther, setAuther] = useState("");
  let [date, setDate] = useState("");
  let [type, setType] = useState("");
  let [hiddeButt, setHideBut] = useState(false);
  let [newInput, setNewInput] = useState([]);

  let newElementHandeler = async () => {
    addNewItem({ title, auther, date, type });
    setTitle("");
    setAuther("");
    setDate("");
    setType("");
  };

  return (
    <div className="FormTwoInput">
      <div className="container">
        <div className="text-center mt-5">
          <button
            className="btn btn-danger me-2 fw-bold fs-5"
            type="button"
            onClick={() => {
              setHideBut(!hiddeButt);
            }}
          >
            {!hiddeButt ? "Show INsert Field" : "hide INsert Field"}
          </button>
        </div>
        {hiddeButt ? (
          <>
            <h1 className="text-center my-3">Form Input Data To DataBase</h1>
            <div className="ta">
              <table className="table my-3">
                <thead>
                  <tr>
                    <th scope="col">Book Title</th>
                    <th scope="col">Book Auther</th>
                    <th scope="col">Date</th>
                    <th scope="col">Option</th>
                    <th scope="col">Add</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        value={title}
                        placeholder="Enter Title Book"
                        required
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        value={auther}
                        required
                        placeholder="Enter Authe Book"
                        onChange={(e) => {
                          setAuther(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="validationCustom01"
                        value={date}
                        required
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <select
                        name="type"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      >
                        <option value="Action">Action </option>
                        <option value="Historical">Historical </option>
                        <option value="Romantic">Romantic </option>
                        <option value="Sport">Sport </option>
                        <option value="Anther">Anther </option>
                      </select>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger me-2 fw-bold fs-5"
                        type="submit"
                        onClick={() => {
                          newElementHandeler();
                        }}
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormTwoInput;
