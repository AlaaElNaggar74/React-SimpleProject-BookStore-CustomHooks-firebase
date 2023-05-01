import React, { useState } from "react";

import { useFirebase } from "../useFirebaseHook/useFirebase";

const DataBaseContent = () => {
  let { items, deletNewItem, upddateFunc } = useFirebase();

  let [title, setTitle] = useState("");
  let [auther, setAuther] = useState("");
  let [date, setDate] = useState("");
  let [type, setType] = useState("");
  let [updat, setUpdate] = useState(false);
  let [selectedid, setSelectedid] = useState("");

  let chechEmpty = (value) => {

    upddateFunc(value.id, { title, auther, date, type });

    setUpdate(!updat);

    //  setTitle("");
    //  setAuther("")
    //  setDate("")
    //  setType("")
  };
  return (
    <div className="DataBaseContent">
      <div className="container">
        <table className="table mt-5 dorder dorder-1">
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
            {items.map((item) => (
              <>
                <tr key={item.id}>
                  <td className="col-3">{item.title}</td>
                  <td className="col-2">{item.auther}</td>
                  <td className="col-2">{item.date}</td>
                  <td className="col-2">{item.type}</td>
                  <td className="col-3">
                    <button
                      className="btn btn-primary m-1"
                      type="submit"
                      onClick={() => {
                        deletNewItem(item.id);
                      }}
                    >
                      REMOVE
                    </button>
                    <button
                      className="btn btn-primary m-1"
                      type="submit"
                      onClick={(e) => {
                        setUpdate(!updat);
                        setSelectedid(item.id);


                        setTitle(item.title);
                        setAuther(item.auther);
                        setDate(item.date);
                        setType(item.type);
                        
                        console.log(item.id);

                      }}
                    >
                      Edite
                    </button>
                  </td>
                </tr>
                {updat && selectedid === item.id ? (
                  
                  <tr>
                    <td className="col-3">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue={title}
                        required
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </td>
                    <td className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue={auther}
                        required
                        onChange={(e) => {
                          setAuther(e.target.value);
                        }}
                      />
                    </td>
                    <td className="col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue={date}
                        required
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </td>
                    <td className="col-2">
                      <select
                        name="type"
                        defaultValue={type}
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
                    <td className="col-3">
                      {" "}
                      <div className="text-centet">
                        <button
                          className="btn btn-danger me- fw-bold "
                          type="submit"
                          onClick={() => {
                            chechEmpty(item);
                          }}
                        >
                          Upddate
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBaseContent;
