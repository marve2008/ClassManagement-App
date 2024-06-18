import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";


export const ClassContext = createContext();

const SearchProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);

  

  
  const handleEdit = (index, updatedValues) => {
    const updatedData = [...myData];
    updatedData[index] = updatedValues;
    setMyData(updatedData);
    localStorage.setItem("MARV", JSON.stringify(data));
    toast.success("Expence Edited", {
      position: "top-center",
    });
  };

  const handleDelete = (index) => {
    const deleteItem = [...myData];
    deleteItem.splice(index, 1);
    setMyData(deleteItem);
    localStorage.setItem("MARV", JSON.stringify(data));
    toast.success("Expence Deleted", {
      position: "top-center",
      theme: "dark",
    });
  };

  return (
    <>
      <ClassContext.Provider
        value={{
          
          handleEdit,
          handleDelete,
          myData,
          setMyData,
        }}
      >
        {children}
      </ClassContext.Provider>
    </>
  );
};

export { SearchProvider };
