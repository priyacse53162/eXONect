import "./index.css"
import { FaMapMarkerAlt } from "react-icons/fa";
const Navbar=()=>{
    return(
        <div className="navcontainer">
            <div className="nav">
                <button className="mapicon"><FaMapMarkerAlt /></button>
                <h1 className="main-heading">Place Management System</h1>
            </div> 
        </div>
    )
}

export default Navbar