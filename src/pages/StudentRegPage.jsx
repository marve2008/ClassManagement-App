import React from "react";
import StudentReg from "../components/StudentReg";
import pix from "../assets/images/marv.png";

const StudentRegPage = () => {
  const style = {
    backgroundImage: `url(${pix})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <div style={style} className="reg">
      <StudentReg />
    </div>
  );
};

export default StudentRegPage;
