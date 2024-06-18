import React, { useState, useContext } from "react";
import { ClassContext } from "../helpers/Context";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { FaSave } from "react-icons/fa";

const Table = () => {
  const { handleDelete, handleEdit, myData } = useContext(ClassContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedValues(myData[index]);
  };
  const handleSaveEdit = () => {
    const updatedData = [...myData];
    updatedData[editingIndex] = editedValues;

    setEditingIndex(null);
    setEditedValues({});

    handleEdit(editingIndex, editedValues);
  };

  const handleCancel = () => {
    const updatedData = [...myData];
    updatedData[editingIndex] = editedValues;

    setEditingIndex(null);
    setEditedValues({});

    handleEdit(editingIndex, editedValues);
  };

  return (
    <div>
      <h1>Student Registration Details</h1>
      <table className="table">
        <thead className="head">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>State of Origin</th>
            <th>Gender</th>
            <th>Program</th>
            <th>Price</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="student-table-body">
          {myData.map((item, index) => (
            <tr className="marv">
              <th>
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="input"
                    value={editedValues.firstName}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        firstName: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.firstName
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="input"
                    value={editedValues.surName}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        surName: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.surName
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="email"
                    className="input"
                    value={editedValues.email}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.email
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="number"
                    className="input"
                    value={editedValues.phoneNumber}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.phoneNumber
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="text"
                    className="input"
                    value={editedValues.state}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        state: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.state
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <select
                    value={editedValues.gender}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        gender: e.target.value,
                      })
                    }
                  >
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                  </select>
                ) : (
                  item.gender
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <select
                    value={editedValues.program}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        program: e.target.value,
                      })
                    }
                  >
                    <option value="">select program</option>
                    <option value="ICT Fundamentals">ICT Fundamentals</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Frontend Web Development">
                      Frontend Web Development
                    </option>
                    <option value="Backend Web Development">
                      Backend Web Development
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                ) : (
                  item.program
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <select
                    value={editedValues.price}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        price: e.target.value,
                      })
                    }
                  >
                    <option value="">Amount</option>
                    <option value="ICT Fundamentals(40,000)">
                      ICT Fundamentals(40,000)
                    </option>
                    <option value="Web Design(45,000)">
                      Web Design(45,000)
                    </option>
                    <option value="Web Development(100,000)">
                      Web Development(100,000)
                    </option>
                    <option value="Frontend Web Development(150,000)">
                      Frontend Web Development(150,000)
                    </option>
                    <option value="Backend Web Development(120,000)">
                      Backend Web Development(120,000)
                    </option>
                    <option value="Mobile App Development(120,000)">
                      Mobile App Development(120,000)
                    </option>
                    <option value="Graphics Design(60,000)">
                      Graphics Design(60,000)
                    </option>
                    <option value="UI/UX Design(70,000)">
                      UI/UX Design(70,000)
                    </option>
                    <option value="Digital Marketing(50,000)">
                      Digital Marketing(50,000)
                    </option>
                  </select>
                ) : (
                  item.price
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="date"
                    className="input"
                    value={editedValues.start_date}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        start_date: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.start_date
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <input
                    type="date"
                    className="input"
                    value={editedValues.end_date}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        end_date: e.target.value,
                      })
                    }
                  />
                ) : (
                  item.end_date
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <div>
                    <button onClick={handleCancel} className="btn">
                      <FcCancel style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleEditClick(index)}
                      className="btn"
                    >
                      <FaEdit style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                )}
              </th>
              <th>
                {editingIndex === index ? (
                  <div>
                    <button onClick={handleSaveEdit} className="btn">
                      <FaSave style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleDelete(index)} className="btn">
                      <FaTrash style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
