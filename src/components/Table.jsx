import React, { useState, useContext } from 'react';
import { ClassContext } from '../helpers/Context';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc'; 
import { FaSave } from 'react-icons/fa';

const Table = () => {
  const {handleDelete, handleEdit, myData} = useContext(ClassContext)
  const [editingIndex, setEditingIndex] = useState(null)
const [editedValues, setEditedValues] = useState({})


const handleEditClick = (index) => {
  setEditingIndex(index)
  setEditedValues(myData[index])
}
const handleSaveEdit = () => {
  const updatedData = [...myData]
  updatedData[editingIndex] = editedValues


  setEditingIndex(null)
  setEditedValues({})


  handleEdit(editingIndex, editedValues)
}
  

const handleCancel = () => {
  const updatedData = [...myData]
  updatedData[editingIndex] = editedValues


  setEditingIndex(null)
  setEditedValues({})


  handleEdit(editingIndex, editedValues)



}

  return (
    <div>
      <h1>Student Registration Details</h1>
      <table className='table'>
        <thead className='head'>
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
          </tr>
        </thead>
        <tbody id="student-table-body">
        {myData.map((item, index) => (
                <tr className='marv'>
    
                <th>{editingIndex === index ? <input type='text' className='input' value={editedValues.firstName} onChange={(e) => setEditedValues({...editedValues,firstName: e.target.value})}></input>: item.firstName}</th>
                <th>{editingIndex === index ? <input type='text' className='input' value={editedValues.surName} onChange={(e) => setEditedValues({...editedValues,surName: e.target.value})}></input>: item.surName}</th>
                <th>{editingIndex === index ? <input type='email' className='input' value={editedValues.email} onChange={(e) => setEditedValues({...editedValues,email: e.target.value})}></input>: item.email}</th>
                <th>{editingIndex === index ? <input type='number' className='input' value={editedValues.phoneNumber} onChange={(e) => setEditedValues({...editedValues,phoneNumber: e.target.value})}></input>: item.phoneNumber}</th>
                <th>{editingIndex === index ? <input type='text' className='input' value={editedValues.state} onChange={(e) => setEditedValues({...editedValues,state: e.target.value})}></input>: item.state}</th>
                <th>{editingIndex === index ? <input type='date' className='input' value={editedValues.start_date} onChange={(e) => setEditedValues({...editedValues,start_date: e.target.value})}></input>: item.start_date}</th>
                <th>{editingIndex === index ? <input type='date' className='input' value={editedValues.end_date} onChange={(e) => setEditedValues({...editedValues,end_date: e.target.value})}></input>: item.end_date}</th>
                <th>
                  {editingIndex === index ? (
                    <div>
                     <button onClick={handleCancel}className='btn'><FcCancel style={{fontSize: '20px'}}/></button>
                     </div>
                  ):(
                    <div>
                      <button onClick={() => handleEditClick(index)}className='btn'><FaEdit style={{fontSize: '20px'}}/></button>
                    </div>
                  )}
               
                </th>
                <th>
                  {editingIndex === index ? (
                    <div>
                     <button onClick={handleSaveEdit} className='btn'><FaSave style={{fontSize: '20px'}}/></button>
                     </div>
                  ):(
                    <div>
                      <button onClick={() => handleDelete(index)} className='btn'><FaTrash style={{fontSize: '20px'}}/></button>
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