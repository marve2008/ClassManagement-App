import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'






function Side(){
    return(
        <>
           <div className="sidebar">

<nav>
    <ul> 
        <li><Link to={'/'}><i class="fas fa-user"></i>LOGIN </Link></li>
        <li><Link to={'/student-reg'}><i class="fas fa-user-plus"></i>REGISTRATION</Link></li>
        <li><Link to={'/data-table'}><i class="fas fa-user-graduate"></i>STUDENTS</Link></li>
    </ul>
    
</nav>
</div>
        </>
    )
}

const SideBar = () => {
    

    

let [isSidebarOpen, setIsSidebarOpen] = useState(false)
const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
}
  return (
    <div>
       <div >
       <div className="container" > 
      {isSidebarOpen && <Side/>}
      <button onClick={handleToggle} className='bttn' style={{
       
        }}>
        {isSidebarOpen? <><FaTimes style={{fontSize: '20px'}}/></>  : <><FaBars style={{fontSize: '20px'}}/></>}
      </button>
      </div>
      </div>
    </div>
  )
}

export default SideBar
